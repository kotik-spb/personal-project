<template>
  <div>
    <h1>Главная</h1>
    <hr class="devider" />

    <div class="home-container">
      <div class="home-box">
        <h2 class="home-box__header">Страница: Погода</h2>
        <ul class="home-box__description">
          <li>Показывает погоду для введенного в input поля.</li>
          <li>Искать можно на как на английском, так и на русском языках.</li>
          <li>
            Для поиска погоды используется публичный апи
            https://openweathermap.org/
          </li>
        </ul>
      </div>

      <div class="home-box">
        <h2 class="home-box__header">Страница: Бюджет</h2>
        <ul class="home-box__description">
          <li>Показывает погоду для введенного в input поля.</li>
          <li>Искать можно на как на английском, так и на русском языках.</li>
          <li>
            Для поиска погоды используется публичный апи
            https://openweathermap.org/
          </li>
        </ul>
      </div>

      <div class="home-box">
        <h2 class="home-box__header">Страница: Новости</h2>
        <ul class="home-box__description">
          <li>Показывает новости для выбранной секции.</li>
          <li>
            Для поиска статей используется публичный апи TheNewYorkTimes (The
            NYT) - https://developer.nytimes.com/ https://openweathermap.org/
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style>
.home-container {
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.home-box {
  position: relative;
  background-color: rgba(233, 233, 233, 0.726);
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 2px solid #00a86b;
  margin: 15px;
  max-width: 600px;
}

.home-box::after,
.home-box::before {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(50%);
  width: 500px;
  background-color: #00a86b;
  height: 2px;
}

.home-box::after {
  right: 100%;
}
.home-box::before {
  left: 100%;
}

.home-box__header {
  padding: 5px;
  width: 100%;
  background-color: #00a86b;
  letter-spacing: 2px;
  text-align-last: left;
  color: #fff;
  margin-bottom: 20px;
}

.home-box__description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: left;
  line-height: 1.1;
  margin-bottom: 15px;
}

.home-box__description li {
  color: #000;
  display: inline-block;
  text-align-last: left;
}

.home-box__description li:not(:last-child) {
  margin-bottom: 10px;
}

.preloader-box {
  margin: 15px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.preloader__circle {
  position: relative;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 1px solid #000;
  background-color: red;
  overflow: hidden;
  animation: 4s loaderPlus infinite;
}

.preloader__circle::before {
  content: "";
  position: absolute;
  top: 15px;
  left: 0;
  background-color: yellow;
  height: 15px;
  width: 30px;
  transform-origin: 50% 0;
  animation: 4s loader infinite;
}

@keyframes loaderPlus {
  0% {
    background-color: blue;
  }

  50% {
    background-color: green;
  }

  100% {
    background-color: blue;
  }
}

@keyframes loader {
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(180deg);
    background-color: red;
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
