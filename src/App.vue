<template>
  <div>
    <Background />
    <Center />
    <Quote />
  </div>
</template>

<script>
import Quote from "./components/Quote";
import Center from "./components/Center";
import Background from "./components/Background";

export default {
  name: "App",
  components: {
    Center,
    Quote,
    Background,
  },
};
</script>

<style>
#app {
  font-family: Iosevka, Hack, ui-monospace, SFMono-Regular, Menlo, Monaco,
    Consolas, "Liberation Mono", "Courier New", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  background-color: rgb(53, 58, 64);
  margin: 0;
  padding: 0;
}
</style>
