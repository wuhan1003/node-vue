<template>
    <section>
        <g-header title = "node请求" :isBack = "true" />
        <section class="container">
            <ul class="login">
                <li><input type="text" placeholder="请输入用户名" v-model="username" @input = "getName"  /></li>
                <li><input type="password" placeholder="请输入密码" v-model="password" @input = "getPsd" /></li>
                <li><button @click = "login">登录</button></li>
            </ul>
        </section>
    </section>    
</template>
<script>
import GHeader from '@/components/header';
export default {
  name:'NodeRequest',
  components:{
      [GHeader.name]:GHeader,
  },
  data(){
      return {
          username : '',
          password : ''
      }
  },
  methods:{
      getName(){
        //   console.log( this.userName );
      },
      getPsd(){
        //   console.log( this.userPsd );
      },
      login(){
        //   const _this = this;
          this.$http.post('/api/login',{
              username : this.username,
              password : this.password
          }).then((data) =>{
              console.log(data.data);
          }).catch((err)=>{
              console.log(err)
          })
        //  console.log(this.userName,this.userPsd)
      }
      
  },
  created(){
     // console.log(this.userName)
  },
  
//   computed:{
//       userName(){
//           return userName;
//       }
//   }
}
</script>
<style lang="scss" scoped>
    .login{
        width:100%;padding:0 1rem; 
        & li{ border-bottom:1px solid #e1e1e1;
            &>input{ width:100%; border:none; outline:none;padding:1rem 0.3rem;}
        }
        & li:last-child{border-bottom:none; padding:1rem 0;
            &>button{width:80%; line-height:32px; background-color:#ff7125; color:#fff; border-radius:5px; border:none; outline:none;}
        }
    }
</style>

