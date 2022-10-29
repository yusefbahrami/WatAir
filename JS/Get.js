const KEY = "7a87e42df4f1c82f6375b6df77b747ff";

export const getWeather = async (cityName) => {
  let result;
  try {
    result = await (
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${KEY}`
      )
    ).json();
  } catch (error) {}
  return result;
};
