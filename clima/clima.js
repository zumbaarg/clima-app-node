const axios = require("axios");

const getClima = async (lat, lng) => {
  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c9752c004217b9aa9f2d19cb71faa1a5&units=metric`
  );

  return resp.data.main.temp;
};

module.exports = {
  getClima
};
