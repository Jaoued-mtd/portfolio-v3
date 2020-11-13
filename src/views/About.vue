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
          Bonjour, je m'appelle <span class="bold">Jaoued MOUETAMID</span>,
          developpeur spécialisé en <span class="bold">Javascript</span> en Ile
          de France. ✌️<br /><br />
          Ma spécialité est de construire des
          <span class="bold">projets web de A à Z</span>, en commençant par la
          définition du produit pour répondre au mieux aux besoins, en passant
          par la conception de l'outil, l'intégration des pages et le
          développement des différentes fonctionnalités.<br /><br />
          Issue d'une formation en Ecole de Commerce spécialisé en
          <span class="bold">Marketing Digital à l'ESCE Paris</span> j'ai suivi
          une formation accéléré en developpement informatique au sein de
          l'ecole <span class="bold">EPITECH Paris</span>. <br /><br />Ce
          portfolio a pour but de présenter les différents projets sur lesquels
          j'ai travaillé ces dernières mois.
        </p>

        <ContactForm class="form" />
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from "../components/ContactForm";
export default {
  components: {
    ContactForm,
  },
};
</script>


<style scoped>
.bg-about {
  background: url("./../assets/images/right-bg.svg") no-repeat top right;
}

.bg-about-left {
  background: url("./../assets/images/left-bg.svg") no-repeat top left;
}

.image {
  width: 12rem;
}
.about {
  width: 80%;
  margin: auto;
  text-align: center;
}
.form {
  width: 100%;
  margin: 5rem auto;
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
  background-color: #F4FCFD;
  border-radius: 50%;
  text-align: center;
  margin: 2rem auto;
}
</style>
