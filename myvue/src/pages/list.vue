<template>
    <div>
        <g-header />
        <List :items ="listData" />
        <!-- <ul class="list">
            <li v-for="item in listData">
                <router-link tag="a" :to="item.path">{{item.title}}</router-link>                
            </li>
        </ul> -->
    </div>
</template>
<script>
import GHeader from '@/components/header';
import List from '@/components/list';
export default {
    name : 'PageList',
    components:{
        [GHeader.name]:GHeader,
        List,
    },
    data(){
        return{
            listData:[
                {
                    title:'vuex',
                    link:'/vuex'
                },{
                    title:'nodejs请求post/get',
                    link:'/nodereq'
                } 
            ]
        }
    },
    created(){
      
    
    }
}
</script>
<style lang="scss" scoped>
    .list{
        width:100%;display:flex; flex-direction:column;
    }
</style>



