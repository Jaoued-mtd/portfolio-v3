<template>
  <div class="home">
    <HomeMain />
    <HomeWork />
    <HomeTechno />
    <HomeContact id="contact" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTechno from "../components/home/HomeTechno.vue";
import HomeMain from "../components/home/HomeMain.vue";
import HomeWork from "../components/home/HomeWork.vue";
import HomeContact from "../components/home/HomeContact.vue";
export default {
  name: "Home",
  components: {
    HomeWork,
    HomeMain,
    HomeTechno,
    HomeContact,
  },
};
</script>
