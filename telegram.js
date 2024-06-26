const consulting = require("./consulting");
const dotenv = require("dotenv").config();
const botToken = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;

async () => {
  const query = await consulting.loop(); // Call the loop function to get data
  console.log(query.ip); // Log the IP address fetched
};
const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

const text = "Esta é uma mensagem de teste enviada usando fetch.";

const data = {
  chat_id: chatId,
  text,
};

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
};

fetch(url, options)
  .then((response) => response.json())
  .then((responseData) => {
    console.log("Success:", responseData);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
