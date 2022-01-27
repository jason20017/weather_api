let inputValue = document.querySelector("#city");
let CityName = document.querySelector("#city_name");
let CountryName = document.querySelector("#country_name");
let Temp = document.querySelector("#temp");
let Des = document.querySelector("#des");
let Icon = document.querySelector("#icon");

let TZ_DAY = document.querySelector(".tz_day");
let TZ_MONTH = document.querySelector(".tz_month");
let TZ_DAYNUM = document.querySelector(".tz_daynum");
let TZ_YEAR = document.querySelector(".tz_year");
let TZ_HOUR = document.querySelector(".tz_hour");
let TZ_MINUTES = document.querySelector(".tz_minutes");
let TZ_SECOND = document.querySelector(".tz_second");
let TZ_PERIOD = document.querySelector(".tz_period");

const myKey = "f82e70a50cf9db14865d57a0d9497c9b";

inputValue.addEventListener("change", () => {
  let City = inputValue.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${myKey}`;

  console.log(City);
  switch (City) {
    case "":
      alert("please select city");
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let nameValue = data["name"];
      let countryValue = data["sys"]["country"];
      let temp = data["main"]["temp"];
      let des = data["weather"][0]["description"];
      let icon =
        "http://openweathermap.org/img/wn/" +
        data["weather"][0]["icon"] +
        "@2x.png";

      CityName.innerHTML = nameValue;
      CountryName.innerHTML = countryValue;
      Temp.innerHTML = (temp - 273.15).toFixed(1) + " °C";
      Des.innerHTML = des;
      Icon.setAttribute("src", icon);

      let time = data["dt"]; //因為api中抓出的時區時間是unix time 的形式，所以要使用day.js套件來轉換
      const day = dayjs.unix(time).format("dddd"); //*使用day.js 套件轉換unix time
      const month = dayjs.unix(time).format("MMM");
      const daynum = dayjs.unix(time).format("D");
      const year = dayjs.unix(time).format("YYYY");
      const hour = dayjs.unix(time).format("h");
      const minutes = dayjs.unix(time).format("m");
      const period = dayjs.unix(time).format("A");

      TZ_DAY.innerHTML = day;
      TZ_MONTH.innerHTML = month;
      TZ_DAYNUM.innerHTML = daynum;
      TZ_YEAR.innerHTML = year;
      TZ_HOUR.innerHTML = hour;
      TZ_MINUTES.innerHTML = minutes;
      TZ_PERIOD.innerHTML = period;
    });

  // .catch(err => alert('wrong city name')) 錯誤時使用
});
