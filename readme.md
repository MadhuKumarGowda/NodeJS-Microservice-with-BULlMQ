// Steps to run bullmq application

1. Docker install
2. Run Redis in docker with default port 6379
3. Install BULLMQ [ npm i bullmq]
4. Create Producer.js to produce the message
   Create queue with name and connection details
   then push the message to queue // Here i hard coded, you can map the data which are received from request
5. Create Worker.js [ Who is process the queue data and send the respective microservice to perform the further action like send data to database, update the cart... send and email]
6. Run both Producer.js and Worker.js
