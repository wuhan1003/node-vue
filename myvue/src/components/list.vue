<template>
    <section class="component-list">
        <ul>
            <router-link  v-for="(item,key) in items" :key = "key" tag="li" :to = "item.link">{{item.title}}</router-link>
        </ul>
    </section>
</template>
<script>
    export default {
        name:'List',
        props:{
            items:{
                type:Object | Array,
                require:true,
            }
        }
    }
</script>
<style lang="scss" scoped>
    .component-list{
        width:100%; padding:1rem; box-sizing:border-box;
        & li{padding:1rem 0;border-bottom:1px solid #e1e1e1; color:#333;list-style:none; text-align:left;}
    }
</style>
