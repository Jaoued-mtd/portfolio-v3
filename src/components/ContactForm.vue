<template>
  <form action=”mailto:contact@jaouedcode.com” method=”POST” enctype=”multipart/form-data” name=”EmailForm”>
    <input type="text" placeholder="Votre Nom ?" />
    <input type="email" placeholder="Votre Email ?" />
    <input type="text" placeholder="Votre Projet ?" />
    <button type="submit" class="btn-cta btn-send">Envoyer</button>
  </form>
</template>

<style scoped>
input {
  display: block;
  width: 100%;
  padding: 2rem;
  border: 0;
  border-bottom: 1px solid grey;
  outline: none;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

input::placeholder {
  color: lightgray;
}

@media screen and (max-width: 400px) {
  input {
    width: 80%;
    margin: auto;
    font-size: 1rem;
  }
}
</style>