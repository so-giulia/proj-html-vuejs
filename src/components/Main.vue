<template>
  <main>
    <!-- ———————— JUMBO START ———————— -->
    <div id="jumbotron">
      <Jumbo/>
    </div>
    <!-- ———————— JUMBO END ———————— -->

    <!-- ———————— FEATURES START ———————— -->
    <section id="features">
      <div class="container">
        <!-- title -->
        <div class="row justify-content-center mb-75">
          <div class="col-12">
            <h3 class="subheading text-center" v-for="subhead in data.features" :key="subhead.id">
              {{subhead.h3}}
            </h3>
          </div>

          <div class="col-12">
            <h2 class="heading text-center" v-for="title in data.features" :key="title.id">
              {{title.heading}}
              <span class="accent text-uppercase">{{title.accent}}</span>
            </h2>
          </div>
        </div>

        <!-- cards -->
        <div class="d-flex justify-content-between align-items-start"
        v-for="item in data.features" :key="item.id">
          <FeatCard v-for="featcard in item.featInfo" :key="featcard.id"
          :info="featcard"/>
        </div>
      </div>
    </section>
    <!-- ———————— FEATURES END ———————— -->

    <!-- ———————— DREAM / NUMBERS START ———————— -->
    <section id="dream">
      <!-- Details: 50% 50% layout -->
      <div class="container">
        <div class="row">
          <!-- image col -->
          <div class="col-6">
            <div class="img-wrap">
              <img class="illo-1" src="../img/about-us-03-image-01.png" alt="Max Coach About Us">
              <img class="underlay-lilla" src="../img/underlay-shape-lilla.svg" alt="Vector shape">
            </div>
            
          </div>

          <!-- txt col -->
          <div class="col-6">
            <!-- title -->
            <div class="row">
              <div class="col-12">
                <h3 class="subheading" v-for="subhead in data.dream" :key="subhead.id">
                  {{subhead.h3}} <span class="fw-500">{{subhead.brandname}}</span>
                </h3>
              </div>

              <div class="col-12 mb-40">
                <h2 class="heading" v-for="title in data.dream" :key="title.id">
                  {{title.heading}}
                  <span class="accent">{{title.accent}}</span>
                  {{title.heading2}}
                </h2>
              </div>

              <div class="col-12">
                <div class="accordion-temp"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Numbers -->
      <div class="numbers container-fluid">
        <div class="container">
          <div class="d-flex justify-content-evenly align-items-center">
            <Numbers v-for="success in data.numbers" :key="success.id" :info="success"/>
          </div>
        </div>
      </div>
    </section>
    <!-- ———————— DREAM / NUMBERS END ———————— -->

    <!-- ———————— COURSES START ———————— -->
    <section id="courses">
      <div class="container">
        <!-- title -->
        <div class="row justify-content-evenly mb-75">
          <div class="col-12">
            <h3 class="subheading text-center" v-for="subhead in data.courses" :key="subhead.id">
              {{subhead.h3}}
            </h3>
          </div>
          
          <div class="col-12">
            <h2 class="heading text-center" v-for="title in data.courses" :key="title.id">
              {{title.heading}}
              <span class="accent">{{title.accent}}</span>
            </h2>
          </div>
        </div>

        <!-- courses cards -->
        <div class="d-flex flex-wrap justify-content-between align-items-start"
        v-for="item in data.courses" :key="item.id">
          <CourseCard v-for="course in item.coursesInfo" :key="course.id" :info="course"/>
        </div>
      </div>
    </section>
    <!-- ———————— COURSES END ———————— -->

    <!-- ———————— LEARN START ———————— -->
    <section id="learn">
      <div class="container">
        <!-- Learn: 50% 50% 1 -->
        <div class="row justify-content-between">
          <!-- txt col -->
          <div class="col-5">
            <!-- title -->
            <div class="row">
              <div class="col-12">
                <h3 class="subheading" v-for="subhead in data.learn1" :key="subhead.id">
                  {{subhead.h3}}
                </h3>
              </div>

              <div class="col-10 mb-40">
                <h2 class="heading" v-for="title in data.learn1" :key="title.id">
                  {{title.heading}}
                  <span class="accent">{{title.accent}}</span>
                </h2>
              </div>

              <div class="col-12">
                <!-- list -->
                <ul class="learn-list" v-for="ul in data.learn1" :key="ul.id">
                  <li v-for="li in ul.list" :key="li.id">
                    <i class="fas fa-check"></i>
                    {{li.tick}}
                  </li>
                </ul>

                <!-- btn -->
                <div class="button-mid rounded text-center" v-for="btn in data.learn1" :key="btn.id">
                  <a href="#">{{btn.cta}}</a>
                </div>
              </div>
            </div>
          </div>

          <!-- image col -->
          <div class="col-7 img-col">
            <div class="img-wrap" v-for="item in data.learn1" :key="item.id">
              <img class="illo-2"
              :src="require('../img/' + item.img)" alt="Max Coach Learn">

              <img class="underlay-grey"
              :src="require('../img/' + item.underlay)" alt="Vector shape grey">

              <img class="dots-circle"
              :src="require('../img/' + item.shape)" alt="circle dots shape">
            </div>
          </div>
        </div>

        <!-- Learn: 50% 50% 2 -->
        <div class="row justify-content-between">
          <!-- image col -->
          <div class="col-5 img-col-2">
            <div class="img-wrap" v-for="item in data.learn2" :key="item.id">
              <img class="illo-3"
              :src="require('../img/' + item.img)" alt="Max Coach Learn">

              <img class="lines"
              :src="require('../img/' + item.lines)" alt="Vector colored lines">

              <img class="dots-square"
              :src="require('../img/' + item.shape)" alt="Square dots shape">

              <img class="underlay-grey grey-2"
              :src="require('../img/' + item.underlay)" alt="Vector shape grey">
            </div>
          </div>

          <!-- txt col -->
          <div class="col-6 learn2-txt-wrap">
            <!-- title -->
            <div class="row">

              <div class="col-12">
                <h3 class="subheading" v-for="subhead in data.learn2" :key="subhead.id">
                  {{subhead.h3}}
                </h3>
              </div>

              <div class="col-12 mb-40">
                <h2 class="heading" v-for="title in data.learn2" :key="title.id">
                  {{title.heading}}
                  <span class="accent">{{title.accent}}</span>
                  {{title.heading2}}
                </h2>
              </div>

              <div class="col-10">
                <p class="learn-paragraph"
                v-for="text in data.learn2" :key="text.id">
                  {{text.desc}}
                </p>

                <!-- btn -->
                <div class="button-mid rounded text-center" v-for="btn in data.learn2" :key="btn.id">
                  <a href="#">{{btn.cta}}</a>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ———————— LEARN END ———————— -->

    <!-- ———————— EVENTS START ———————— -->
    <section id="events">
      <div class="container">
        <!-- title -->
        <div class="row justify-content-center mb-75">
          <div class="col-12">
            <h3 class="subheading text-center" v-for="subhead in data.events" :key="subhead.id">
              {{subhead.h3}}
            </h3>
          </div>
          
          <div class="col-12">
            <h2 class="heading text-center" v-for="title in data.events" :key="title.id">
              {{title.heading}}
              <span class="accent">{{title.accent}}</span>
            </h2>
          </div>
        </div>

        <!-- event cards -->
        <div class="row justify-content-between"
        v-for="item in data.events" :key="item.id">
          <EventCard v-for="event in item.eventsInfo" :key="event.id" :info="event"/>
        </div>
      </div>
    </section>
    <!-- ———————— EVENTS END ———————— -->

    <!-- ———————— REVIEWS START ———————— -->
    <section id="reviews">
      <div class="container">
        <!-- title -->
        <div class="row justify-content-center mb-75">
          <div class="col-12">
           <h3 class="subheading color-brand text-center"
           v-for="subhead in data.reviews" :key="subhead.id">
             {{subhead.h3}}
           </h3>
          </div>
          
          <div class="col-12">
            <h2 class="heading text-center" v-for="title in data.reviews" :key="title.id">
              {{title.heading}}
              <span class="accent">{{title.accent}}</span>
            </h2>
          </div>
        </div>

        <!-- reviews -->
        <div class="row">
          <!-- SLIDER HERE -->
        </div>

        <!-- call to action -->
        <div class="cta">
            <!-- CONTENT HERE -->
        </div>
      </div>
    </section>
    <!-- ———————— REVIEWS END ———————— -->
  </main>
</template>

<script>
import Jumbo from './Jumbo.vue'
import FeatCard from './FeatCard.vue'
import Numbers from './Numbers.vue'
import CourseCard from './CourseCard.vue'
import EventCard from './EventCard.vue'

export default {
    name: 'Main',
    components:{
      Jumbo,
      FeatCard,
      Numbers,
      CourseCard,
      EventCard
    },
    props:{
      data: Object
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/commons.scss';
@import '../styles/vars.scss';

#jumbotron{
  margin-top:-80px;
  height:800px;
  background-color: lighten($grey_dark, 3%);
}

section{
  // debug
  border-bottom:1px solid black;
  margin-top:100px;

  .mb-75{margin-bottom:75px;}
  .mb-40{margin-bottom:40px;}

  // ———— TEXT ———— // 
  .subheading{
      @include caption-uppercase;
      font-weight: 400;
      margin-bottom:20px;
      color:$grey_darker;

      .fw-500{
        font-weight:500;
      }
  }

  .color-brand{
    color:$brand;
  }

  .heading{
      font-size: 3rem;
      font-weight: 600;
      color: $brand;

      .accent{
          @include accent;
      }
  }

  .numbers{
    background: $grey_light;
    padding:70px 0;
  }

  // ———— 50% 50% ———— //

  // images
  .img-wrap{
    position: relative;

    & > *{
      position: absolute;
    }
    & > :first-child{
      z-index: 3;
    }

    .illo-1{
      top:0;
      right:80px;
    }
    .underlay-lilla{
      top:100px;
      right:220px;
      width:380px;
    }

    .illo-2{
      top:0;
      left:100px;
    }
    .underlay-grey{
      width:460px;
      top:130px;
      left: 0;
      z-index: 1;
    }
    .dots-circle{
      top:300px;
      right:20px;
      z-index: 2;
    }

    .illo-3{
      top:-100px;
      right:0;
    }
    .lines{
      top: 120px;
      left: -150px;
      z-index: 2;
    }
    .dots-square{
      top:150px;
      right:-85px;
      z-index: 2;
    }
    .grey-2{
      width: 480px;
      top:-35px;
      left:-60px;
    }
  }

  //accordion
  .accordion-temp{
    width:100%;
    height: 380px;
    margin-bottom:100px;
    border: 1px solid black;
  }
  
  //learn1
  .img-col{
    height:600px;
    margin-bottom:200px;
  }
  .learn-list{
    @include ul-reset;

    li{
      @include section-paragraph;
      padding-bottom:15px;

      i::before{
        color: $accent;
        margin-right:10px;
        height:100%;
      }
    }
  }

  //learn2
  .img-col-2{
    height:450px;
  }
  .learn2-txt-wrap{
    margin-right:-90px;

    .learn-paragraph{
      @include section-paragraph;
      margin-bottom: 45px;
    }
  }

  //buttons
  .button-mid{
      @include button;
      
      margin-top:20px;
      padding:10px 40px;
      width:45%;

      a{
        @include a-reset;
        color:$light;
        font-size: .85rem;
        font-weight: 500;
      }
  }

  
}


</style>