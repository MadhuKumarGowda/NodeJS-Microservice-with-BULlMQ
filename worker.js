const { Worker } = require("bullmq");

const orderPashtoDB = async () => {
  // logic to push the new order data to order database
};
const worker = new Worker("new-order", async (job) => {
  console.log(`Worker received a new order with id ${job.id}`);
  console.log("Processing new order");
  await orderPashtoDB();
  console.log("Order has been processed...");
});
