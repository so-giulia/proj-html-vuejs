<template>
  <div class="col-6 event-card rounded">
    <div class="row">
      <!-- text side start -->
      <div class="col-8">
        <!-- event location -->
        <div class="location-wrap d-flex align-items-center">
          <!-- TO ADD: real icon -->
          <i class="fas fa-map-marker-alt"></i>
          <span class="city">{{info.city}},</span><span>{{info.state}}</span>
        </div>
        
        <!-- event title -->
        <h4>{{info.name}}</h4>
      </div>
      <!-- text side end -->

      <!-- date side start -->
      <div class="col-4">
        <div class="date-wrap d-flex flex-column justify-content-start text-center">
          <p class="day">{{info.day}}</p>
          <p class="month">{{info.month}}</p>
          <div class="button-small rounded">
            <a href="#">
              {{info.btn}}
            </a>
          </div>
        </div>
      </div>
      <!-- date side end -->
    </div>
  </div>
</template>

<script>
export default {
    name: 'EventCard',
    props:{
      info: Object
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/commons.scss';
@import '../styles/vars.scss';

.event-card{
  height: 162px;
  width:48.5% !important;
  margin-bottom:40px;
  background-color: $grey_light;
  padding:30px !important;
  cursor: pointer;
  position:relative;
  overflow: hidden;

  transition: .4s ease;

  .location-wrap{
    @include txt-details;
    margin-bottom:15px;

    i{
      font-size:.80rem;
      margin-right:10px;
    }

    .city{
      margin-right:5px;
    }
  }

  .date-wrap{
    padding-left:40px;

    .day{
      @include accent;
      line-height: 2.5rem;
    }

    .month{
      @include caption-uppercase;
      font-weight: 600;
      margin:5px 0;
    }

    .button-small{
      @include button;
      width:100%;
      padding:5px 0;

      a{
        @include a-reset;
        color: $light;
        font-size: .85rem;
        font-weight: 500;
      }
    }
  }

  h4{
    @include h4-titles;
  }

  &:hover{
    box-shadow: $material;
    background-color: $light;

    transition: .4s ease;

    &::before{
      content:'';
      position:absolute;
      top:0;
      left:0;
      bottom:0;
      height: 162px;
      width:3px;
      background-color: $accent;

      transition: .4s ease;
    }
  }
}
</style>