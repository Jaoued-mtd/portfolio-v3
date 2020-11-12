<template>
  <TheHeader />
  <router-view> </router-view>
</template>

<script>
import TheHeader from "./components/layout/TheHeader";
export default {
  components: {
    TheHeader,
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
  opacity: 70%;
}
</style>
