<template>
  <div class="home-main">
    <img class="image" src="../../assets/images/face-white.jpg" alt="memoji" />
    <h5 class="home-title">Hello, C'est Jaoued 👋</h5>
    <h1 class="home-text">
      Creation digital,<br />
      site web et application mobile.
    </h1>
    <p class="home-paragraph">
      Je suis <span class="home-span">Developpeur Front-End</span><br />basé en
      Ile de France, spécialisé en <span class="home-span"> Javascript</span>.
    </p>
    <button class="btn-cta">Contactez moi</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home-main {
  text-align: center;
  width: 60%;
  margin: auto;
}

.home-title {
  font-size: 2rem;
  color: #333;
  margin: 0;
}

.home-text {
  margin: 1rem;
  font-weight: 500;
  font-size: 5.4rem;
}

.image {
  width: 12rem;
}

.home-paragraph {
  font-size: 1.5rem;
}

.home-span {
  font-weight: bold;
}
</style>