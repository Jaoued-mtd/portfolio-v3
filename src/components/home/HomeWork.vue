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
        <p class="project-text">
          {{ project.description }}
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
          description:
            "Projet réalisé sur VUEJS afin d'améliorer mes connaissances du Vuex-store, Vue-Router et découvrir les nouveautés de la version 3. Les données sont stockées sur MongoDB ATLAS ainsi que Cloudinary, l'API est deployé en utilisant Heroku et Netlify pour VUEJS. Front réalisé en Bootstrap entièrement responsive.",
          link: "https://la-bredouille.netlify.app/",
          techno: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
            "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/logo-strapi-black-blue.png_71430fb155.png",
          ],
        },
        {
          image: "https://i.ibb.co/fDqM3Zp/Sans-titre-5.png",
          title: "My Coffee",
          description:
            "Projet MERN découverte de Redux, des reacts hooks. Eshop avec gestion des commandes pour l'administrateur son espace CRUD. Possibilité pour l'utilisateur de commander,payer par PayPal ou carte de crédit, review un produit..",
          link: "https://coffee-mern.herokuapp.com/",
          techno: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
            "https://upload.wikimedia.org/wikipedia/fr/thumb/4/45/MongoDB-Logo.svg/1280px-MongoDB-Logo.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
          ],
        },
        {
          image: "https://i.ibb.co/7kGVYNt/Sans-titre-6.png",
          title: "Blog",
          description:
            "Projet Stack MERN blog avec espace d'Administration, CRUD utilisateurs, posts, commentaires.. ",
          link: "https://jaoued-blog.herokuapp.com/",
          techno: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
            "https://upload.wikimedia.org/wikipedia/fr/thumb/4/45/MongoDB-Logo.svg/1280px-MongoDB-Logo.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
          ],
        },
        {
          image: "https://i.ibb.co/0Jj7J7F/projet-immo.png",
          title: "Real Estate",
          description:
            "Projet réalisé pour parfaire mon apprentissage du développement Back End avec ExpressJS. Mise en place d'une API, d'un cluster MongoDB.",
          link: "https://realimmov1.netlify.app/",
          techno: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
            "https://upload.wikimedia.org/wikipedia/fr/thumb/4/45/MongoDB-Logo.svg/1280px-MongoDB-Logo.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
          ],
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
          description:
            "Dashboard réalisé en projet de fin d'étude, il permet à un agent immobilier de gérer ses clients vendeurs et acheteurs mais aussi d'enregistrer une liste de tâches. Il peut retrouver ses clients sur une carte interactive, mais aussi suivre ses statistiques de ventes,contacts,chiffre d'affaires grâce à des graphiques ChartJS.   ",
          link: false,
          techno: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
            "https://www.id-meneo.com/corporate/wp-content/uploads/2017/03/Laravel_logo_wordmark_logotype.png",
          ],
        },
        {
          image: "https://i.ibb.co/F4w2qVZ/Sans-titre-1.png",
          title: "Jeux Partage",
          description:
            "Site de partage de jeux de société réalisé comme projet de fin d'étude. Avec la possibilité pour l'utilisateur de rechercher les jeux disponibles autour de sa position en utilisant l'API google map. Une fois un jeu selectionné l'utilisateur peut verifier la disponibilité grâce à un calendrier puis éffectuer une réservation. Création de l'API avec expressJS, l'application a été realisée en TAILWIND CSS.",
          link: "https://gameproj.netlify.app/",
          techno: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
            "https://upload.wikimedia.org/wikipedia/fr/thumb/4/45/MongoDB-Logo.svg/1280px-MongoDB-Logo.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
          ],
          button: true,
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
  font-size: 1.1rem;
  padding: 0 1rem;
  margin-bottom: 4rem;
}

.project-techno {
  font-size: 0.7rem;
  margin-top: 2rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
}

.project-github {
  text-decoration: none;
}

@media screen and (max-width: 910px) {
  .work-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

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

@media screen and (max-width: 400px) {
  .work-title {
    font-size: 2rem;
  }
  .project-header {
    display: flex;
    flex-direction: column;
    align-items: center;
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