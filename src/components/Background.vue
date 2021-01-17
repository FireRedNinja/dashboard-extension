<template>
  <img
    alt="static Mapbox map of {{name}}"
    :src="`https://api.mapbox.com/styles/v1/fajisklod/ckjh6rezp0czu19pdu268hayb/static/${long},${lat},13.0,0.00,0.00/${width}x${height}@2x?access_token=${token}`"
  />
</template>

<script>
// import summits from '../assets/Walks_API_Summits.json';
import mapboxToken from '../../mapboxToken';

export default {
  name: "Background",
  data() {
    return {
      width: 0,
      heigh: 0,
      lat: 56.325309,
      long: -4.642479,
      name: "",
      token: mapboxToken
    };
  },
  created() {
    const mapbox_limits = {
      w: 1280,
      h: 1280,
    };
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );
    const viewbox = {
      w: vw,
      h: vh,
    };
    const scale = this.getScale(viewbox, mapbox_limits);

    this.width = Math.floor(viewbox.w * scale);
    this.height = Math.floor(viewbox.h * scale);

    // const summit = summits[Math.floor(Math.random() * summits.length)];
    // this.lat = summit.location.latitude;
    // this.long = summit.location.longitude;
    // this.name = summit.name;
  },
  methods: {
    getScale(src, dst) {
      return Math.min(dst.w / src.w, dst.h / src.h);
    },
  },
};
</script>

<style scoped>
img {
  position: absolute;
  width: 100vw;
  height: 100vh;
  /* background-position: center center;
  background-repeat: no-repeat; */
  /* opacity: 0.2; */
  object-fit: cover;
}
</style>