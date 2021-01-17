<template>
  <div class="favourites">
    <div>
      <h2>/feeds</h2>
      <ul>
        <li>
          <img class="icon" src="../assets/favicons/reddit.png" />
          <a href="https://old.reddit.com/">Reddit</a>
        </li>
        <li>
          <img class="icon" src="../assets/favicons/ycombinator.png" />
          <a href="https://news.ycombinator.com/news">Hacker News</a>
        </li>
        <li>
          <img class="icon" src="../assets/favicons/github.png" />
          <a href="https://github.com/">GitHub</a>
        </li>
        <li>
          <img class="icon" src="../assets/favicons/coinbase.png" />
          <a href="https://pro.coinbase.com/trade">Coinebase Pro</a>
        </li>
      </ul>
    </div>
    <div>
      <h2>/artsy</h2>
      <ul>
        <li>
          <img class="icon" src="../assets/favicons/kickstarter.png" />
          <a href="https://www.kickstarter.com/">Kickstarter</a>
        </li>
        <li>
          <img class="icon" src="../assets/favicons/artstation.png" />
          <a href="https://www.artstation.com/">Artstation</a>
        </li>
      </ul>
    </div>
    <div>
      <h2>/google</h2>
      <ul>
        <li>
          <img class="icon" src="../assets/favicons/maps.png" />
          <a href="https://www.google.co.uk/maps/">Google Maps</a>
        </li>
        <li>
          <img class="icon" src="../assets/favicons/drive.png" />
          <a href="https://drive.google.com/drive/my-drive">Google Drive</a>
        </li>
      </ul>
    </div>
    <div>
      <h2>/media</h2>
      <ul>
        <li>
          <img class="icon" src="../assets/favicons/amazon.png" />
          <a href="https://www.amazon.co.uk/">Amazon</a>
        </li>
        <li>
          <img class="icon" src="../assets/favicons/twitch.png" />
          <a href="https://www.twitch.tv/">Twitch</a>
        </li>
        <li>
          <img class="icon" src="../assets/favicons/netflix.png" />
          <a href="https://www.netflix.com/">Netflix</a>
        </li>
        <li>
          <img class="icon" src="../assets/favicons/youtube.png" />
          <a href="https://www.youtube.com/">Youtube</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Favourites",
};
</script>

<style scoped>
.favourites {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  --tw-divide-x-reverse: 0;
  border-right-width: calc(1px * var(--tw-divide-x-reverse));
  border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
}
ul {
  list-style: none;
  padding: 0;
}
li {
  --tw-text-opacity: 0.75;
  background-color: rgba(53, 58, 64, var(--tw-text-opacity));
  margin-bottom: 0.25rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  border-radius: 0.5rem;
}
li:hover {
  --tw-text-opacity: 1;
  background-color: rgba(53, 58, 64, var(--tw-text-opacity));
}
a {
  --tw-text-opacity: 1;
  text-decoration: none;
  color: rgba(253, 253, 253, var(--tw-text-opacity));
  vertical-align: middle;
  font-size: 1.125rem;
  line-height: 1.75rem;
}
a:hover {
  color: white;
  font-weight: 900;
}
h2 {
  color: rgb(105, 240, 174);
  margin-bottom: 1em;
  font-weight: 900;
  font-size: 1.75rem;
  line-height: 1.75rem;
  border-radius: 0.5rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}
.icon {
  margin-right: 1rem;
  display: inline;
  height: 1rem;
  vertical-align: middle;
}
</style>