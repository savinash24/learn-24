syslog unix tool example
"<facility>.<severity>".
facility (auth/cron/kern...) severity (info/warn/crit...)

cmd1 all
node receive.js "#"
cmd2 critical
node receive.js "*.critical"
cmd3 changes values in kern and critical from options available above
node send.js "kern.critical" "A critical kernel error"


Examples
To receive all the logs:
node receive.js "#"

To receive all logs from the facility "kern":
node receive.js "kern.*"

Or if you want to hear only about "critical" logs:
node receive.js "*.critical"

You can create multiple bindings:
node receive.js "kern.*" "*.critical"

And to emit a log with a routing key "kern.critical" type:
node receive.js "kern.critical" "A critical kernel error"