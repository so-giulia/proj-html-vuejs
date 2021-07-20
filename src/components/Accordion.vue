<template>
  <div class="my-accordion rounded" :class="accordionClasses">

      <div class="accordion-top rounded-top d-flex align-items-center justify-content-between"
      @click="toggleAccordion">
          {{info.title}}
          <i class="fas" :class="iconClasses"></i>
      </div>

      <div class="accordion-content rounded-bottom">
          <p>{{info.content}}</p>
      </div>

  </div>
</template>

<script>
export default {
    name:'Accordion',
    props:{
        info: Object
    },
    data(){
        return{
            open: false,
            icon: false
        }
    },
    computed:{
        accordionClasses(){
            return {
                'is-closed': this.open
            }
        },
        iconClasses(){
            return{
                'fa-minus-circle': !this.icon,
                'fa-plus-circle': this.icon
            }
        }
    },
    methods:{
        toggleAccordion(){
            this.open = !this.open;
            this.icon = !this.icon;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/commons.scss';
@import '../styles/vars.scss';

.my-accordion{
    box-shadow: $material_light;
    margin-bottom:30px;

    .accordion-top{
        width:100%;
        background-color: rgba($accent, 70%);
        color:$light;
        padding:18px 23px;
        font-weight: 600;
        font-size:1.1rem;
        cursor: pointer;

        transition: border-radius .2s ease;


        i{
            font-size:1.4rem;
        }
    }

    .accordion-content{
        overflow: hidden;
        padding:30px 50px 30px 33px;

        height: 200px;
        transition: height .3s ease;

        p{
            @include section-paragraph;
            display: block;
        }
    }

    
}

.is-closed{

    .accordion-top{
        background: $light;
        color: rgba($dark, 65%);
        cursor: pointer;

        border-radius: 0.25rem !important;
        transition: border-radius .2s ease;

        &:hover{
            background-color: rgba($accent, 70%);
            color:$light;
        }
    }

    .accordion-content{
        overflow: hidden;
        padding:0;

        height: 0;
        transition: height .3s ease;

        p{
            display: none;
        }
    }

}


</style>