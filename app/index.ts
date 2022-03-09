import * as fs from 'fs'

const wait = (ms: number) => new Promise(done => setTimeout(done, ms));

(async () => {
    const logFilePath = '/var/log/sample.log'
    const lines = 10000

    const iterate = (count: number) => new Promise(async (done) => {
        // Create log file.
        const stream = fs.createWriteStream(logFilePath, { flags: 'w' })
        // Add a line per 1ms (10000 times).
        for (let line = 0; line < lines; line++) {
            stream.write(`{"LINE":${count * lines + line}, "TIMESTAMP":${Date.now()}}\n`)
            await wait(1)
        }
        stream.end(async () => {
            // Log rotate (per 10s).
            fs.rename(logFilePath, `${logFilePath}.0`, done)
        })
    })

    let rotate = 0
    while (true) {
        console.log('COUNT:', rotate * lines)
        await iterate(rotate)
        rotate += 1
    }
})()
