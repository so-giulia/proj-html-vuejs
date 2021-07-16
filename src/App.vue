<template>
  <div id="app">
    <Header :nav="headNav"/>
    <Main/>
    <Footer/>
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
      }
    }
  }
}
</script>

<style lang="scss">
@import './styles/commons.scss';
@import './styles/vars.scss';


</style>
