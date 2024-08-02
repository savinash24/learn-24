Subscriber (receiver)
1)connect
2)createChannel or createConfirmChannel
3)assertExchange(exchangeName, type(direct,topic,header,fannout), {durable : true/false} )
4)assertQueue(queueName or '',{exclusive: true}, callback)
5)bindQueue()
6)consume(queue, message)

Publisher (sender)
1)connect
2)createChannel or createConfirmChannel
3)assertExchange(exchangeName, type(direct,topic,header,fannout), {durable : true/false} )
4)publish()
