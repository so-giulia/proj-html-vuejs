<template>
  <div class="backtotop rounded-circle text-center d-flex justify-content-center align-items-center">
      <!-- TO ADD: real arrow -->
      <i class="fas fa-arrow-up"></i>
  </div>
</template>

<script>
export default {
    name: 'BackToTop'
}
</script>

<style lang="scss" scoped>
@import '../styles/commons.scss';
@import '../styles/vars.scss';

.backtotop{
    width: 60px;
    height: 60px;
    background-color: $accent;
    color: $light;
    box-shadow: 0 2px 7px rgba($dark, 25%);
}

</style>