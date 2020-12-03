<template>
  <div class="bg-contact">
    <div class="blue-circle-svg">
      <div class="home-contact">
        <h1 class="contact-title">Contact</h1>
        <div class="contact-grid">
          <div class="blue-circle">
            <div class="contact-col contact-left">
              <img class="contact-image" src="../../assets/images/face-2.png" />
              <h1 class="contact-subTitle">Un Projet ?<br /></h1>
            </div>
          </div>
          <div class="contact-col contact-right">
            <button class="btn-cta button">
              <a href="mailto:contact@jaouedcode.com">Contactez moi</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.blue-circle-svg {
  background: url("../../assets/images/blue-circle.svg") no-repeat left;
  overflow: hidden;
}

.home-contact {
  width: 80%;
  margin: auto;
  text-align: center;
}

.contact-title {
  margin-bottom: 5rem;
}
.button {
  padding: 2rem 4rem;
}

.blue-circle {
  height: 600px;
  width: 600px;
  background-color: #f4fcfd;
  border-radius: 50%;
  display: inline-block;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5rem;
}
.contact-subTitle {
  margin: 0;
  padding: 0;
  font-size: 2.5rem;
}
.contact-left {
  padding: 0 8rem;
}
.contact-right {
  align-self: center;
  text-align: center;
}

.contact-image {
  padding: 2rem;
  margin-top: 2.5rem;
  min-width: 15rem;
  max-height: 30vh;
  overflow: hidden;
  object-fit: cover;
}

@media screen and (max-width: 1150px) {
  .contact-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .blue-circle-svg {
    background: url("../../assets/images/blue-circle.svg") no-repeat left 8rem
      top 7rem;
  }
  .bg-contact {
    background: transparent;
  }
}

@media screen and (max-width: 400px) {
  .contact-col {
    padding: 0;
  }
  .home-contact {
    overflow: hidden;
    width: 100%;
  }
}
</style>