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

      <div class="preloader-box" v-if="loader">
        <div class="lds-hourglass"></div>
      </div>

      <div class="weather-card" v-if="weatherData">
        <div>
          <h2>{{ weatherData.name }} | {{ weatherData.countryCode }}</h2>
          <div class="weather-box__type">
            <img
              id="wicon"
              :src="weatherData.iconcode"
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
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      city: ""
    };
  },
  methods: {
    clearPage() {
      this.weatherData = null;
      this.$forceUpdate();
    },
    checkWeather() {
      this.clearPage();
      if (!this.city) {
        return alert("Введите название города!");
      }
      this.$store.dispatch("weather/getWeather", this.city);
      this.city = "";
    }
  },
  computed: {
    weatherData: {
      get() {
        return this.$store.state.weather.weatherData;
      },
      set(value) {
        return this.$store.commit("weather/SET_WEATHER", null);
      }
    },
    loader() {
      return this.$store.getters.loader;
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
