<template>
  <div class="jumbo">
    <!-- content -->
    <div class="container">
      <div class="row justify-content-between">
        <!-- txt col -->
        <div class="col-6 test"></div>

        <!-- img col -->
        <div class="col-6 test"></div>
      </div>
    </div>
    
    <!-- overlay -->
    <img class="overlay" :src="require('../img/' + jumbo.overlay)" alt="">
  </div>  
</template>

<script>
export default {
    name: 'Jumbo',
    props:{
      jumbo: Object
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/commons.scss';
@import '../styles/vars.scss';

.jumbo{
    height: 800px;
    position: relative;

    .overlay{
      height:445px;
      position: absolute;
      bottom:0;
      right: 0;
      width:100%;
      transform: rotate(180deg) scale(-1,1);
    }

    .test{
      border:1px solid black;
      height: 800px;
    }
}
</style>