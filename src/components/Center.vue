<template>
  <div class="center">
    <div class="center-section">
      <Greeting />
      <Favourites />
    </div>
  </div>
</template>

<script>
import Favourites from "./Favourites";
import Greeting from "./Greeting";

export default {
  name: "Center",
  components: {
    Favourites,
    Greeting,
  },
};
</script>

<style scoped>
.center-section {
  width: 100%;
  display: grid;
  grid-template-rows: repeat(2, minmax(0, 0.75fr));
  justify-self: center;
  align-self: center;
  max-width: 72rem;
}
.center {
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: grid;
  /* opacity: 0; */
}
</style>