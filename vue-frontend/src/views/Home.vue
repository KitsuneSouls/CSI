<template>
  <div id="home">
    <!-- Header -->
    <div id="header">
      <div class="content">
        <img src="@/assets/UL_Ligature_white_of-knockedout.png" alt="UL Logo">
        <h1>Cyber Security Initiative</h1>
        <p>Welcome to the Cyber Security Initiative (CSI) at the University of Louisville.</p>
      </div>
    </div>
    <!-- Intro -->
    <section id="intro">
      <h2>The department of Computer Engineering and Computer Science (CECS) in the J.B. Speed School of Engineering, and the department of Computer Information Systems (CIS) in the College of Business have established the CSI as a focal center for collaboration on cyber security across disciplines at the University of Louisville.</h2>
      <p>This effort is part of the J.B. Speed School Engineering's strategic initiative on Cyber Enabled Discovery.</p>
    </section>
    <!-- DoD Scholarship Opportunity -->
    <section id="dod-scholarship">
      <h1>DoD Scholarship Opportunity</h1>
      <a href="">Click to learn more</a>
    </section>
    <!-- News -->
    <section id="news">
      <h1>News Announcement</h1>
      <ul>
        <li>UofL awarded a $580,000 grant to expand the cybersecurity workforce. <a href="">Read More</a></li>
        <li>The University of Louisville Cyber Defense Team Takes Home 3rd Place at the 2017 <a href="">Cyber Defense Midwest competition</a></li>
        <li>The University of Louisville joins the <a href="">DHS Stop.Think.Connect Academic Alliance</a></li>
        <li>The University of Louisville is designated <a href="">CAE IA/CD</a> 2014-2019  (Center of Academic Excellence in Information Assurance/Cyber Defense Education)</li>
        <li> NSA and the Department of Homeland Security (DHS) jointly sponsor the National Centers of Academic Excellence in IA/CD programs.</li>
      </ul>
    </section>
    <!-- Mision -->
    <section id="mission">
      <h1>Mission</h1>
      <p>The "Cyber Security Initiative" (CSI) initiative is a collaborative effort between the departments of Computer Engineering and Computer Science and the Computer Information Systems. This initiative provides educational, research and service activities in cybersecurity, information assurance, forensics and legal aspects of computing. Additionally the CSI aims to promote secure and ethical use of information technology throughout the university and the community at large.</p>
    </section>
    <!-- Footer -->
    <Footer msg="University of Louisville" />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Footer
  }
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/theme";
#home {

  // line that goes through the center
  &::before {
    background: color(tColor);
    content: '';
    height: 100%;
    left: 50%;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 1px;
    z-index: -1;
  }
}

#header {
  height: 80vh;
  background-image: url(../assets/bg.jpg);
  background-size: cover;
  clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0% 75%, 0 0);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .content {
    margin-top: -5rem;
  }

  h1 {
    padding: 3rem;
    font-family: font(sFont);
    font-size: 25px;
    text-transform: uppercase;
    color: #FFF;

    @include medium {
      font-size: 3rem;
    }
    @include large {
      font-size: 4rem;
    }
    @include extralarge {
      font-size: 5rem;
    }
  }

  p {
    color: #FFF;
    padding: 0 15%;
    letter-spacing: 1px;
  }
}

section {
  margin: 5% 10%;
  padding: 5%;
}

#intro{  
  position: relative;
  border-top: 1px solid color(tColor);
  border-bottom: 1px solid color(tColor);
  background-color: #FFF;

  // double border effect
  &::before {
    background: none;
    border-top: 1px solid color(tColor);
    border-bottom: 1px solid color(tColor);
    content: "";
    display: block;
    position: absolute;
    top: .5rem;
    left: 0;
    right: 0;
    bottom: .5rem;
    pointer-events: none;
  }

  h2 {
    letter-spacing: 1px;
    line-height: 200%;
    text-transform: uppercase;
    text-align: center;
    padding-bottom: 5%;
  }

  p {
    padding-top: 5%;
    border-top: 1px solid color(tColor);
    text-align: center;
    line-height: 150%;
  }
}

#dod-scholarship {
  border: 1px solid color(tColor);
  background-color: #FFF;
  text-align: center;
  position: relative;

  // double border effect
  &::before {
    background: none;
    border: 1px solid color(tColor);
    content: "";
    display: block;
    position: absolute;
    top: .5rem;
    left: .5rem;
    right: .5rem;
    bottom: .5rem;
    pointer-events: none;
  }

  h1 {
    font-family: font(sFont);
    font-size: 25px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: color(pColor);
    padding-bottom: 5%; 
  }

  a {
    letter-spacing: 1px;
    text-transform: uppercase;
  }
}

#news {
  border: 1px solid color(tColor);
  background-color: #FFF;

  h1 {
    font-family: font(sFont);
    font-size: 25px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 2px;
    color: color(pColor);
    padding-bottom: 5%; 
  }
  
  li {
    line-height: 150%;
    letter-spacing: .5px;
    margin: 5%;
  }
}

#mission {
  border: 1px solid color(tColor);
  background-color: #FFF;
  text-align: center;

  h1 {
    font-family: font(sFont);
    font-size: 25px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: color(pColor);
    padding-bottom: 5%; 
  }
  
  p {
    line-height: 150%;
    letter-spacing: .5px    
  }
}
</style>
