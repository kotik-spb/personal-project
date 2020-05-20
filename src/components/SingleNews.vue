<template>
  <transition name="fade">
    <div class="news-card">
      <h2 class="news-card__heading">{{ dataNews.title }}</h2>
      <small class="news-card__meta"
        ><a :href="dataNews.url">Источник</a> | Секция: {{ dataNews.section
        }}<br />
        Дата публикации: {{ creationTime }}
      </small>
      <hr style="margin :10px 0;" class="devider" />
      <p class="news-card__text">{{ dataNews.abstract }}</p>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["dataNews"],
  data() {
    return {};
  },
  computed: {
    creationTime() {
      let date = new Date(this.dataNews.created_date);
      let opt = { year: "numeric", day: "numeric", month: "long" };

      return new Intl.DateTimeFormat("en-EN", opt).format(date);
    }
  }
};
</script>

<style>
.news-card {
  width: 250px;
  background-color: #fff;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);
  padding: 15px;
  margin: 25px;
  display: inline-block;
  border-radius: 10px;
}

.news-card__heading {
  position: relative;
  background-color: #00a572;
  font-size: 20px;
  padding: 5px;
  left: -15px;
  top: -15px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: calc(100% + 30px);
  color: #fff;
}

.news-card__meta {
  font-size: 12px;
  color: rgb(109, 109, 109);
  text-align: left;
}

.news-card__text {
  text-align: justify;
  font-size: 14px;
}

.fade-enter-active {
  animation: bounce-in 0.5s;
}
.fade-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
