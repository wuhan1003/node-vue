<template>
    <div>
        <p>vuex测试页面</p>
        <p>{{count}}</p>
    </div>    
</template>
<script>
    export default {
        name:'vueX',
        data(){
            return{

            }
        },
        created(){
          //  this.$store.commit('add',10);  //10为参数
          //  this.$store.commit({type:'add',params:10});
          this.$store.dispatch({type:'add',params:10});
        },
        computed:{
            count(){
                return this.$store.state.count;
            }
        }
    }
</script>