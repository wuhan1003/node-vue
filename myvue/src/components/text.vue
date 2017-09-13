<template>
    <div>
        <input type="text" name="" v-model="value" :placeholder = "value" />
        <p>{{ value }}</p>
    </div>
</template>
<script>
export default {
  name:'I',
  data(){
      return {
         value :this.$store.state.count,
      }
  },
  created(){
      console.log( this.$store )
  },
  props:{
    //   value:{
    //       default:'请输入内容！1',
    //       type:String,
    //       validator:function( value ){
    //           const reg = /\d/gi;
    //           return reg.test( value );
    //       }
    //   }
  }
}
</script>
