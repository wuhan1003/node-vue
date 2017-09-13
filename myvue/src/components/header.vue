<template>
    <header>
        <h2>{{title}}</h2>
        <a href="javascript:;" @click="back" v-if="isBack">返回</a>
    </header>
</template>

<script>
export default {
    name:'g-header',
    data(){
        return {
           // title : '首页'
        }
    },
    props:{
        title:{
            type:String,
            default:'首页'
        },
        isBack:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        back(){
            history.back()
        }
    }
}
</script>

<style lang="scss" scoped>
    header{
        background-color:#f5f5f5;height:44px;
        &>h2{font-size:16px; line-height:44px; color:#333;font-style:normal; font-weight:normal;}    
        & > a{display: block; height:44px; width:44px; position:absolute; left:0; top:0;display:flex; justify-content:center; align-items:center;}   
    }
    
</style>
