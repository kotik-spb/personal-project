<template>
  <div id="app">
    <app-header></app-header>
    <div class="container">
      <transition mode="out-in" name="slide">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "Header",
  components: {
    appHeader: Header
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap");

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  font-family: inherit;
}

html {
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;
  background-color: #fff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  letter-spacing: 1px;
  font-size: 36px;
  margin-bottom: 50px;
}

.container {
  max-width: 1170px;
  padding: 15px;
  margin: auto;
  background-color: #e2e2e2;
  min-height: 90vh;
  overflow: hidden;
}

.main-heading {
  font-size: 36px;
  letter-spacing: 2px;
  padding: 10px 0;
}

.devider {
  width: 100%;
  border: none;
  background-color: rgb(201, 201, 201);
  height: 1px;
}

.btn {
  position: relative;
  border: none;
  padding: 5px 10px;
  background-color: #00a86b;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  margin: 0 15px;
}

.btn span {
  z-index: 10;
  color: #fff;
  transition: all 0.2s ease;
}

.btn:hover {
  background-color: #fff;
}

.btn:hover span {
  color: #00a86b;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(1.05);
}

.input-box {
  position: relative;
  display: inline-block;
  margin: 20px 10px 30px;
  z-index: 0;
}

a {
  position: relative;
  transition: all 250ms ease-in-out;
  /* border-bottom: 1px solid transparent; */
}

a::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #fff;
  transition: all 250ms ease;
  width: 100%;
  transform: scaleX(0);
  transform-origin: left;
  height: 2px;
}

.slide-enter-active,
.slide-leave-active {
  transform: translateX(0);
  transition: all 0.5s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>
