<template>
  <div class="sidenav">
      <nav v-for="nav in data" :key="nav.id">
          <ul class="d-flex flex-column align-items-center justify-content-center">
              <li v-for="li in nav" :key="li.id" class="text-center">
                   <i class="fas" :class="li.class"></i>
              </li>
          </ul>
      </nav>
  </div>
</template>

<script>
export default {
    name: 'SideNav',
    props:{
        data: Object
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/commons.scss';
@import '../styles/vars.scss';

.sidenav{
    background-color: $light;
    width: 40px;
    padding: 0 0 13px 0;
    color: $dark;
    

    position:fixed;
    top:200px;
    right:0;
    box-shadow: $material;
    border-radius: 0.25rem 0 0 0.25rem;
    z-index: 1000;

    ul{
        @include ul-reset;

        li{
            padding-top:13px;
            cursor: pointer;
        }
    }
}

</style>