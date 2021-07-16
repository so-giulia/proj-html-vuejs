<template>
  <footer>
    <div class="container">
      <div class="foot-wrap d-flex flex-column">
          <!-- footer upper start -->
          <div class="footer-upper row justify-content-between align-items-start">
            <!-- Address -->
            <div class="col-6">
              <h4>Address</h4>

              <ul>
                <li>{{address.address}}</li>
                <li>
                  {{address.phone}}
                  <span>{{address.openings}}</span>
                </li>
                <li>{{address.mail}}</li>
              </ul>

              <div class="social-container d-flex align-items-center justify-content-start">
                <a href="#" v-for="platform in social" :key="platform.id">
                  <i class="fab" :class="platform.class"></i>
                </a>
              </div>
            </div>

            <!-- Explore -->
            <div class="col-3">
              <h4>Explore</h4>

              <div class="row">
                <!-- explore nav part 1 -->
                <div class="col-5 col-spacing">
                    <nav>
                      <ul>
                        <li v-for="link in explore.slice(0,3)" :key="link.id">
                          <a href="#">
                            {{link.txt}}
                          </a>
                        </li>
                      </ul>
                    </nav>
                </div>
                
                <!-- explore nav part 2 -->
                <div class="col-6">
                    <nav>
                      <ul>
                        <li v-for="link in explore.slice(3,6)" :key="link.id">
                          <a href="#">
                            {{link.txt}}
                          </a>
                        </li>
                      </ul>
                    </nav>
                </div>
              </div>
              
            </div>

            <!-- Information -->
            <div class="col-3">
              <h4>information</h4>

              <ul>
                <li v-for="info in informations" :key="info.id">
                   <a href="#">{{info.txt}}</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- footer upper end -->


          <!-- footer lower start -->
          <div class="footer-lower row justify-content-center align-items-center">
            <div class="col-12">
              <p class="copy text-center">
                <!-- TO ADD: dynamic year -->
                &copy; 2020 Maxcoach. All Rights Reserved.
              </p>
            </div>
          </div>
          <!-- footer lower end -->
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'Footer',
    props:{
      address: Array,
      explore: Array,
      informations: Array
    },
    data(){
      return{
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

<style lang="scss" scoped>
@import '../styles/commons.scss';
@import '../styles/vars.scss';

footer{
  padding:70px 0 55px 0;
  background-color: $light;

  .footer-upper{
    margin-bottom:85px;

    .col-spacing{
      margin-right:15px;
    }

    .social-container{
      margin-top:35px;

        i{
        font-size:1.5rem;
        padding-right:30px;
        color: lighten($grey_darker, 10%);
        transition: color .5s ease;

          &:hover{
            color:$accent;
            transition: color .5s ease;
          }
        }
    }

    h4{
      margin-bottom:30px;
      font-size: 1.15rem;
    }

    ul{
      @include ul-reset;

      li{
        color: darken($grey_darker, 15%);
        font-weight: 300;
        font-size:0.85rem;
        margin-bottom:15px;

        a{
          @include a-reset;
          color: darken($grey_darker, 15%);
          font-weight: 300;
          transition: color .5s ease;

          &:active, &:focus, &:visited{
            color: darken($grey_darker, 15%);
            transition: color 1s ease;
          }

          &:hover{
            color: $accent;
          }
        }
      }
    }
  
  }
  .copy{
    color: lighten($grey_darker, 10%);
    font-size:.85rem;
  }
}
</style>