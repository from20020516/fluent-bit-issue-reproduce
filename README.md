# fluent-bit issue reproduce

> $ npm i --prefix app

```
$ VERSION=1.8.13 docker-compose up

...

fluent-bit-issue-reproduce-fluent-1  | [1160] sample-tail-logs: [1646891962.288434700, {"LINE"=>19998, "TIMESTAMP"=>1646891962288}]
fluent-bit-issue-reproduce-fluent-1  | [1161] sample-tail-logs: [1646891962.290276100, {"LINE"=>19999, "TIMESTAMP"=>1646891962289}]
fluent-bit-issue-reproduce-fluent-1  | [2022/03/10 05:59:30] [ info] [input:tail:tail.0] inotify_fs_remove(): inode=3309184 watch_fd=4
fluent-bit-issue-reproduce-logger-1  | COUNT: 30000
fluent-bit-issue-reproduce-logger-1  | COUNT: 40000
fluent-bit-issue-reproduce-logger-1  | COUNT: 50000

...

$ docker-compose down
```

```
$ VERSION=1.8.12 docker-compose up

...

fluent-bit-issue-reproduce-fluent-1  | [3101] sample-tail-logs: [1646892143.330431500, {"LINE"=>36794, "TIMESTAMP"=>1646892143330}]
fluent-bit-issue-reproduce-logger-1  | COUNT: 40000
fluent-bit-issue-reproduce-fluent-1  | [2022/03/10 06:02:27] [ info] [input:tail:tail.0] inode=3309184 handle rotation(): /var/log/sample.log => /var/log/sample.log.0
fluent-bit-issue-reproduce-fluent-1  | [2022/03/10 06:02:27] [ info] [input:tail:tail.0] inotify_fs_remove(): inode=3309184 watch_fd=7
fluent-bit-issue-reproduce-fluent-1  | [2022/03/10 06:02:27] [ info] [input:tail:tail.0] inotify_fs_add(): inode=3309184 watch_fd=8 name=/var/log/sample.log.0
fluent-bit-issue-reproduce-fluent-1  | [0] sample-tail-logs: [1646892143.336008800, {"LINE"=>36795, "TIMESTAMP"=>1646892143331}]

...

$ docker-compose down
```
