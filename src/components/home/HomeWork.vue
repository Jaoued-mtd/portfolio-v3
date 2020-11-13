<template>
  <div class="home-work">
    <h1 class="work-title">Mes projets.</h1>
    <div class="work-grid">
      <div
        class="work-col"
        v-for="project in projects"
        :class="project.class"
        :key="project"
      >
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
        <a
          href="https://github.com/Jaoued-mtd"
          v-if="project.button"
          class="btn-cta project-github"
          >GITHUB @Jaoued-mtd
        </a>
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
          image: "https://i.ibb.co/0Jj7J7F/projet-immo.png",
          title: "Real Estate",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aperiam, odit aut atque provident velit!",
          link: "https://realimmov1.netlify.app/",
          techno: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
            "https://upload.wikimedia.org/wikipedia/fr/thumb/4/45/MongoDB-Logo.svg/1280px-MongoDB-Logo.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
          ],
          class: "shorten",
        },
        {
          image: "https://i.ibb.co/KNFzbX0/projet-shorten.png",
          title: "Shortly",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aperiam, odit aut atque provident velit!",
          link: "https://shorten-your-url.netlify.app/",
          techno: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
          ],
          class: "immo",
        },
        {
          image: "https://i.ibb.co/F4w2qVZ/Sans-titre-1.png",
          title: "Jeux Partage",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aperiam, odit aut atque provident velit!",
          link: false,
          techno: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
            "https://upload.wikimedia.org/wikipedia/fr/thumb/4/45/MongoDB-Logo.svg/1280px-MongoDB-Logo.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
          ],
          button: true,
          class: "jeux",
        },
        {
          image: "https://i.ibb.co/MBppbCx/Sans-titre-3.png",
          title: "Easyimo",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aperiam, odit aut atque provident velit!",
          link: false,
          techno: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
            "https://www.id-meneo.com/corporate/wp-content/uploads/2017/03/Laravel_logo_wordmark_logotype.png",
          ],

          class: "immo",
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
  grid-template-columns: repeat(2, 1fr);
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

.immo {
  padding-top: 10rem;
}

.work-col {
  max-height: 43vh;
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
  .work-col {
    max-height: 80%;
  }
  .immo {
    padding-top: 1rem;
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
  .work-col {
    max-height: 60vh;
  }
}
</style>