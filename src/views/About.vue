<template>
  <div class="bg-about">
    <div class="bg-about-left">
      <div class="about">
        <div class="bg-image">
          <img
            class="image"
            src="./../assets/images/face-white.png"
            alt="memoji"
          />
        </div>
        <h1 class="about-title">A propos</h1>

        <p class="about-text">
          Bonjour, je m'appelle <span class="bold">Jaoued MOUETAMID</span><br />
          developpeur spécialisé en <span class="bold">Javascript</span> en Ile
          de France. ✌️<br /><br />
          Ma spécialité est de construire des
          <span class="bold">projets web de A à Z</span>, en commençant par la
          définition du produit pour répondre au mieux aux besoins, en passant
          par la conception de l'outil, l'intégration des pages et le
          développement des différentes fonctionnalités.<br /><br />
          Issu d'une formation en Ecole de Commerce spécialisé en
          <span class="bold">Marketing Digital à l'ESCE Paris</span> j'ai suivi
          une formation accélérée en developpement informatique au sein de
          l'ecole <span class="bold">EPITECH Paris</span>. <br /><br />Ce
          <span class="bold">portfolio</span> a pour but de présenter les
          différents projets sur lesquels j'ai travaillé ces derniers mois.
        </p>
      </div>
    </div>
    <button class="btn-cta button">
      <a href="mailto:contact@jaouedcode.com">Contactez moi</a>
    </button>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.image {
  width: 12rem;
}
.about {
  width: 80%;
  margin: auto;
  text-align: center;
}
.bg-about {
  text-align: center;
}
.form {
  width: 80%;
  margin: 5rem auto;
  overflow: hidden;
}

.button {
  text-align: center;
  margin: auto;
}

.about-text {
  font-size: 2rem;
}
.about-title {
  margin: 2rem;
}
.bold {
  font-weight: 500;
}

.bg-image {
  height: 250px;
  width: 250px;
  background-color: #f4fcfd;
  border-radius: 50%;
  text-align: center;
  margin: 2rem auto;
}

@media screen and (max-width: 550px) {
  .about-text {
    font-size: 1.5rem;
  }
}
</style>
