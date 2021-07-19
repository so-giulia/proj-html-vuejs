<template>
  <div class="jumbo d-flex justify-content-center align-items-end">
    <!-- content -->
    <div class="container">
      <div class="row justify-content-between">
        <!-- txt col -->
        <div class="col-5 hero-wrap align-self-center">
          <div class="jumbotxt-wrap">
            <h1 class="mb-40">{{jumbo.title}}</h1>
            <p class="jumbo-paragraph mb-50">{{jumbo.paragraph}}</p>
          </div>
          
          <span class="button-mid rounded text-center">
            <a href="#">
              <i class="fas fa-download download-ico"></i>
              {{jumbo.cta}}
            </a>
          </span>
        </div>

        <!-- img col -->
        <div class="col-6 hero-wrap">
          <img :src="require('../img/' + jumbo.img)" alt="MaxCoach hero illustration">
        </div>
      </div>
    </div>
    
    <!-- overlay -->
    <img class="overlay" :src="require('../img/' + jumbo.overlay)" alt="Wave vector shape">
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
    height: 720px;
    position: relative;

    .overlay{
      height:445px;
      position: absolute;
      bottom:0;
      right: 0;
      width:100%;
      transform: rotate(180deg) scale(-1,1);
    }

    .hero-wrap{
      z-index: 2;
      margin-bottom:50px;

      .jumbotxt-wrap{
        width:90%;

        h1{
          color: $brand;
          font-size: 3rem;
          font-weight: 600;
          line-height: 3.8rem;
        }

        p{
          @include section-paragraph;

          color: rgba($brand, .55);
          font-size: 1.15rem;
          line-height: 2rem;
          font-weight: 400;
        }
      }

      .button-mid{
        @include button;
        padding:15px 40px;

        .download-ico{
          display: inline-block;
          margin-right:13px;
          font-size:1rem;
        }

        a{
          @include button-a;
        }
      }
    }

    .mb-40{margin-bottom:40px;}
    .mb-50{margin-bottom:50px;}
}
</style>