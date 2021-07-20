<template>
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="my-slide" v-for="person in info.testimonials" :key="person.id">

            <div class="review-image-wrap rounded-circle">
                <img :src=" require('../img/' + person.img) ">
            </div>

            <div class="review-wrap rounded text-center">
                <p class="review">{{person.review}}</p>
                <p class="name">{{person.name}}</p>
                <p class="occupation">/ {{person.occupation}}</p>
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
import '../../node_modules/swiper/swiper-bundle.min.css'
// import 'swiper/swiper-bundle.min.css';


// import style (<= Swiper 5.x)
// import 'swiper/css/swiper.css'

export default {
    name:'Slider',
    components: {
        Swiper,
        SwiperSlide
    },
    directives: {
        swiper: directive
    },
    props:{
        info: Object
    },
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
}
</script>


<style lang="scss" scoped>
@import '../styles/commons.scss';
@import '../styles/vars.scss';
@import '../../node_modules/swiper/swiper.scss';

.my-slide{
    width:30%;
    
    .review-image-wrap{
        overflow: hidden;
        width:140px;
        height: 140px;
        margin:0 auto -70px auto;
        border-radius: 50%;

        img{
            width: 100%;
        }
    }
    .review-wrap{
        background-color: $light;
        padding:100px 28px 38px 28px;
        box-shadow: $material;

        .review{
            color: $brand;
        }
        .name{
            @include caption-uppercase;
            color: lighten($dark, 5%);
            font-weight: 500;
            margin-top:35px;
        }
        .occupation{
            font-size:.85rem;
            font-weight: 300;
            color:$grey_darker;
            margin-top:10px;
        }
    }
}


</style>