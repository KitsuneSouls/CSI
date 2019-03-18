<template>
  <div id="events">
    <!-- Header -->
    <Header />
    <!-- Events -->
    <section id="title">
      <h1>EVENTS</h1>
    </section>
    <section id="events-list">
      <ul>
        <li>FBI Seminar and Visit - <strong>November 14, 2014</strong></li>
        <li>NSA Seminar and Visit - <strong>October 31, 2014</strong></li>
        <li>
          US Army Military Intelligence (Cyber) Brigade Seminar and Visit -
          <strong>September 26, 2013</strong>
        </li>
        <li>
          Information Security Commonwealth Conference in collaboration with the
          FBI - <strong>February 27, 2013</strong>
        </li>
      </ul>
      <p>
        For more recent events visit our social media
      </p>
    </section>
    <!-- Footer -->
    <Footer msg="University of Louisville" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "events",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/theme";
#events {
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
}

section {
  margin: 5% 10%;
  padding: 5%;
}

#title {
  position: relative;
  border-top: 1px solid color(tColor);
  border-bottom: 1px solid color(tColor);
  background-color: #fff;

  // double border effect
  &::before {
    background: none;
    border-top: 1px solid color(tColor);
    border-bottom: 1px solid color(tColor);
    content: "";
    display: block;
    position: absolute;
    top: 0.5rem;
    left: 0;
    right: 0;
    bottom: 0.5rem;
    pointer-events: none;
  }

  h1 {
    font-family: font(sFont);
    font-size: 25px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 2px;
    color: color(pColor);
    padding: 5% 0;
  }
}

#events-list {
  border: 1px solid color(tColor);
  background-color: #fff;

  li {
    line-height: 150%;
    letter-spacing: 0.5px;
    margin: 5%;
  }

  p {
    text-align: center;
    font-weight: bold;
    color: color(tColor);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
}
</style>
