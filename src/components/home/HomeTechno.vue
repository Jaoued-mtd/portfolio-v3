<template>
  <div class="techno">
    <h1 class="techno-title">Compétences</h1>
    <div class="techno-grid">
      <div class="techno-col">
        <img
          class="image-html"
          src="https://www.pinclipart.com/picdir/big/113-1133296_vector-javascript-html5-css3-html-css-javascript-bootstrap.png"
        />
      </div>
      <div class="techno-col">
        <img
          class="image-mevn"
          src="https://www.arkasoftwares.com/blog/wp-content/uploads/2020/08/stack-6-removebg-preview.png"
        />
      </div>

      <div class="techno-col">
        <img
          class="image-git"
          src="https://lucasvidelaine.files.wordpress.com/2018/01/git1.png"
        />
      </div>

      <div class="techno-col">
        <img
          class="image-docker"
          src="https://blog.engineering.publicissapient.fr/wp-content/uploads/2016/04/docker.png"
        />
      </div>
      <div class="techno-col">
        <img
          class="image-mern"
          src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png"
        />
      </div>
      <div class="techno-col">
        <img
          class="image-laravel"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
        />
      </div>
    </div>
  </div>
</template>


<style scoped>
.bg-contact {
  background: url("../../assets/images/right-bg.svg") no-repeat right;
}
.techno {
  width: 80%;
  margin: 10rem auto 10rem;
  text-align: center;
  overflow: hidden;
}

.techno-title {
  margin-bottom: 5rem;
}

.techno-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}

.image-html {
  width: 8rem;
}
.image-laravel {
  width: 8rem;
}
.image-git {
  width: 13rem;
}
.image-mern {
  width: 12rem;
  padding: 1.5rem;
}
.image-mevn {
  width: 13rem;
}
.image-docker {
  width: 8rem;
}

img {
  opacity: 0.4;
}

img:hover {
  opacity: 1;
}

@media screen and (max-width: 1350px) {
  .techno-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .techno {
    width: 100%;
    margin-top: 2rem;
  }
}

@media screen and (max-width: 700px) {
  .techno-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 500px) {
  .techno-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>