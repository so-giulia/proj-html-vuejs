<template>
  <div id="app">
    <Header :nav="headNav"/>

    <Main :subhead="subheadings" :head="headings"/>

    <Footer :address="companyAddress"
    :explore="exploreNav" :informations="infoNav"
    :icons="social"/>
  </div>
</template>

<script>
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
      ]
    }
  }
}
</script>

<style lang="scss">
@import './styles/commons.scss';
@import './styles/vars.scss';


</style>
