<template>
  <footer>
    <div class="container">
      <div class="foot-wrap d-flex flex-column">
          <!-- footer upper start -->
          <div class="footer-upper row justify-content-between align-items-start">
            <div class="col-6 test"></div>
            <div class="col-3 test"></div>
            <div class="col-3 test"></div>
          </div>
          <!-- footer upper end -->


          <!-- footer lower start -->
          <div class="footer-lower row justify-content-center align-items-center">
            <div class="col-12">
              <p class="copy text-center">
                <!-- TO ADD: dynamic year -->
                &copy; 2020 Maxcoach. All Rights Reserved.
              </p>
            </div>
          </div>
          <!-- footer lower end -->
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
@import '../styles/commons.scss';
@import '../styles/vars.scss';

footer{
  padding:70px 0 55px 0;
  background-color: $light;

  .test{
    height:80px;
    border:1px solid black;
  }

  .copy{
    color:$grey_dark;
    font-size:.85rem;
  }
}
</style>