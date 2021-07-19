<template>
  <div id="app">
    <Header :nav="headNav"/>

    <Main :subhead="subheadings" :head="headings" :learn="learnSection"/>

    <Footer :address="companyAddress"
    :explore="exploreNav" :informations="infoNav"
    :icons="social"/>
  </div>
</template>

<script>
// —————————————————— PROJECT —————————————————— //
//search for 'TO ADD:' at the end in every component

//MILESTONES
//1. sections (no slider) !!!INIT!!!  ----  + back to top
//2. jumbo + accordion + side menu component
//3. slider + interactions

import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components:{
    Header,
    Main,
    Footer
  },
  data(){
    return{
      headNav:[
        {txt: 'Home'},
        {txt: 'Pages'},
        {txt: 'Courses'},
        {txt: 'Features'},
        {txt: 'Blog'},
        {txt: 'Shop'}
      ],
      jumbo:{
        txt: 'Complete Your Dreams in JavaS Programming',
        desc: 'Learn any coding program in distance and for a reasonable fee. You don\'t have to struggle alone, you\'ve got our assistance and help.',
        cta: 'Download free E-book'
      },
      subheadings:[
        {brandname: 'MAXCOACH'},
        {h3: 'START LEARNING CODING LANGUAGES'},
        {h3: 'DREAM WITH'},
        {h3: 'CHOOSE WHERE YOU\'D LIKE TO BEGIN'},
        {h3: 'WHY HESITATE TO REGISTER?'},
        {h3: 'WHAT ARE YOU LOOKING FOR?'},
        {h3: 'GET IN CONTACT NOW'},
        {h3: 'PEOPLE ARE PRAISING'},
      ],
      headings:[
        {
          txt:'Build Your Dream',
          accent: 'Today'
        },
        {
          txt:'Construct A',
          accent: 'Stunning',
          txt2: 'Career Perspective'
        },
        {
          txt: 'Latest Featured',
          accent: 'Courses'
        },
        {
          txt: 'Learn At Your Own',
          accent: 'Pace'
        },
        {
          txt: 'Learn on your',
          accent: 'mobile',
          txt2: 'anytime!'
        },
        {
          txt: 'Upcoming',
          accent: 'Events'
        },
        {
          txt: 'What make they',
          accent: 'love us?'
        },
        {
          txt: 'Start today for getting',
          accent: 'Online Certification'
        },
        {
          txt: 'You can be your own guiding star with our help!'
        }
      ],
      exploreNav:[
        {txt: 'Start here'},
        {txt: 'Blog'},
        {txt: 'About us'},
        {txt: 'Success story'},
        {txt: 'Courses'},
        {txt: 'Contact us'}
      ],
      infoNav:[
        {txt: 'Membership'},
        {txt: 'Purchase guide'},
        {txt: 'Privacy policy'},
        {txt: 'Terms of service'}
      ],
      companyAddress:{
        address: '382 NE 191st St # 87349 Miami, FL 33179-3899',
        phone: '+1 (305) 547-9909',
        openings: '(9am - 5pm EST, Monday - Friday)',
        mail: 'support@maxcoach.com'
      },
      social:[
          {class: 'fa-facebook-square'},
          {class: 'fa-twitter'},
          {class: 'fa-instagram'},
          {class: 'fa-linkedin'}
      ],

      //test
      learnSection:[
        {
          heading: 'Learn At Your Own',
          accent: 'Pace',
          h3: 'WHY HESITATE TO REGISTER?',

          list:[
            {tick: 'Select & customize courses to your preferences'},
            {tick: 'Change the tutor and make arrangements'},
            {tick: 'Participate in events to join others'},
            {tick: 'Get the desired certificate delivered at house'}
          ],

          cta:'Get started for free'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import './styles/commons.scss';
@import './styles/vars.scss';


</style>
