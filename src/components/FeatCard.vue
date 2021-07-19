<template>
  <div class="featcard d-flex flex-column align-items-center">
    <a href="#" class="wrapper-link text-center">
      <!-- img -->
      <img :src=" require('../img/' + info.img) ">

      <!-- description -->
      <div class="description text-center">
        <h4>{{info.title}}</h4>
        <p>{{info.desc}}</p>
      </div>

      <!-- btn -->
      <div class="feat-btn">
          Start now
           <!-- TO ADD: real arrow -->
          <i class="fas fa-long-arrow-alt-right arrow"></i>
      </div>
    </a>
  </div>
</template>

<script>
export default {
    name: 'FeatCard',
    props:{
      info: Object
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/commons.scss';
@import '../styles/vars.scss';

.featcard{
  width:25%;
  margin: 25px 20px 50px 20px !important;

  .wrapper-link{
      width:100%;
      @include a-reset;
      color: rgba($brand, 0.5);

      img{
        height:28%;
        margin:auto;
      }

      .description{
        margin-top:35px;

        h4{
          color: $dark;
          font-size:1.2rem;
          margin-bottom:1.5rem;
        }

        p{
          font-size:.85rem;
          font-weight: 300;
          line-height: 1.8;
          color: $grey_darker;
          margin-bottom:1.5rem;
        }
      }

      .feat-btn{
        font-size:.85rem;
        font-weight: 500;
        padding: 10px 0;
        border-radius: 5px;
        background-color: transparent;
        color: rgba($brand, 0.5);

        transition:.4s ease;

        .arrow::before{
          margin-left:13px;
          font-size:.85rem;
        }
      }

      &:hover{

        .feat-btn{
          background-color: $grey_light;
          color: $accent;
          transition:.4s ease;
        }

      }
    
  }
}

</style>