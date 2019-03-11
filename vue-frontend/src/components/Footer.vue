<template>
  <div id="footer">
    <div class="content">
      <h2>Questions or Comments?</h2>
      <router-link to="/contact">Contact Us</router-link>
      <Social />
      <ul class="copyright">
        <li>&copy; {{ msg }}. All rights reserved.</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Social from "@/components/Social.vue";

export default {
  name: "Footer",
  components: {
    Social
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../stylesheets/theme";
#footer {
  clip-path: polygon(50% 35%, 100% 0, 100% 100%, 0 100%, 0 0);
  padding: 5%;
  padding-bottom: 0;
  background-color: color(pColor);

  // line that goes through the center
  &::before {
    background: color(tColor);
    content: "";
    height: 100%;
    left: 50%;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 1px;
    z-index: -1;
  }

  .content {
    margin: 7rem 6%;
    margin-bottom: 0;
    text-align: center;
    position: relative;
    border-top: 1px solid color(tColor);
    color: color(white);
    background-color: color(pColor);
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-content: center;

    // double border effect
    &::before {
      background: none;
      border-top: 1px solid color(tColor);
      content: "";
      display: block;
      position: absolute;
      top: 0.5rem;
      left: 0;
      right: 0;
      bottom: 0.5rem;
      pointer-events: none;
    }

    h2 {
      padding: 5%;
      padding-bottom: 2%;
      letter-spacing: 1px;
      line-height: 200%;
      text-transform: uppercase;
      text-align: center;
    }

    a {
      letter-spacing: 1px;
      text-transform: uppercase;
      color: color(tColor);
      padding-bottom: 2%;
    }

    .copyright {
      list-style: none;
      color: color(tColor);
      font-size: 12px;
      padding: 3%;
    }
  }
}
</style>
