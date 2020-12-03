<template>
  <div class="home-work">
    <h1 class="work-title">Mes projets.</h1>
    <div class="work-grid">
      <div class="work-col" v-for="project in projects" :key="project">
        <div class="img-hover-zoom">
          <a v-if="project.link" :href="project.link" target="_blank"
            ><img :src="project.image" alt="projet" class="project-image"
          /></a>
          <img v-else :src="project.image" alt="projet" class="project-image" />
        </div>
        <div class="project-header">
          <h4 class="project-title">
            {{ project.title }}
          </h4>
          <div class="project-techno">
            <img
              :src="project.techno[0]"
              alt="vuejs"
              style="
                width: 1.5rem;
                padding-bottom: 0.2rem;
                margin-right: 0.7rem;
              "
            />
            <img
              v-if="project.techno[1]"
              :src="project.techno[1]"
              alt="vuejs"
              style="width: 5rem; margin-right: 0.7rem"
            />
            <img
              v-if="project.techno[2]"
              :src="project.techno[2]"
              alt="vuejs"
              style="width: 5rem; padding-bottom: 0.2rem; margin-right: 0.7rem"
            />
            <img
              v-if="project.techno[3]"
              :src="project.techno[3]"
              alt="vuejs"
              style="width: 2.5rem; margin-right: 0.7rem"
            />
          </div>
        </div>
        <div
          class="button-more-info"
          v-if="!project.moreInfo"
          @click="project.moreInfo = !project.moreInfo"
        >
          <i class="fas fa-plus"></i>
        </div>
        <div
          class="button-more-info"
          v-else
          @click="project.moreInfo = !project.moreInfo"
        >
          <i class="fas fa-minus"></i>
        </div>
        <p class="project-text" v-if="project.moreInfo">
          {{ project.application }}<br /><br />

          {{ project.technique }}
        </p>
        <!-- <a
          href="https://github.com/Jaoued-mtd"
          v-if="project.button"
          class="btn-cta project-github"
          >GITHUB @Jaoued-mtd
        </a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          image: " https://i.ibb.co/KVZ4QCY/Sans-titre-4.png",
          title: "La Bredouille",
          application:
            "Site de petites annonces, l’utilisateur à la possibilité de poster une annonce, la modifier ou la supprimer. Il peut également rechercher et filtrer les annonces, contacter les vendeurs ou encore modifier ses informations via son profil.",
          technique:
            "Le stockage des données via MongoDB ainsi que cloudinary. Backend réalisé avec Strapi, Frontend réalisé avec VueJS et Bootstrap",
          link: "https://la-bredouille.netlify.app/",
          techno: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
            "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/logo-strapi-black-blue.png_71430fb155.png",
          ],
          moreInfo: false,
        },
        {
          image: "https://i.ibb.co/fDqM3Zp/Sans-titre-5.png",
          title: "My Coffee",
          application:
            "Eshop, l’utilisateur peut ajouter des articles dans son panier, commander indiquer ses informations de livraisons. Plusieurs mode de paiement disponibles PayPal, CB.. Suivi des commandes, notation des articles ou modification des informations via la page profil. L’administrateur peut gérer les commandes, les utilisateurs et les produits via son espace de gestion.",
          technique:
            "Le stockage des données via MongoDB. BackEnd API REST avec Express JS, FrontEnt réalisé avec ReactJS et Bootstrap.",

          link: "https://coffee-mern.herokuapp.com/",
          techno: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
            "https://upload.wikimedia.org/wikipedia/fr/thumb/4/45/MongoDB-Logo.svg/1280px-MongoDB-Logo.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
          ],
          moreInfo: false,
        },
        {
          image: "https://i.ibb.co/7kGVYNt/Sans-titre-6.png",
          title: "Blog",
          application:
            "Blog, l’utilisateur peut lire commenter des posts  modifier ses informations via son profil. L’administrateur peut gérer les posts, les utilisateurs et les produits via son espace de gestion.",
          technique:
            "Le stockage des données via MongoDB. BackEnd API REST avec Express JS, FrontEnt réalisé avec ReactJS et Bootstrap.",

          link: "https://jaoued-blog.herokuapp.com/",
          techno: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
            "https://upload.wikimedia.org/wikipedia/fr/thumb/4/45/MongoDB-Logo.svg/1280px-MongoDB-Logo.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
          ],
          moreInfo: false,
        },
        {
          image: "https://i.ibb.co/0Jj7J7F/projet-immo.png",
          title: "Real Estate",
          application:
            "Site pour agent immobilier, celui ci à la possibilité de poster ses annonces, de les gérer grace à un panel d’administration. Les visiteurs peuvent afficher les annonces, les triers et contacter l’agent immobilier.",
          technique:
            "Le stockage des données via MongoDB. Backend API REST avec Express JS, Frontend réalisé avec VueJS et Bootstrap.",
          link: "https://realimmov1.netlify.app/",
          techno: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
            "https://upload.wikimedia.org/wikipedia/fr/thumb/4/45/MongoDB-Logo.svg/1280px-MongoDB-Logo.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
          ],
          moreInfo: false,
        },

        // {
        //   image: "https://i.ibb.co/KNFzbX0/projet-shorten.png",
        //   title: "Shortly",
        //   description:
        //     " Challenge Frontend Mentor : Reducteur d'url en utilisant l'api ShortenURL ",
        //   link: "https://shorten-your-url.netlify.app/",
        //   techno: [
        //     "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
        //   ],
        // },

        {
          image: "https://i.ibb.co/MBppbCx/Sans-titre-3.png",
          title: "Easyimo",
          application:
            "Dashboard qui permet à un agent immobilier de gérer ses clients vendeurs et acheteurs mais aussi d'enregistrer une liste de tâches. Il peut retrouver ses clients sur une carte interactive, mais aussi suivre ses statistiques de ventes,contacts,chiffre d'affaires grâce à des graphiques.",
          technique:
            "Le stockage des données via une base de donnée mysql. Backend en Php  avec Laravel, Frontend réalisé avec VueJS et Bootstrap.",
          link: false,
          techno: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
            "https://www.id-meneo.com/corporate/wp-content/uploads/2017/03/Laravel_logo_wordmark_logotype.png",
          ],
          moreInfo: false,
        },
        {
          image: "https://i.ibb.co/F4w2qVZ/Sans-titre-1.png",
          title: "Jeux Partage",
          application:
            "Site de partage de jeux de société avec la possibilité pour l'utilisateur de rechercher les jeux disponibles autour de sa localisation en utilisant l'API. Une fois un jeu sélectionné l'utilisateur peut verifier la disponibilité grâce à un calendrier puis effectuer une réservation. L’administrateur peut gérer les jeux, les utilisateurs et les reservations via son espace de gestion.",
          technique:
            "Le stockage des données via MongoDB. Backend API REST avec Express JS, Frontend réalisé avec VueJS et Tailwind CSS.",
          link: "https://gameproj.netlify.app/",
          techno: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
            "https://upload.wikimedia.org/wikipedia/fr/thumb/4/45/MongoDB-Logo.svg/1280px-MongoDB-Logo.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
          ],
          button: true,
          moreInfo: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.home-work {
  width: 80%;
  margin: 8rem auto;
  overflow: hidden;
}

.work-title {
  font-size: 3rem;
  margin-bottom: 4rem;
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
}

.project-image {
  width: 100%;
  transition: transform 1s ease;
  border-radius: 0.5rem;
}

.img-hover-zoom {
  overflow: hidden;
}

.project-image:hover {
  transform: scale(1.1);
}

.project-title {
  font-size: 1.4rem;
  font-weight: 500;
}

.project-text {
  font-size: 1rem;
  padding: 0 1rem;
  margin-bottom: 4rem;
}

.project-techno {
  font-size: 0.7rem;
  margin-top: 2rem;
}

.project-header {
  justify-content: space-between;
  padding: 0 1rem;
}

.project-github {
  text-decoration: none;
}

.button-more-info {
  cursor: pointer;
  text-align: center;
  width: 20%;

  margin: 2rem auto;
  padding: 0.5rem 1rem;
}

.button-more-info:hover {
  font-weight: bold;
  background: black;
  color: white;
}

@media screen and (max-width: 910px) {
  .project-text {
    margin-bottom: 8rem;
  }

  .project-github {
    display: none;
  }
  .home-work {
    margin: 1rem auto;
  }
}

@media screen and (max-width: 1250px) {
  .work-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 750px) {
  .work-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (max-width: 400px) {
  .work-title {
    font-size: 2rem;
  }

  .project-text {
    margin-top: 2rem;
  }

  .home-work {
    width: 90%;
    text-align: center;
  }
}
</style>