<template>
  <div class="card course-card col-4">
    <a href="#" class="wrapper-link">
      <!-- price -->
      <span class="price text-center">
        {{info.price}}<span class="float" v-if="info.price != 'Free'">.00</span>
      </span>

      <!-- background image -->
      <div class="card-image">
        <img class="main-img" :src=" require('../img/' + info.img_path) ">
      </div>

      <!-- card details -->
      <div class="card-details">
          <!-- teacher start -->
          <div class="teacher-wrap d-flex align-items-center">
            <img class="teacher-img rounded-circle" :src="require('../img/' + info.teacherImg_path)" alt="info.teacher">
            <span class="teacher-name">{{info.teacher}}</span>
          </div>
          <!-- teacher end -->

          <!-- course title start -->
          <h4>{{info.name}}</h4>
          <!-- course title end -->

          <!-- course details start -->
          <div class="course-details-wrap d-flex justify-content-start align-items-center">
              <div class="detail-row d-flex align-items-center">
                <!-- temporary TO ADD: real ico -->
                <i class="far fa-file-alt details-ico"></i>
                <span>{{info.lessons}} Lessons</span>
              </div>

              <div class="detail-row d-flex mx-3 align-items-center">
                <!-- temporary TO ADD: real ico -->
                <i class="fas fa-user-alt details-ico"></i>
                <span>{{info.students}} Students</span>
              </div>
          </div>
          <!-- course details end -->
      </div>
    </a>
  </div>
</template>

<script>
export default {
    name: 'CourseCard',
    props:{
      info: Array
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/commons.scss';
@import '../styles/vars.scss';

.course-card{
  border: none !important;
  border-radius: 10px !important;
  padding: 0 !important;
  width: 31.5% !important;
  margin-bottom: 40px;
  
  a{
    @include a-reset;
    border-radius:10px;
    display: block;
    position: relative;
    overflow: hidden;

    transition: 1s ease;

    .price{
      position:absolute;
      top:0;
      right:0;
      z-index: 10;
      width:85px;

      background-color: $accent;
      border-radius:0 10px 0 10px;
      padding:10px 0;
      
      color:$light;
      font-weight: 500;
    }

    .card-image{
      height: 230px;
      overflow: hidden;

      img{
        width: 100%;
        text-align: center;

        transform: scale(1);
        transform-origin: center;
        transition: transform 1s ease;
      }
    }

    .card-details{
      padding:20px 30px 50px 30px;
      background-color: transparent;
      color: $dark;

      .teacher-wrap{
        margin-bottom: 15px;

        .teacher-img{
          width: 33px;
          height: 33px;
          margin-right: 10px;
        }

        .teacher-name{
          font-size:.85rem;
          color:$grey_darker;
          font-weight:300;
        }
      }

      h4{
        @include h4-titles;
      }

      .course-details-wrap{
        @include txt-details;
        margin-top:40px;

        .details-ico{
          margin-right:13px;
        }
      }
    }

    &:hover{
      box-shadow: $material;

      .main-img{
        transform: scale(1.1);
      }

      .card-details{
        background-color: #fff !important;
      }

      transition: 1s ease;
    } 
  }
  
}

</style>