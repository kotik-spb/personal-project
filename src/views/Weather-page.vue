<template>
  <div>
    <h1>Погодная карточка</h1>
    <hr class="devider" />
    <div class="weather-container">
      <div class="input-box">
        <input @keypress.enter="checkWeather" type="text" v-model="city" />
        <span class="input-label" :class="{ 'active-label': city }"
          >Название города</span
        >
      </div>
      <button class="btn" @click="checkWeather">
        <span>
          Узнать погоду!
        </span>
      </button>
      <div class="weather-card" v-if="weatherData.iconcode">
        <h2>{{ weatherData.name }} | {{ weatherData.countryCode }}</h2>
        <div class="weather-box__type">
          <img
            id="wicon"
            :src="iconUrl"
            alt="Weather
          icon"
          />
          <span>{{ weatherData.weatherType }}</span>
        </div>

        <hr class="devider" />

        <div class="weather-box__temp">
          <p>Текущая температура: {{ weatherData.temp.current }} &#8451;</p>
          <p>Минимальная температура: {{ weatherData.temp.min }} &#8451;</p>
          <p>Максимальная температура: {{ weatherData.temp.max }} &#8451;</p>
        </div>

        <hr class="devider" />

        <div class="weather-box__sun">
          <p>Рассвет в {{ weatherData.sunrise }}</p>
          <p>Закат в {{ weatherData.sunset }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      city: "",
      weatherData: {
        iconcode: null,
        temp: {
          current: null,
          min: null,
          max: null
        },
        weatherType: null,
        name: null,
        countryCode: null,
        sunrise: null,
        sunset: null,
        windSpeed: null
      }
    };
  },
  methods: {
    checkWeather() {
      if (!this.city) {
        return alert("Введите название города!");
      }
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&lang=ru&appid=${this.$store.state.apiKey}`
        )
        .then(({ data }) => {
          return this.dataFill(data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    unixConverter(time) {
      let date = new Date(time * 1000);
      let h = date.getHours();
      let m = date.getMinutes();
      let s = date.getSeconds();
      return h + ":" + m + ":" + s;
    },
    dataFill(data) {
      this.weatherData.iconcode = data.weather[0].icon;
      this.weatherData.temp.current = data.main.temp;
      this.weatherData.temp.min = data.main.temp_min;
      this.weatherData.temp.max = data.main.temp_max;
      this.weatherData.weatherType = data.weather[0].description;
      this.weatherData.name = data.name;
      this.weatherData.countryCode = data.sys.country;
      this.weatherData.sunrise = this.unixConverter(data.sys.sunrise);
      this.weatherData.sunset = this.unixConverter(data.sys.sunset);
      this.weatherData.windSpeed = data.wind.speed;
    }
  },
  computed: {
    iconUrl() {
      return (
        "http://openweathermap.org/img/w/" + this.weatherData.iconcode + ".png"
      );
    }
  }
};
</script>

<style scoped>
.weather-container {
  width: 100%;
  margin: 20px 0;
}

.weather-card {
  padding: 25px;
  height: auto;
  margin: auto;
  width: 500px;
  border: none;
  background-color: #fff;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
  transition: all 250ms ease;
}

.weather-box__sun,
.weather-box__temp {
  margin: 10px;
  text-align: left;
}

.weather-box__type {
  text-align: left;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

input {
  font-size: 18px;
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  padding: 3px 5px;
  transition: all 250ms ease;
}

input:hover,
.filled-input {
  background-color: rgba(231, 231, 231, 0.5);
}

input:focus {
  outline: none;
  border-bottom-color: #00a86b;
}

.input-label {
  position: absolute;
  top: 3px;
  left: 5px;
  transition: all 250ms ease;
  font-size: 18px;
  color: rgb(163, 163, 163);
  z-index: -1;
}

input:focus + .input-label,
.active-label {
  font-size: 14px;
  top: -20px;
  left: 0;
  opacity: 1;
  color: #00a86b;
}
</style>
