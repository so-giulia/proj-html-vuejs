<template>
  <main>
    <!-- ———————— JUMBO START ———————— -->
    <section id="jumbotron">
      <Jumbo/>
    </section>
    <!-- ———————— JUMBO END ———————— -->

    <!-- ———————— FEATURES START ———————— -->
    <section id="features">
      <div class="container">
        <!-- title -->
        <div class="row">
          <div class="col-12">
            <Subheading/>
          </div>

          <div class="col-12">
            <Heading/>
          </div>
        </div>

        <!-- cards -->
        <div class="row">
          <FeatCard/>
        </div>
      </div>
    </section>
    <!-- ———————— FEATURES END ———————— -->

    <!-- ———————— DETAILS START ———————— -->
    <section id="details">
      <!-- Details: 50% 50% layout -->
      <div class="container">
        <div class="row"></div>
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
        <div class="row">
          <div class="col-12">
            <Subheading/>
          </div>
          
          <div class="col-12">
            <Heading/>
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
        <div class="row"></div>

        <!-- Learn: 50% 50% 2 -->
         <div class="row"></div>
      </div>
    </section>
    <!-- ———————— LEARN END ———————— -->

    <!-- ———————— EVENTS START ———————— -->
    <section id="events">
      <div class="container">
        <!-- title -->
        <div class="row">
          <div class="col-12">
            <Subheading/>
          </div>
          
          <div class="col-12">
            <Heading/>
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
        <div class="row">
          <div class="col-12">
            <Subheading/>
          </div>
          
          <div class="col-12">
            <Heading/>
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
import Heading from './Heading.vue'
import Subheading from './Subheading.vue'
import FeatCard from './FeatCard.vue'
import CourseCard from './CourseCard.vue'
import EventCard from './EventCard.vue'

export default {
    name: 'Main',
    components:{
      Jumbo,
      Subheading,
      Heading,
      FeatCard,
      CourseCard,
      EventCard
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

</style>