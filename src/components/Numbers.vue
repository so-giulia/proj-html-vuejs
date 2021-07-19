<template>
  <div class="success d-flex flex-column text-center">
      <p class="number">{{info.number}}</p>
      <p class="subject">{{info.subject}}</p>
  </div>
</template>

<script>
export default {
    name: 'Numbers',
    props:{
        info: Object
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/commons.scss';
@import '../styles/vars.scss';

.number{
     color:$accent;
    font-weight: 700;
    font-size:3rem;
}
.subject{
    color:$brand;
    font-weight: 600;
    @include caption-uppercase;
}
</style>