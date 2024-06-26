const consulting = require("./consulting");
const dotenv = require("dotenv").config();

const botToken = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;

const search = async () => {
  try {
    const query = await consulting.loop(); // Call the loop function to get data
    const ip = query.ip;
    console.log("IP:", ip); // Log the IP address fetched
    return ip; // Return the IP address from the search function
  } catch (error) {
    console.error("Error fetching IP:", error);
    throw error; // Throw any errors encountered during the search
  }
};

const telegramSender = async () => {
  try {
    // Call search function to get the IP
    const ip = await search();
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const text = `IPV6: ${ip}`; // Include the IP in the message text
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

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Failed to send message to Telegram");
    }

    const responseData = await response.json();
    console.log("Message sent successfully:", responseData);
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
  }
};

// Call telegramSender function to send the message
telegramSender();
