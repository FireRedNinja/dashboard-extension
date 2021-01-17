<template>
  <div class="quote">
    <p v-if="content">{{ content }}</p>
    <p v-if="author">{{ author }}</p>
  </div>
</template>

<script>
import axios from "axios";

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
    async fetchQuoteAPI() {
      const res = await axios.get("https://api.quotable.io/random");
      const data = await res.data;
      return data;
    },
    setQuoteState(data) {

      this.id = data._id;
      this.tags = data.tags;
      this.content = data.content;
      this.author = data.author;
      this.length = data.length;
    },
    async getQuote() {
      // eslint-disable-next-line no-undef
      const result = await browser.storage.local.get("quote");
      if (Object.keys(result).length > 0) {

        var midnight = new Date();
        midnight.setHours(0, 0, 0, 0);

        if (result.quote.queryTime < midnight) {
          let data = await this.fetchQuoteAPI();
          data.queryTime = Date.now();
          this.setQuoteState(data);

          // eslint-disable-next-line no-undef
          browser.storage.local.set({
            quote: {
              ...data,
            },
          });
        } else {
          this.setQuoteState(result.quote);
        }
      } else {
        let data = await this.fetchQuoteAPI();
        data.queryTime = Date.now();
        this.setQuoteState(data);

        // eslint-disable-next-line no-undef
        browser.storage.local.set({
          quote: {
            ...data,
          },
        });
      }
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
p {
  margin: 0;
  font-size: 1.25rem; 
}
</style>