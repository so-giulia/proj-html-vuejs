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
                <h3 class="subheading">
                  {{subhead[2].h3}} <span class="fw-500">{{subhead[0].brandname}}</span>
                </h3>
              </div>

              <div class="col-12 mb-40">
                <h2 class="heading">
                  {{head[1].txt}}
                  <span class="accent">{{head[1].accent}}</span>
                  {{head[1].txt2}}
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
            <Numbers v-for="success in numbers" :key="success.id" :info="success"/>
          </div>
        </div>
      </div>
    </section>
    <!-- ———————— DETAILS END ———————— -->

    <!-- ———————— COURSES START ———————— -->
    <section id="courses">
      <div class="container">
        <!-- title -->
        <div class="row justify-content-evenly mb-75">
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
        <div class="d-flex flex-wrap justify-content-between align-items-start">
          <CourseCard v-for="course in courses" :key="course.id" :info="course"/>
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
                <h3 class="subheading" v-for="subhead in learn" :key="subhead.id">
                  {{subhead.h3}}
                </h3>
              </div>

              <div class="col-10 mb-40">
                <h2 class="heading" v-for="title in learn" :key="title.id">
                  {{title.heading}}
                  <span class="accent">{{title.accent}}</span>
                </h2>
              </div>

              <div class="col-12">
                <!-- list -->
                <ul class="learn-list" v-for="ul in learn" :key="ul.id">
                  <li v-for="li in ul.list" :key="li.id">
                    <i class="fas fa-check"></i>
                    {{li.tick}}
                  </li>
                </ul>

                <!-- btn -->
                <div class="button-mid rounded text-center" v-for="btn in learn" :key="btn.id">
                  <a href="#">{{btn.cta}}</a>
                </div>
              </div>
            </div>
          </div>

          <!-- image col -->
          <div class="col-7 img-col">
            <div class="img-wrap">
              <img class="illo-2" src="../img/home-5-image-01.png" alt="Max Coach Learn">
              <img class="underlay-grey" src="../img/underlay-shape-grey.svg" alt="Vector shape grey">
              <img class="dots-circle" src="../img/maxcoach-shape-05.png" alt="circle dots shape">
            </div>
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

              <div class="col-12 mb-40">
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
        <div class="row justify-content-center mb-75">
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
        <div class="row justify-content-between">
          <EventCard v-for="event in events" :key="event.id" :info="event"/>
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
      subhead: Array,
      head: Array,
      learn: Array
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
        btns:[
          {txt: 'View all courses'},
          {txt: 'Get started for free'},
          {txt: 'Download Our App'},
          {txt: 'Get started now'}
        ],
        accordion:[
          {
            title: 'Multiple Platforms Supported for Teaching & Studying',
            content: 'MaxCoach supports the act of teaching and learning on multiple platforms like online or offline via material downloads. We know things aren’t supposed to be devoured in a short time, you can always access our knowledge base from any device.'
          },
          {
            title: 'Multiple Course Participation at the Same Time',
            content: 'Study for a number of courses at the same time is possible as long as you can afford the fee and time for completing them in the proper time. Learn at your own desired timeline and timetable. Maximum up to 5 course at a time for a learner at MaxCoach.'
          },
          {
            title: 'Track Study Progress & Deliver Prompt Feedback',
            content: 'It’s not just a normal thing to be able to build such a solid online educational system like MaxCoach where your progress is easily tracked and feedback is properly delivered. We promise to keep improving our system for better stability and flexibility.'
          }
        ],
        numbers:[
          {
            number: '1.926',
            subject: 'FINISHED SESSIONS'
          },
          {
            number: '3.092+',
            subject: 'ENROLLED LEARNERS'
          },
          {
            number: '200',
            subject: 'ONLINE INSTRUCTORS'
          },
          {
            number: '100%',
            subject: 'SATISFACTION RATE'
          }
        ],
        courses:[
          {
            img_path: 'stock-full-hd-05-480x298.jpg',
            teacherImg_path: '73ee246daf47502812ccefc84bf02898.jpeg',
            price: 'Free',
            teacher: 'Owen Christ',
            name: 'Personal Finance: Financial Security Thinking & Principles',
            lessons: '2',
            students: '95'
          },
          {
            img_path: 'course-02-480x298.jpg',
            teacherImg_path: '73ee246daf47502812ccefc84bf02898.jpeg',
            price: '$40',
            teacher: 'Blanche Fields',
            name: 'Learning to Write as a Professional Author',
            lessons: '20',
            students: '50'
          },
          {
            img_path: 'stock-full-hd-03-480x298.jpg',
            teacherImg_path: '73ee246daf47502812ccefc84bf02898.jpeg',
            price: 'Free',
            teacher: 'Maggie Strickland',
            name: 'Customer-centric Info-Tech Strategies',
            lessons: '24',
            students: '821'
          },
          {
            img_path: 'stock-full-hd-04-480x298.jpg',
            teacherImg_path: '73ee246daf47502812ccefc84bf02898.jpeg',
            price: '$19',
            teacher: 'Maggie Strickland',
            name: 'Open Programming Courses for Everyone: Python',
            lessons: '17',
            students: '62'
          },
          {
            img_path: 'stock-full-hd-06-480x298.jpg',
            teacherImg_path: '73ee246daf47502812ccefc84bf02898.jpeg',
            price: '$26',
            teacher: 'Blanche Fields',
            name: 'Academic Listening and Note-taking',
            lessons: '14',
            students: '67'
          },
          {
            img_path: 'course-featured-image-01-480x298.jpg',
            teacherImg_path: '73ee246daf47502812ccefc84bf02898.jpeg',
            price: '$39',
            teacher: 'Blanche Fields',
            name: 'Master jQuery in a Short Period of Time',
            lessons: '6',
            students: '51'
          }
        ],
        learnList:[
          {tick: 'Select & customize courses to your preferences'},
          {tick: 'Change the tutor and make arrangements'},
          {tick: 'Participate in events to join others'},
          {tick: 'Get the desired certificate delivered at house'}
        ],
        learnMobile: 'Save lessons for later and revise or write notes at any time and on multiple devices on your way. Never interfere with activities of enjoyment or other precious moments.',
        events:[
          {
            city: 'Texas',
            state: 'US',
            name: 'Storytelling Workshop',
            day: '22',
            month: 'apr',
            btn: 'Get ticket'
          },
          {
            city: 'Hamburg',
            state: 'Germany',
            name: 'International Art Fair 2020',
            day: '23',
            month: 'nov',
            btn: 'Get ticket'
          },
          {
            city: 'Ilinois',
            state: 'US',
            name: 'Consumer Food Safety Education Conference',
            day: '22',
            month: 'jul',
            btn: 'Get ticket'
          },
          {
            city: 'New York',
            state: 'US',
            name: 'Painting Art Contest 2020',
            day: '10',
            month: 'oct',
            btn: 'Get ticket'
          },
          {
            city: 'Ilinois',
            state: 'US',
            name: 'Street Performance: Call for Artists',
            day: '15',
            month: 'dec',
            btn: 'Get ticket'
          },
          {
            city: 'Dubai',
            state: '',
            name: 'How meditation improve your mental health?',
            day: '12',
            month: 'aug',
            btn: 'Get ticket'
          }
        ],
        eventCta:{
          text: 'Excited about our event?',
          cta: 'View all events'
        }
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
      z-index: 2;
    }
    .dots-circle{
      top:300px;
      right:20px;
      z-index: 1;
    }
  } 

  .accordion-temp{
    width:100%;
    height: 380px;
    margin-bottom:100px;
    border: 1px solid black;
  }

  .learn-list{
    @include ul-reset;

    li{
      font-size:.95rem;
      color: $grey_darker;
      font-weight: 300;
      padding-bottom:15px;

      i::before{
        color: $accent;
        margin-right:10px;
        height:100%;
      }
    }
  }

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

  .img-col{
    height:600px;
    margin-bottom:200px;
  }
}


</style>