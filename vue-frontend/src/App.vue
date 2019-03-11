<template>
  <div id="app">
    <nav id="navbar">
      <router-link to="/"
        ><img alt="UL logo" src="./assets/UL_logo_white.png"
      /></router-link>
      <div class="menu-btn" v-on:click="showMenu = !showMenu">
        <p v-show="!showMenu">MENU</p>
        <div class="hamburger-menu" v-bind:class="{ active: showMenu }">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </div>
    </nav>
    <div id="menu" v-if="showMenu" v-on:click="showMenu = !showMenu">
      <router-link to="/">Home</router-link>
      <router-link to="/events">Events</router-link>
      <router-link to="/activities">Student Activities</router-link>
      <router-link to="/faculty">Faculty</router-link>
      <router-link to="/education">Education</router-link>
      <router-link to="/resources">Resources</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    };
  },
  computed: {}
};
</script>

<style lang="scss">
@import "./stylesheets/reset";
@import "./stylesheets/theme";

#app {
  font-family: font(sFont);
  overflow: hidden;
}

#navbar {
  position: sticky;
  top: 0;
  display: flex;
  height: 5.5rem;
  background-color: color(sColor);
  justify-content: space-between;
  z-index: 1;

  a {
    padding: 1rem;

    img {
      width: 9rem;
    }
  }

  .menu-btn {
    display: flex;
    cursor: pointer;
    margin: 0 3rem;

    p {
      align-self: center;
      font-family: font(sFont);
      padding: 0 0.5rem;
      font-size: 20px;
      color: #fff;
    }

    .hamburger-menu {
      display: inline-block;
      align-self: center;

      .bar1,
      .bar2,
      .bar3 {
        width: 25px;
        height: 3px;
        background-color: #fff;
        margin: 4px 0;
        transition: 0.4s;
      }

      &.active .bar1 {
        transform: rotate(-225deg) translate(6px, -4px);
      }

      &.active .bar2 {
        opacity: 0;
      }

      &.active .bar3 {
        transform: rotate(225deg) translate(6px, 4px);
      }
    }
  }
}

#menu {
  animation: fade-in 350ms linear 1 both;
  position: fixed;
  top: 5.5rem;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-flow: column;
  background-color: transparentize(color(pColor), 0.1);
  justify-content: center;
  z-index: 1;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  a {
    animation: fade-and-slide-in 250ms linear 350ms 1 both;
    color: #fff;
    text-decoration: none;
    font-family: font(sFont);
    font-size: 20px;
    align-self: center;
    padding: 1rem;
    border-bottom: 1px solid rgba(204, 204, 204, 0.301);
    text-transform: uppercase;

    @keyframes fade-and-slide-in {
      0% {
        opacity: 0;
        transform: translateY(-1rem);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    &.router-link-exact-active.router-link-active {
      color: color(yellow);
    }

    &:hover {
      color: #ccc;
    }
  }
}
</style>
