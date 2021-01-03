<template>
  <div>
    <Center />
    <Quote />
  </div>
</template>

<script>
import Quote from "./components/Quote";
import Center from "./components/Center";

export default {
  name: "App",
  components: {
    Center,
    Quote,
  },
};
</script>

<style>
#app {
  font-family: Hack, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  background-color: #1f2937;
}
</style>
