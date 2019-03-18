<template>
  <div id="contact">
    <!-- Header -->
    <Header />
    <!-- Contact -->
    <section id="title">
      <h1>Contact</h1>
    </section>
    <section class="contact">
      <p><strong>Dr. Adel S. Elmaghraby</strong></p>
      <p>Professor and Chair of Computer Engineering and Computer Science</p>
      <p>adel.elmaghraby@louisville.edu</p>
      <p>+1 502-852-0470</p>
    </section>
    <section class="contact">
      <p><strong>Dr. Ghiyoung Im</strong></p>
      <p>Associate Professor of Computer Information Systems</p>
      <p>ghiyoung.im at louisville.edu</p>
      <p>+1 502-852-4794</p>
    </section>
    <!-- Footer -->
    <Footer msg="University of Louisville" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "contact",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/theme";
#contact {
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

    @include medium {
      padding: 0;
    }
  }
}

.contact {
  border: 1px solid color(tColor);
  background-color: #fff;
  text-align: center;

  p {
    line-height: 200%;
    letter-spacing: 0.5px;
  }
}
</style>
