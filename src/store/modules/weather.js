import axios from 'axios';

export const weather = {
  namespaced: true,
  state: {
    weatherData: null,
  },
  mutations: {
    SET_WEATHER(state, data) {
      state.weatherData = data;
    },
  },
  actions: {
    async getWeather({ commit, dispatch, rootState }, city) {
      let weather;
      dispatch('showLoader', true, { root: true });
      await axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${rootState.apiKey}`
        )
        .then(({ data }) => {
          weather = {
            iconcode: data.weather[0].icon,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: {
              current: data.main.temp,
              min: data.main.temp_min,
              max: data.main.temp_max,
            },
            weatherType: data.weather[0].description,
            name: data.name,
            countryCode: data.sys.country,
            windSpeed: data.wind.speed,
          };
          return weather;
        })
        .catch((err) => {
          console.log(err);
          alert('Попробуйте ввести город еще раз!');
          dispatch('showLoader', false, { root: true });
        });

      weather.iconcode = await dispatch('imgSrcConverter', weather.iconcode);
      weather.sunrise = await dispatch('unixConverter', weather.sunrise);
      weather.sunset = await dispatch('unixConverter', weather.sunset);
      await dispatch('showLoader', false, { root: true });
      await commit('SET_WEATHER', weather);
    },
    unixConverter(context, time) {
      let date = new Date(time * 1000);
      let h = date.getHours();
      let m = date.getMinutes();
      let s = date.getSeconds();
      return h + ':' + m + ':' + s;
    },
    imgSrcConverter(context, iconcode) {
      return 'http://openweathermap.org/img/w/' + iconcode + '.png';
    },
  },
  getters: {
    weatherData({ state }) {
      return state.weatherData;
    },
  },
};
