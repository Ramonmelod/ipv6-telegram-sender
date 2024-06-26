const loop = async () => {
  try {
    const response = await fetch("https://api64.ipify.org?format=json");
    if (!response.ok) {
      throw new Error("internet response is not ok");
    }
    const data = await response.json();
    const ip = data.ip;
    console.log(ip);
    return { ip };
  } catch (error) {
    console.error("there was a problem in the fetch operation", error);
  }
};
module.exports = { loop };
