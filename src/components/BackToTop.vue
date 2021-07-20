<template>
  <div @click="scrollTop"
  class="backtotop rounded-circle text-center d-flex justify-content-center align-items-center"
  :class="{show: activeScroll}">
      <i class="fas fa-arrow-up"></i>
  </div>
</template>

<script>
export default {
    name: 'BackToTop',
    data(){
        return{
            activeScroll: false
        }
    },
    created(){
        window.addEventListener('scroll', this.haveIscrolled);
    },
    methods: {
        haveIscrolled(){
            if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2){
                this.activeScroll = true;
                // console.log("ok bottom");
                // console.log(this.activeScroll);
            }else if(window.scrollY == 0){
                this.activeScroll = false;
                // console.log("on top");
            }
        },
        scrollTop(){
            document.documentElement.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/commons.scss';
@import '../styles/vars.scss';

.backtotop{
    opacity: 0;

    width: 60px;
    height: 60px;
    background-color: $accent;
    color: $light;
    box-shadow: 0 2px 7px rgba($dark, 25%);
    cursor:pointer;

    transition: opacity .4s ease;
}

.show{
    opacity: 1;
    transition: opacity .4s ease;
}

</style>