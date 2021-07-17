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
        info: Array
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
    font-size:.95rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
}
</style>