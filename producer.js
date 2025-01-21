const { Queue } = require("bullmq");
const notificationQueue = new Queue("Order-Updates", {
  connection: {
    host: "127.0.0.1",
    port: "6379", // default port for redis server
  },
});

async function pushToQueue() {
  const result = await notificationQueue.add("new-order", {
    itemid: "1212",
    itemName: "Printer",
    qty: 1,
    price: 222.0,
    customerId: "6234234636487",
  });

  console.log("New Order has been added to Queue with following ID", result.id);
}

pushToQueue();
