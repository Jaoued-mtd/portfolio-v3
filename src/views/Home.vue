<template>
  <div class="home">
    <HomeMain />
    <HomeWork />
    <HomeTechno />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTechno from "../components/home/HomeTechno.vue";
import HomeMain from "../components/home/HomeMain.vue";
import HomeWork from "../components/home/HomeWork.vue";
export default {
  name: "Home",
  components: {
    HomeWork,
    HomeMain,
    HomeTechno,
  },
};
</script>
