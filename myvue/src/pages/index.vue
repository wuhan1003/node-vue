<template>
  <div class="hello">
      <p>{{msg}}</p>
      <p>{{count}}</p>
       <TextInput /> 
      <router-link to="/home">首页</router-link>
  </div>
</template>

<script>
import TextInput from '@/components/text';
export default {
  name: 'hello',
  components:{ TextInput },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  computed:{
    count(){
      return this.$store.state.count;
    }
  },
  mounted(){
    console.log(this.$store.state);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
