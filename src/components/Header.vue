<template>
  <header>  
    <!-- upper header start -->
    <div class="container">
      <div class="row head-wrap align-items-center">
        <!-- logo -->
        <div class="col-3" @mouseover="stopMenu">
          <a href="#">
            <img id="logo" src="../img/dark-logo.png" alt="Max Coach logo">
          </a>
        </div>

        <!-- nav -->
        <div class="col-6">
          <nav>
            <ul class="d-flex align-items-center"
            v-for="ul in data" :key="ul.id">
              <li v-for="(li, index) in ul.headNav" :key="index" @mouseover="showMenu(index)">
                <a href="#" class="d-flex align-items-center">
                  {{li.txt}} <i class="fas fa-chevron-down dropdown-ico"></i>
                </a>
              </li>
            </ul>
                 
          </nav>
        </div>

        <!-- account / input -->
        <div class="col-3" @mouseover="stopMenu">
          <div class="actions-wrap d-flex align-items-center">
            <!-- icons -->
            <i class="fas fa-shopping-cart shopping-ico"></i>
            <i class="far fa-user-circle"></i>

            <!-- search -->
            <form action="">
              <input type="search" placeholder="Search...">
              <button>
                <i class="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- upper header end -->

    <!-- megamenu with img start -->
    <div class="container megamenu-container" :class="[{'show-menu' : megamenu}, {'hide-menu' : !megamenu}]">
        <div class="row megamenu">
            <!-- nav 1 start -->
            <div class="col-3">
                <nav>
                  <ul v-for="ul in data" :key="ul.id">
                    <li v-for="li in ul.home.slice(0, 9)" :key="li.id">
                      <a href="#">
                        {{li.link}}

                        <!-- hot label start -->
                        <span class="label hot text-uppercase rounded" v-if="(li.status) == 'hot'">
                          hot
                        </span>
                        <!-- hot label end -->
                      </a>
                    </li>
                  </ul>
                </nav>
            </div>
            <!-- nav 1 end -->

            <!-- nav 2 start -->
            <div class="col-3">
                <nav>
                  <ul v-for="ul in data" :key="ul.id">
                    <li v-for="li in ul.home.slice(9, 16)" :key="li.id">
                      <a href="#">
                        {{li.link}}

                        <!-- new label start -->
                        <span class="label new text-uppercase rounded" v-if="(li.status) == 'new'">
                          new
                        </span>
                        <!-- new label end -->
                      </a>
                    </li>
                  </ul>
                </nav>
            </div>
            <!-- nav 2 end -->

            <!-- image col start -->
            <div class="col-6">
                <div class="banner-wrap">
                  <img src="../img/homepages-mega-menu-image-alt.jpg" alt="MaxCoach banner">
                </div>
              </div>
            </div>
    </div>
    <!-- megamenu with img end -->

    <!-- pages menu start -->
    <div class="container megamenu-container menus" :class="[{'show-menu' : pages}, {'hide-menu' : !pages}]">
      <div class="row menus pages" @mouseover="pagesHideOthers">
        <ul class="col-12" v-for="ul in data" :key="ul.id">
          <li v-for="link in ul.pages" :key="link.id">
            <a href="#">
              {{link.link}}
            </a>
          </li>
        </ul>  
      </div>
    </div>
    <!-- pages menu end -->

    <!-- courses menu start -->
    <div class="container megamenu-container menus" :class="[{'show-menu' : courses}, {'hide-menu' : !courses}]">
      <div class="row menus courses" @mouseover="coursesHideOthers">
        <ul class="col-12" v-for="ul in data" :key="ul.id">
          <li v-for="link in ul.courses" :key="link.id">
            <a href="#">
              {{link.link}}
            </a>
          </li>
        </ul>  
      </div>
    </div>
    <!-- courses menu end -->

    <!-- features menu start -->
    <div class="container megamenu-container menus" :class="[{'show-menu' : features}, {'hide-menu' : !features}]">
      <div class="row menus features" @mouseover="featuresHideOthers">
        <ul class="col-12" v-for="ul in data" :key="ul.id">
          <li v-for="link in ul.features" :key="link.id">
            <a href="#">
              {{link.link}}
            </a>
          </li>
        </ul>  
      </div>
    </div>
    <!-- features menu end -->

    <!-- blog menu start -->
    <div class="container megamenu-container menus" :class="[{'show-menu' : blog}, {'hide-menu' : !blog}]">
      <div class="row menus blog" @mouseover="blogHideOthers">
        <ul class="col-12" v-for="ul in data" :key="ul.id">
          <li v-for="link in ul.blog" :key="link.id">
            <a href="#">
              {{link.link}}
            </a>
          </li>
        </ul>  
      </div>
    </div>
    <!-- blog menu end -->

    <!-- shop menu start -->
    <div class="container megamenu-container menus" :class="[{'show-menu' : shop}, {'hide-menu' : !shop}]">
      <div class="row menus shop" @mouseover="shopHideOthers">
        <ul class="col-12" v-for="ul in data" :key="ul.id">
          <li v-for="link in ul.shop" :key="link.id">
            <a href="#">
              {{link.link}}
            </a>
          </li>
        </ul>  
      </div>
    </div>
    <!-- shop menu end -->
    

    <!-- DEAD SPOT START -->
    <div class="container-fluid dead-spot" @mouseover="stopMenu"></div>
    <!-- DEAD SPOT END -->
  </header>
</template>

<script>
export default {
    name: 'Header',
    props:{
      data: Array
    },
    data(){
      return{
        counter:0,
        megamenu: false,
        pages: false,
        courses: false,
        features: false,
        blog: false,
        shop: false
      }
    },
    methods:{
      showMenu(i){
        this.counter = i;

        if(i === 0){
          this.megamenu = true;
          this.pages = false;
          this.courses = false;
          this.features = false;
          this.blog = false;
          this.shop = false;
        }else{
          this.megamenu = false;
        }

        if(i === 1){
          this.pages = true;
          this.megamenu = false;
          this.courses = false;
          this.features = false;
          this.blog = false;
          this.shop = false;
        }else{
          this.pages = false;
        }

        if(i === 2){
          this.courses = true;

          this.megamenu = false;
          this.pages = false;
          this.features = false;
          this.blog = false;
          this.shop = false;
        }else{
          this.courses = false;
        }

        if(i === 3){
          this.features = true;
          
          this.megamenu = false;
          this.pages = false;
          this.courses = false;
          this.blog = false;
          this.shop = false;
        }else{
          this.features = false;
        }

        if(i === 4){
          this.blog = true;
          
          this.megamenu = false;
          this.pages = false;
          this.courses = false;
          this.features = false;
          this.shop = false;
        }else{
          this.blog = false;
        }

        if(i === 5){
          this.shop = true;
          
          this.megamenu = false;
          this.pages = false;
          this.courses = false;
          this.features = false;
          this.blog = false;
        }else{
          this.shop = false;
        }
      },
      stopMenu(){
        this.megamenu = false;
        this.pages = false;
        this.courses = false;
        this.features = false;
        this.blog = false;
        this.shop = false;
      },
      pagesHideOthers(){
        this.courses = false;
        this.features = false;
        this.blog = false;
        this.shop = false;
      },
      coursesHideOthers(){
        this.pages = false;
        this.features = false;
        this.blog = false;
        this.shop = false;
      },
      featuresHideOthers(){
        this.pages = false;
        this.courses = false;
        this.blog = false;
        this.shop = false;
      },
      blogHideOthers(){
        this.pages = false;
        this.features = false;
        this.courses = false;
        this.shop = false;
      },
      shopHideOthers(){
        this.pages = false;
        this.features = false;
        this.courses = false;
        this.blog = false;
      }
    }
}

</script>

<style lang="scss" scoped>
@import '../styles/commons.scss';
@import '../styles/vars.scss';

header{
  z-index:100;
  background-color: lighten($grey_dark, 3%);
  
  .head-wrap{
    height:80px;
    color:$brand;
    position: relative;
    z-index: 100;

    #logo{
      width:160px;
    }

    ul{
      @include ul-reset;

      li{
        margin:0 16px;
        position: relative;

        a{
          color:$brand;
          transition: .4s ease;
          @include a-reset;

          &:visited,
          &:focus, &:active{
            color:$brand;
            transition: .4s ease;
          }

          &:hover{
            color: $accent;
            transition: .4s ease;
          }

          &::after{
            content:'';
            position: absolute;
            bottom: -1.5px;
            right: 0;
            left: auto;
            width: 0;
            height: 1px;
            background-color: $brand;
            transition: .35s;
            cursor: pointer;
            transition: .4s ease;
          }

          &:hover::after{
            content:'';
            position: absolute;
            bottom: -1.5px;
            left: 0;
            right: auto;
            width: 100%;
            height: 1px;
            background-color: $accent;
            transition: .35s;
            cursor: pointer;
            transition: .4s ease;
          }

          .dropdown-ico::before{
            font-size: 0.5rem;
            line-height: 1rem;
            vertical-align: middle;
            margin-left:13px;
          }
        }

      }
    }

    .actions-wrap{
      i{
        margin:0 10px;
        font-size:1.2rem;
        color:$dark;
      }

      .shopping-ico{
        position: relative;

        &::after{
          content:'0';
          width: 15px;
          height: 15px;
          background-color: $accent;
          border-radius: 50%;

          position: absolute;
          top: -8px;
          right: -8px;
          
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          font-weight: 400;
          line-height: 16px;
          text-align: center;
          color: $light;
        }
      }

      form{
        position:relative;
        margin:0 10px;

        input, button{
          min-height: 50px;
        }
        input{
          padding-left:20px;
          border:none;
          background-color: $light;
          border-radius: 5px;
          border:1px solid rgba($light, 1);
          transition: border .4s ease;

          &::placeholder{
            font-size:1rem;
            font-weight: 300;
            color:$grey_dark;
          }
          &:focus{
            border:1px solid rgba($accent, 1);
            transition: border .4s ease;
            outline:none;
          }
        }
        button{
          position:absolute;
          top:0;
          right:0;
          border:none;
          background-color:transparent;
          padding-right:10px;
        
          i{
            font-size: 1rem;

            &::before{
              color:$accent;
            }
          }  
        }
      }
    }
  }
  
  .megamenu-container{
    position:relative;
    z-index: 100000;

    .megamenu{
      width:100%;
      padding:40px 30px;
      background-color: $light;
      position:absolute;
      top: 0;
      left:0;
      overflow: hidden;

      &::after{
        content:'';
        position:absolute;
        bottom:0;
        left:0;
        width:100%;
        height:4px;
        background: $accent;
      }

      ul{
        @include ul-reset;

        li{
          @include section-paragraph;
          font-size:.9rem;
          margin-bottom:13px;

          a{
            @include a-reset;
            color:$grey_darker;
            transition: .4s ease;

            &:hover{
              color:$accent;
              transition: .4s ease;
            }

            .label{
              padding:2px 10px;
              margin-left:5px;
              vertical-align: middle;
              font-size:10px;
              font-weight: 600;
              letter-spacing: 1.5px;
              color: $light;
            }

            .hot{
              background: linear-gradient(45deg, $pink 19%, $red 81%);
            }
            .new{
              background-color: $accent;
            }
          }
        }
      }

      .banner-wrap{
        overflow: hidden;
        border-radius: .35rem;

        img{
          width:100%;
        }
      }
    }
    
    .menus{
      width:225px;
      padding:40px 30px;
      background-color: $light;
      overflow: hidden;

      position: absolute;

      &::after{
        content:'';
        position:absolute;
        bottom:0;
        left:0;
        width:100%;
        height:4px;
        background: $accent;
      }

      ul{
        @include ul-reset;

        li{
          @include section-paragraph;
          font-size:.9rem;
          margin-bottom:13px;

          a{
            @include a-reset;
            color:$grey_darker;
            transition: .4s ease;

            &:hover{
              color:$accent;
              transition: .4s ease;
            }
          }
        }
      }
    }

    .pages{
      left: 410px;
    }
    .courses{
      left: 510px;
      z-index: 10;
    }
    .features{
      left: 610px;
      z-index: 20;
    }
    .blog{
      left: 710px;
      z-index: 30;
    }
    .shop{
      left: 810px;
      z-index: 40;
    }
  }

  

  .hide-menu{
    transform: translateY(20px);
    opacity:0;
    transition: .4s ease;
    transition-delay: .25s;
  }
  .show-menu{
    transform: translateY(0);
    opacity:1;
    transition: .4s ease;
    transition-delay: .25s;
  }

  .dead-spot{
    position: absolute;
    top:0;
    left:0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background-color: transparent;
  }

}
</style>