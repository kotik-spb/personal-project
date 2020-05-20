<template>
  <div>
    <h1 class="main-heading">Новостная лента</h1>
    <hr class="devider" />
    <div class="news-search">
      <div class="select-wrapper">
        <select v-model="newsSection" @change="vuexNewsSection">
          <option value="" disabled>Выберите категорию новостей</option>
          <option value="books">Книги</option>
          <option value="business">Бизнес</option>
          <option value="food">Еда</option>
          <option value="health">Здоровье</option>
          <option value="home">Дом</option>
          <option value="politics">Политика</option>
        </select>
      </div>
      <button class="btn btn-transparent" @click="showNews">
        <span>Искать!</span>
      </button>
    </div>
    <div class="preloader-box" v-if="loader">
      <div class="lds-hourglass"></div>
    </div>
    <!-- <div v-if="dataNews" class="news-container"> -->
    <transition-group
      name="fade"
      tag="div"
      class="news-container"
      v-if="dataNews"
      appear
    >
      <single-news
        v-for="(data, i) in dataNews"
        :key="i"
        :dataNews="data"
      ></single-news>
    </transition-group>
    <!-- </div> -->
  </div>
</template>

<script>
import SingleNews from "../components/SingleNews";

export default {
  name: "News",
  components: {
    SingleNews
  },
  beforeRouteLeave(to, from, next) {
    this.clearPage();
    next();
  },
  data() {
    return {
      newsSection: ""
    };
  },
  computed: {
    dataNews: {
      get() {
        return this.$store.getters.dataNews;
      },
      set(value) {
        this.$store.commit("SET_DATANEWS", value);
      }
    },
    loader() {
      return this.$store.getters.loader;
    }
  },
  methods: {
    clearPage() {
      console.log("cleared");
      this.dataNews = null;
      this.$forceUpdate();
    },
    showNews() {
      this.clearPage();
      if (!this.newsSection) {
        return alert("Выберите новостную секцию из списка!");
      }
      this.$store.dispatch("getNews");
    },
    vuexNewsSection() {
      this.$store.dispatch("changeNewsSection", this.newsSection);
    }
  }
};
</script>

<style>
.news-container {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-evenly;
  margin-top: 20px;
}

.news-search {
  margin: 20px;
}

.select-wrapper {
  position: relative;
  display: inline-block;
}

.select-wrapper::after {
  font-family: "Material Icons";
  content: "keyboard_arrow_down";
  top: 50%;
  right: 5px;
  font-size: 25px;
  color: #000;
  width: 25px;
  font-weight: bold;
  position: absolute;
  z-index: 100;
  transform: translateY(-50%) rotate(0);
  transition: transform 200ms ease;
}

select {
  padding: 10px 30px 10px 15px;
  font-size: 20px;
  border-radius: 5px;
  box-shadow: none;
  border: none;
  -webkit-appearance: none;
}

select:focus {
  outline: none;
}

.fade-enter-active {
  animation: fade-up 0.5s;
}
.fade-leave-active {
  animation: fade-up 0.5s reverse;
}

@keyframes fade-up {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.lds-hourglass {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 32px solid #29ab87;
  border-color: #29ab87 #50c878 #29ab87 #50c878;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}
</style>
