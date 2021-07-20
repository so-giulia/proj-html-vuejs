<template>
  <!-- <div class="my-accordion rounded" :class="accordionClasses">
      <div class="accordion-top rounded-top d-flex align-items-center justify-content-between"
      @click="toggleAccordion">
          {{info.title}}
          <i class="fas" :class="iconClasses"></i>
      </div>

      <div class="accordion-content rounded-bottom">
          <p>{{info.content}}</p>
      </div>
  </div> -->

<div class="wrap">
    <div class="my-accordion rounded" :class="[{open : item.active}, {closed : !item.active}]"
    v-for="(item, index) in customAccordion" :key="index">

      <div class="accordion-top rounded-top d-flex align-items-center justify-content-between"
      @click="showContent(index)">
          {{item.header}}
          <i class="fas"
          :class="(item.active) ? 'fa-minus-circle' : 'fa-plus-circle'"></i>
      </div>

      <div class="accordion-content">
          <p>{{item.body}}</p>
      </div>
    </div>
</div>
  
</template>

<script>
export default {
    name:'Accordion',
    props:{
        info: Array
    },
    data(){
        return{
            accordionItems:[]
        }
    },
    computed:{
        customAccordion(){
            this.accordionItems = this.info.map((item) =>{
                return{
                    header: item.title,
                    body: item.content,
                    active: false
                }
            });
            
            return this.accordionItems;
            
        }
    },
    methods:{
        showContent(index){
            this.accordionItems[index].active = !this.accordionItems[index].active;

            this.accordionItems.forEach((item, i) => {
                if(i !== index){
                    item.active = false;
                }
            });
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

    i{
        font-size:1.4rem;
    }
}

    .open{  

        .accordion-top{
            width:100%;
            padding:18px 23px;
            font-weight: 600;
            font-size:1.1rem;

            background-color: rgba($accent, 70%);
            color:$light;
        
            cursor: pointer;

            border-radius: 0.25rem 0.25rem 0 0 !important;
            transition: border-radius .2s ease;
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

    .closed{
        .accordion-top{
            width:100%;
            padding:18px 23px;
            font-weight: 600;
            font-size:1.1rem;

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