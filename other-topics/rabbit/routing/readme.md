cmd1  - to collect only errors
node receive.js error > logs_from_rabbit.log
cmd2 - to collect info warning and error
node receive.js info warning error

cmd3 - change to warning or info or error
node send.js error "Run. Run. Or it will explode."