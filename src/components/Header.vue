<template>
  <header>
    <nav id="nav">
      <ul>
        <router-link style="background-color: #043927" tag="li" to="/" exact
          ><a class="link-item">Pers Proj</a></router-link
        >
        <router-link tag="li" to="/weather"
          ><a class="link-item">
            <span class="material-icons">
              wb_cloudy
            </span>
            Погода
          </a></router-link
        >
        <router-link tag="li" to="/budget"
          ><a class="link-item">
            <span class="material-icons">
              attach_money
            </span>
            Бюджет
          </a></router-link
        >
        <router-link tag="li" to="/news"
          ><a class="link-item">
            <span class="material-icons">
              local_post_office
            </span>
            Новости
          </a></router-link
        >
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  height: 50px;
  background-color: #2e8b57;
  display: flex;
  align-items: center;
}

#nav {
  max-width: 1170px;
  width: 100%;
  margin: auto;
  height: 100%;
}

.material-icons {
  transform: translateY(5px);
}

ul {
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
}

li {
  color: #fff;
  padding: 0 10px;
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms ease;
}

#nav li:not(:first-child) {
  border-right: 1px solid rgba(248, 248, 248, 0.644);
}

#nav li:last-child {
  border: none;
}

#nav li:hover {
  background-color: rgb(45, 105, 77);
}

.link-item:link,
.link-item:visited {
  color: #fffaf0;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
}

#nav .router--active a::before {
  transform: scaleX(1);
}
</style>
