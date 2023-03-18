const items = {
  1: "Beans",
  2: "Bread",
};

const httpChat = (req, res) => {
  let message = req.body.message.toLowerCase().trim();
  let reply;
  let orderHistory = req.session.orderHistory || [];
  let currentOrder = req.session.currentOrder || [];

  switch (message) {
    case "1":
      reply =
        "Our menu items are: Beans, Bread, and Rice. What would you like to order? To order just enter order with item name E.g 'order beans'";
      break;
    case "order beans":
      currentOrder.push("Beans");
      req.session.currentOrder = currentOrder;
      reply =
        "Great choice! Your beans will be ready in 10 minutes. Anything else?";
      break;
    case "order bread":
      currentOrder.push("Bread");
      req.session.currentOrder = currentOrder;
      reply =
        "Great choice! Your bread will be ready in 5 minutes. Anything else?";
      break;
    case "order rice":
      currentOrder.push("Rice");
      req.session.currentOrder = currentOrder;
      reply =
        "Great choice! Your rice will be ready in 10 minutes. Anything else?";
      break;
    case "97":
      if (currentOrder.length === 0) {
        reply = "Your current order is empty.";
      } else {
        reply = `Your current order is: ${currentOrder.join(", ")}.`;
      }
      break;
    case "98":
      if (currentOrder.length === 0) {
        reply = "Your current order is empty.";
      } else {
        reply = `Your current order is: ${currentOrder.join(", ")}.`;
      }
      break;
    case "99":
      if (currentOrder.length === 0) {
        reply = "Your current order is empty.";
      } else {
        let total = currentOrder.length * 10; // assuming all items are priced at $10
        req.session.currentOrder = [];
        orderHistory.push(
          `Items: ${currentOrder.join(", ")}, Total: $${total}`
        );
        req.session.orderHistory = orderHistory;
        reply = `Your order has been placed. Total amount due is $${total}. Thank you for dining with us!`;
      }
      break;
    case "0":
      if (currentOrder.length === 0) {
        reply = "Your current order is already empty.";
      } else {
        let cancelledItems = currentOrder.splice(0, currentOrder.length);
        req.session.currentOrder = currentOrder;
        orderHistory.push(`Cancelled items: ${cancelledItems.join(", ")}`);
        req.session.orderHistory = orderHistory;
        reply = "Your current order has been cancelled.";
      }
      break;
    default:
      reply = "Sorry, I didn't understand that. Please try again.";
      break;
  }

  res.status(200).json({ data: reply });
};

const httpGet = (req, res) => {
  res.send({ data: "good" });
};

module.exports = { httpChat, httpGet };
