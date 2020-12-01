<template>
  <footer class="footer">
    <div class="footer-left socials">
      <a href="http://twitter.fr" class="icons-links">
        <img
          src="../../assets/images/twitter1.svg"
          class="icons"
          alt="twitter"
          target="_blank"
        />
      </a>
      <a
        href="https://github.com/Jaoued-mtd"
        target="_blank"
        class="icons-links"
      >
        <img src="../../assets/images/github.svg" class="icons" alt="github" />
      </a>
      <a href="http://twitter.fr" class="icons-links">
        <img
          src="../../assets/images/instagram.svg"
          class="icons"
          alt="instgram"
          target="_blank"
        />
      </a>
      <a href="http://twitter.fr" class="icons-links">
        <img
          src="../../assets/images/linkedin1.svg"
          class="icons"
          alt="linkedin"
          target="_blank"
        />
      </a>
    </div>
    <div class="footer-right">
      <a href="mailto:jaouedlb@live.fr" style="color: black">
        <svg
          width="1.5em"
          height="1.5em"
          viewBox="0 0 16 16"
          class="bi bi-envelope footer-icon"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
          /></svg
      ></a>
      <h4 class="navbar-brand">contact@jaouedcode.io</h4>
    </div>
  </footer>
</template>


<style scoped>
.footer {
  width: 70%;
  margin: auto;
  padding: 5rem;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}

.footer-right,
.footer-left {
  display: flex;
}

.footer-icon {
  margin-right: 2rem;
  border: 1px solid gainsboro;
  padding: 1.2rem;
  transition: all 0.5s;

  cursor: pointer;
}

.footer-icon:hover {
  background: black;
  color: white;
}

.icons {
  max-width: 2rem;
  margin-right: 2rem;
}

@media screen and (max-width: 800px) {
  .footer {
    padding: 0;
    width: 100%;
    margin: 10rem auto;
    text-align: center;
    flex-direction: column;
    overflow: hidden;
  }

  .footer-left,
  .footer-right {
    justify-content: center;
    margin-bottom: 2rem;
  }

  .icons {
    margin: 1rem;
  }
  .footer-icon {
    margin: 0;
  }
  .navbar-brand {
    display: none;
  }
}
</style>