<template>
  <div id="education">
    <!-- Header -->
    <Header />
    <!-- Education -->
    <section id="title">
      <h1>Education</h1>
    </section>
    <!-- List of Classes -->
    <!-- CECS -->
    <section class="info">
      <h2>Computer Engineering and Computer Science</h2>
      <h3>Graduate Certificate in Network and Information Security (NIS)</h3>
      <p>
        Total of 12 credit hours are required with 2 required courses and 2
        elective courses.
      </p>
      <h4>Required Courses</h4>
      <ul>
        <li><strong>CECS 564</strong> - Introduction to Cryptology</li>
        <li><strong>CECS 566</strong> - Information Security</li>
      </ul>
      <h4>Electives Courses</h4>
      <ul>
        <li><strong>CECS 568</strong> - Computer Forensics</li>
        <li><strong>CECS 613</strong> - Network Security</li>
        <li>
          <strong>CECS 694</strong> - Special Topics: Information Assurance
        </li>
        <li><strong>CECS 617</strong> - Mobile Computing</li>
        <li><strong>CECS 632</strong> - Data Mining</li>
        <li>
          <strong>CECS 694</strong> - Special Topics: Advanced Cryptography
        </li>
        <li><strong>CECS 694</strong> - Special Topics: Database Security</li>
      </ul>
    </section>
    <!-- CIS -->
    <section class="info">
      <h2>COMPUTER INFORMATION SYSTEMS</h2>
      <h3>Undergradutaete Certificate in Information Security (InfoSec)</h3>
      <p>
        Total of 12 credit hours are required with 3 required courses and 1
        elective course.
      </p>
      <h4>Required Courses</h4>
      <ul>
        <li><strong>CIS 480</strong> - Introduction to Network Security</li>
        <li><strong>CIS 481</strong> - Introduction to Information Security</li>
        <li><strong>CIS 483</strong> - Introduction to Database Security</li>
      </ul>
      <h4>Electives Courses</h4>
      <ul>
        <li><strong>CIS 482</strong> - Introduction to Cryptography</li>
        <li><strong>CIS 484</strong> - Computer Forensics</li>
      </ul>
    </section>
    <section class="info">
      <p>
        Specific class information is available
        <a
          target="_blank"
          href="http://htmlaccess.louisville.edu/classSchedule/setupSearchClassSchedule.cfm"
          >HERE</a
        >
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
  name: "education",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/theme";
#education {
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

.info {
  border: 1px solid color(tColor);
  background-color: #fff;
  text-align: center;

  h2 {
    font-family: font(sFont);
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: color(pColor);
    padding: 5% 0;
  }

  h3 {
    font-family: font(sFont);
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: color(sColor);
    padding: 5% 0;
  }

  h4 {
    font-family: font(sFont);
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: color(pColor);
    padding: 5% 0;
  }

  p {
    line-height: 200%;
    letter-spacing: 0.5px;
  }

  ul {
    list-style: none;
    padding: 0 5%;

    li {
      padding: 3%;
    }
  }

  a {
    color: color(pColor);
  }
}
</style>
