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
        <div class="row justify-content-center">
          <div class="col-12">
            <h3 class="subheading text-center">
              {{subhead[1].h3}}
            </h3>
          </div>

          <div class="col-12">
            <h2 class="heading text-center">
              {{head[0].txt}}
              <span class="accent text-uppercase">{{head[0].accent}}</span>
            </h2>
          </div>
        </div>

        <!-- cards -->
        <div class="d-flex justify-content-between align-items-start">
          <FeatCard v-for="featcard in featInfo" :key="featcard.id"
          :info="featcard"/>
        </div>
      </div>
    </section>
    <!-- ———————— FEATURES END ———————— -->

    <!-- ———————— DETAILS START ———————— -->
    <section id="details">
      <!-- Details: 50% 50% layout -->
      <div class="container">
        <div class="row">
          <!-- image col -->
          <div class="col-6"></div>

          <!-- txt col -->
          <div class="col-6">
            <!-- title -->
            <div class="row">
              <div class="col-12">
                <h3 class="subheading">
                  {{subhead[2].h3}} <span class="fw-500">{{subhead[0].brandname}}</span>
                </h3>
              </div>

              <div class="col-12">
                <h2 class="heading">
                  {{head[1].txt}}
                  <span class="accent">{{head[1].accent}}</span>
                  {{head[1].txt2}}
                </h2>
              </div>
            </div>


          </div>
        </div>
      </div>

      <!-- Numbers -->
      <div class="container-fluid">
        <div class="container">
          <div class="row"></div>
        </div>
      </div>
    </section>
    <!-- ———————— DETAILS END ———————— -->

    <!-- ———————— COURSES START ———————— -->
    <section id="courses">
      <div class="container">
        <!-- title -->
        <div class="row justify-content-center">
          <div class="col-12">
            <h3 class="subheading text-center">
              {{subhead[3].h3}}
            </h3>
          </div>
          
          <div class="col-12">
            <h2 class="heading text-center">
              {{head[2].txt}}
              <span class="accent">{{head[2].accent}}</span>
            </h2>
          </div>
        </div>

        <!-- courses cards -->
        <div class="row">
          <CourseCard/>
        </div>
      </div>
    </section>
    <!-- ———————— COURSES END ———————— -->

    <!-- ———————— LEARN START ———————— -->
    <section id="learn">
      <div class="container">
         
        <!-- Learn: 50% 50% 1 -->
        <div class="row">
          <!-- txt col -->
          <div class="col-6">
            <!-- title -->
            <div class="row">
              <div class="col-12">
                <h3 class="subheading">
                  {{subhead[4].h3}}
                </h3>
              </div>

              <div class="col-12">
                <h2 class="heading">
                  {{head[3].txt}}
                  <span class="accent">{{head[3].accent}}</span>
                </h2>
              </div>
            </div>
          </div>

          <!-- image col -->
          <div class="col-6">
          </div>
        </div>

        <!-- Learn: 50% 50% 2 -->
        <div class="row">
          <!-- image col -->
          <div class="col-6">
          </div>

          <!-- txt col -->
          <div class="col-6">
            <!-- title -->
            <div class="row">
              <div class="col-12">
                <h3 class="subheading">
                  {{subhead[5].h3}}
                </h3>
              </div>

              <div class="col-12">
                <h2 class="heading">
                  {{head[4].txt}}
                  <span class="accent">{{head[4].accent}}</span>
                  {{head[4].txt2}}
                </h2>
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
        <div class="row justify-content-center">
          <div class="col-12">
            <h3 class="subheading text-center">
              {{subhead[6].h3}}
            </h3>
          </div>
          
          <div class="col-12">
            <h2 class="heading text-center">
              {{head[5].txt}}
              <span class="accent">{{head[5].accent}}</span>
            </h2>
          </div>
        </div>

        <!-- event cards -->
        <div class="row">
          <EventCard/>
        </div>
      </div>
    </section>
    <!-- ———————— EVENTS END ———————— -->

    <!-- ———————— REVIEWS START ———————— -->
    <section id="reviews">
      <div class="container">
        <!-- title -->
        <div class="row justify-content-center">
          <div class="col-12">
           <h3 class="subheading color-brand text-center">
             {{subhead[7].h3}} {{subhead[0].brandname}}
           </h3>
          </div>
          
          <div class="col-12">
            <h2 class="heading text-center">
              {{head[6].txt}}
              <span class="accent">{{head[6].accent}}</span>
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
import CourseCard from './CourseCard.vue'
import EventCard from './EventCard.vue'

export default {
    name: 'Main',
    components:{
      Jumbo,
      FeatCard,
      CourseCard,
      EventCard
    },
    props:{
      subhead: Array,
      head: Array
    },
    data(){
      return{
        featInfo:[
          {
            img:'home-5-image-box-01.png',
            title: 'Idea Discussion',
            desc: 'Get teamed up with the specialists who work and teach coding for years at famous universities.'
          },
          {
            img:'home-5-image-box-02.png',
            title: 'Web Development',
            desc: 'Learn to start building a webpage from scratch. You decide your own pace, course and speed.'
          },
          {
            img:'home-5-image-box-03.png',
            title: 'System Administration',
            desc: 'Learners are encouraged to study the mechanism and structure of system administration.'
          },
          {
            img:'home-5-image-box-04.png',
            title: 'Graphic Design',
            desc: 'Have a passion for graphics and arts? Show your talents with confidence and self-assertiveness.'
          }
        ],
      }
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

  // ———— TEXT ———— // 
  .subheading{
      font-size:.95rem;
      text-transform: uppercase;
      letter-spacing: 2px;
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
          color: $accent;
          font-weight: 300;
      }
  }
}


</style>