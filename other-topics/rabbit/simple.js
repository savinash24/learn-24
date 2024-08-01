const amqplib = require('amqplib');
const { uri } = require('./env');
console.log(uri);
(async () => {
  const queue = 'helloQueue';
  const conn = await amqplib.connect(uri);

  const ch1 = await conn.createChannel();
  await ch1.assertQueue(queue);
  const ch2 = await conn.createConfirmChannel();
  // Sender
  for (let i = 0; i < 5; i++) {
    ch2.sendToQueue(queue, Buffer.from(`something to do ${i + 1}`));
    console.log(i + 1, 'done');
  }
  // setInterval(() => {
  // }, 1000);

  // Listener
  const prefetchCount = 2; // Limit to 1 message at a time
  ch1.prefetch(prefetchCount);
  ch1.consume(
    queue,
    (msg) => {
      if (msg !== null) {
        const content = msg.content.toString();
        console.log('Received:', content);
        // ch1.ack(msg);
        // console.log('DONE');
        let secToWait = content.split(' ')[3];
        setTimeout(function () {
          console.log(' [x] Done', secToWait);
        }, secToWait * 1000);
      } else {
        console.log('Consumer cancelled by server');
      }
    },
    { noAck: true }, //  -- true = auto ack/ false = we need to ack (by default false)
  );
})();
