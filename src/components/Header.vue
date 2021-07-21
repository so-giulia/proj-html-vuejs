<template>
  <header>    
    <div class="container">
      <div class="row head-wrap align-items-center">
        <!-- logo -->
        <div class="col-3">
          <a href="#">
            <img id="logo" src="../img/dark-logo.png" alt="Max Coach logo">
          </a>
        </div>

        <!-- nav -->
        <div class="col-6">
          <nav>
            <ul class="d-flex align-items-center"
            v-for="ul in data" :key="ul.id">
              <li v-for="li in ul.headNav" :key="li.id">
                <a href="#" class="d-flex align-items-center">
                  {{li.txt}} <i class="fas fa-chevron-down dropdown-ico"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <!-- account / input -->
        <div class="col-3">
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
  </header>
</template>

<script>
export default {
    name: 'Header',
    props:{
      data: Array
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
}
</style>