<template>
  <div class="header">
    <div class="content">
      <img src="@/assets/UL_Ligature_white_of-knockedout.png" alt="UL Logo" />
      <h1>Cyber Security Initiative</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../stylesheets/theme";
.header {
  height: 30vh;
  background-color: color(pColor);
  clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0% 75%, 0 0);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .content {
    img {
      height: 5vh;
    }
  }

  h1 {
    padding: 1rem;
    font-family: font(sFont);
    font-size: 25px;
    text-transform: uppercase;
    color: #fff;

    @include medium {
      font-size: 2rem;
    }
  }

  p {
    color: #fff;
    padding: 0 15%;
    letter-spacing: 1px;
  }
}
</style>
