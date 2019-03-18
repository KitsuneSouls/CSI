<template>
  <div id="activities">
    <!-- Header -->
    <Header />
    <!-- Student Activities -->
    <section id="title">
      <h1>Student Activities</h1>
    </section>
    <section class="activity">
      <h1>Cyber Security Competition</h1>
      <p>
        The experience will provide students with the opportunity to test their
        technical capabilities in a real operational environment. In addition,
        our students will gain valuable practice for the state competition to
        determine eligibility for the Midwest Regional Collegiate Cyber Defense
        Competition (CCDC). One team of about eight students will represent the
        university in the event.
      </p>
      <a
        href="http://business.louisville.edu/go-defense-cyber-security-competition/"
        >Find out more here</a
      >
      <br /><br /><br /><br />
      <p>
        From 2007 to 2011 University of Louisville placed in the top 2 in the
        South West Conference, and in 2007, 2008, 2010, 2011 in the top 3 of the
        nation.
      </p>
      <br /><br />
      <a href="https://www.nationalccdc.org/index.php">Learn more about CCDC</a>
      <img
        src="@/assets/ccdc-logo.png"
        alt="CCDC Logo"
        style="filter: invert(1)"
      />
    </section>
    <section class="activity">
      <h1>Campus Groups</h1>
      <p>Join other students that share the same interests you do!</p>
      <br /><br />
      <a href="https://speedacm.org/">Click to learn more</a>
    </section>
    <!-- Footer -->
    <Footer msg="University of Louisville" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "activities",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/theme";
#activities {
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

.activity {
  border: 1px solid color(tColor);
  background-color: #fff;
  text-align: center;
  position: relative;
  padding: 10%;

  @include medium {
    padding: 5%;
  }

  // double border effect
  &::before {
    background: none;
    border: 1px solid color(tColor);
    content: "";
    display: block;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    right: 0.5rem;
    bottom: 0.5rem;
    pointer-events: none;
  }

  h1 {
    font-family: font(sFont);
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: color(pColor);
    padding-bottom: 5vh;
  }

  p {
    line-height: 200%;
    letter-spacing: 0.5px;
  }

  a {
    letter-spacing: 1px;
    text-transform: uppercase;
    color: color(pColor);
  }

  img {
    display: block;
    margin: auto;
  }
}
</style>
