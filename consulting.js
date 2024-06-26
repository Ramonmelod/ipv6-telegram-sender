const loop = setInterval(async () => {
  try {
    const response = await fetch("https://api64.ipify.org?format=json");
    if (!response.ok) {
      throw new Error("internet response is not ok");
    }
    const data = await response.json();
    console.log(data.ip);
  } catch (error) {
    console.error("there was a problem in the fetch operation", error);
  }
}, 3000);
module.exports = { loop };
