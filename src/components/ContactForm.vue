<template>
  <form>
    <input type="text" placeholder="Votre Nom ?" />
    <input type="email" placeholder="Votre Email ?" />
    <input type="text" placeholder="Votre Projet ?" />
    <button style="margin-left: 5rem" type="submit" class="btn-cta">
      Envoyer
    </button>
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
</style>