<template>
  <div class="div">
    <TheHeader />
    <vue-page-transition>
      <router-view> </router-view>
    </vue-page-transition>
    <TheFooter />
  </div>
</template>


<script>
import TheHeader from "./components/layout/TheHeader";
import TheFooter from "./components/layout/TheFooter";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>


<style>
@font-face {
  font-family: "PlusJakartaDisplay ";
  src: url("./assets/fonts/PlusJakartaDisplay-Regular.ttf");
}

@font-face {
  font-family: "PlusJakartaDisplay ";
  src: url("./assets/fonts/PlusJakartaDisplay-Bold.ttf");
  font-weight: bold;
}

@font-face {
  font-family: "PlusJakartaDisplay ";
  src: url("./assets/fonts/PlusJakartaDisplay-Medium.ttf");
  font-weight: 500;
}

@font-face {
  font-family: "PlusJakartaDisplay ";
  src: url("./assets/fonts/PlusJakartaDisplay-Light.ttf");
  font-weight: 300;
}
html {
  font-family: "PlusJakartaDisplay ", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.btn-cta {
  background: black;
  color: white;
  padding: 1.5rem 3rem;
  border-radius: 5rem;
  font-size: 1rem;
  text-transform: uppercase;
  margin: 1rem;
  cursor: pointer;
  outline: none;
  transition: 1s ease;
}

.btn-cta:hover {
  opacity: 0.7;
}

a {
  color: white;
  text-decoration: none;
}

@media screen and (max-width: 400px) {
  .btn-cta {
    font-size: 0.8rem;
    padding: 1rem;
    margin-right: 4rem;
    margin-left: 4rem;
  }
}
</style>
