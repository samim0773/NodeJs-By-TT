Hi

Streams: Streams are objects that let you read data from a source or write data to a destination in continous
fashion. In node.js are fourt types of streams 

Streaming means listening to music or watching video in 'real time', instead of downloading a file to
your computer and watching it later

Readable - Stream which is used for read operation.
Writable - Stream which is used for write iperation.
Duplex - Stream which can be used for both read and write operation.
Transform - A type of duplex stream where the output is computed based on input.

Each type of stream is an EventEmitter instance and throuws several events at 
different instance of times. For example, some of the commonly used events are --

data - This event is fired when there is data is available to read.
end - this event is fired when there is no more data to read.
error - This event is fired when there is any error receiving or writing data.
finish - This event is fired when all the data has been flushed underlying system.