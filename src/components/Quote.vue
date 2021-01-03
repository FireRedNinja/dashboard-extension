<template>
  <div class="quote">
    <p v-if="content">"{{ content }}"</p>
    <p v-if="author">{{ author }}</p>
  </div>
</template>

<script>
export default {
  name: "Quote",
  data() {
    return {
      id: "",
      tags: "",
      content: "",
      author: "",
      length: "",
    };
  },
  created() {
    this.getQuote();
  },
  methods: {
    getQuote() {
      // let quote;
      // chrome.storage.local.get(["quote"], function (result) {
      //   console.log("Value currently is " + result.key);
      //   quote = result;
      // });

      fetch("https://api.quotable.io/random")
        .then((response) => response.json())
        .then((data) => {
          this.id = data._id;
          this.tags = data.tags;
          this.content = data.content;
          this.author = data.author;
          this.length = data.length;
        });
    },
  },
};
</script>

<style scoped>
.quote {
  margin: 3rem;
  color: rgb(255, 128, 171);
  text-align: center;
  position: fixed;
  right: 0px;
  left: 0px;
  bottom: 0px;
  display: grid;
  justify-items: center;
}
</style>