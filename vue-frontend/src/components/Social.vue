<template>
  <ul class="social-media-links">
    <li>
      <a href=""><i class="fab fa-facebook"></i></a>
    </li>
    <li>
      <a href=""><i class="fab fa-twitter"></i></a>
    </li>
    <li>
      <a href=""><i class="fab fa-instagram"></i></a>
    </li>
    <li>
      <a href=""><i class="fab fa-github"></i></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Social"
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/theme";
.social-media-links {
  display: inline-flex;
  list-style: none;
  align-self: center;
  margin: 10px;

  li {
    margin: 0.5rem;

    a {
      padding: 0.5rem 0.65rem;
      border: 1px solid #fff;
      border-radius: 100px;

      i {
        color: #fff;
      }

      &:hover {
        color: color(yellow);
        border: 1px solid color(yellow);

        i {
          color: color(yellow);
        }
      }
    }
  }
}
</style>
