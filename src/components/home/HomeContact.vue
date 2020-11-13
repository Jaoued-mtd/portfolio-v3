<template>
  <div class="bg-contact">
    <div class="blue-circle-svg">
      <div class="home-contact">
        <h1 class="contact-title">Contact</h1>
        <div class="contact-grid">
          <div class="blue-circle">
            <div class="contact-col contact-left">
              <img class="contact-image" src="../../assets/images/face-2.png" />
              <h1 class="contact-subTitle">
                Un Projet ?<br />
                Contactez moi !
              </h1>
            </div>
          </div>
          <div class="contact-col contact-right">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from "../ContactForm";
export default {
  components: {
    ContactForm,
  },
};
</script>

<style scoped>
.bg-contact {
  background: url("../../assets/images/right-bg.svg") no-repeat right;
}
.blue-circle-svg {
  background: url("../../assets/images/blue-circle.svg") no-repeat left;
}
.home-contact {
  width: 80%;
  margin: auto;
  text-align: center;
}

.contact-title {
  margin-bottom: 5rem;
}

.blue-circle {
  height: 600px;
  width: 600px;
  background-color: #F4FCFD;
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
  padding: 8rem;
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
</style>