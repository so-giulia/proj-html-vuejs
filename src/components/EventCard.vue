<template>
  <div class="col-6 test rounded">
    <div class="row">
      <!-- text side start -->
      <div class="col-8">
        <!-- event location -->
        <div class="location-wrap d-flex">
          <i class="fas fa-map-marker-alt"></i>
          <span>{{info.city}}, </span><span>{{info.state}}</span>
        </div>
        
        <!-- event title -->
        <h4>{{info.name}}</h4>
      </div>
      <!-- text side end -->

      <!-- date side start -->
      <div class="col-4">
        <div class="date-wrap d-flex flex-column text-center">
          <p class="day">{{info.day}}</p>
          <p class="month">{{info.month}}</p>
          <div class="button">
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
      info: Array
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/commons.scss';
@import '../styles/vars.scss';

.test{
  height: 162px;
  border:1px solid black;
  width:48.5% !important;
  margin-bottom:40px;
  background-color: $grey_light;

  .location-wrap{
    @include txt-details;
  }

  h4{
    @include h4-titles;
  }
}
</style>