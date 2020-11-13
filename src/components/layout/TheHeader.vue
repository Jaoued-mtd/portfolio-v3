<template>
  <div class="navbar">
    <div class="navbar-left">
      <svg
        width="1.5em"
        height="1.5em"
        viewBox="0 0 16 16"
        class="bi bi-envelope navbar-icon"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
        />
      </svg>
      <p class="navbar-brand">contact@jaouedcode.io</p>
    </div>

    <ul class="navbar-right">
      <router-link
        to="/"
        class="navbar-links"
        style="text-decoration: none; color: black"
        >Accueil</router-link
      >
      <router-link
        to="/apropos"
        class="navbar-links"
        style="text-decoration: none; color: black"
        >A Propos</router-link
      >

      <li class="navbar-links">Contact</li>
    </ul>
  </div>
</template>

<style scoped>
.navbar {
  width: 90%;
  margin: auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
}

.navbar-brand {
  font-size: 1.2rem;
  margin-left: 3rem;
  font-weight: 500;
}

.navbar-left {
  display: flex;
}

.navbar-right {
  display: flex;
  list-style: none;
}

.navbar-icon {
  border: 1px solid gainsboro;
  padding: 1.2rem;
  transition: all 0.5s;
  cursor: pointer;
}
.navbar-icon:hover {
  background: black;
  color: white;
}

.navbar-links {
  margin-right: 3.5rem;
  cursor: pointer;
}

.navbar-links:hover {
  font-weight: bold;
}

.navbar-links::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: #000;
  transition: width 0.3s;
}

.navbar-links:hover::after {
  width: 100%;
}
</style>