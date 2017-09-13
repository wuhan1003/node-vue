<template>
  <div>
    <p>{{this.$store.state.count}}</p>
    <p>{{arr}}</p>
    <p>{{num}}</p>
    <button @click="add">增加</button>
    <button @click ="filter">筛选</button>
    <button @click = "testAdd">测试</button>
  </div>
</template>
<script>
import Vue from 'vue';
let bus = new Vue();
export default {


    
    name:'home',
    data(){
        return{
            msg:'这是首页！',
            arr:[4,3,5,3,5,8],
            num:0
        }
    },
    created(){
        this.$on('aa',n => {
          this.num = n++;
        });
        this.sortArr( this.arr );
        const str = 'asdfaseadsfasdsdf';
        console.log(this.maxLetter( str ));
        console.log(this.maxDiff( this.arr ));
    },
    mounted(){
       // console.log(bus.$store);       
    },
    methods:{
        add(){
           //this.$store.commit({type:'add',amount:10});     
            this.$store.dispatch({type:'add',amount:1});       
        },
        filter(){
            this.arr = this.arr.reduce(( total, item ) => {
              return total + item ;
            });            
        },
        testAdd(){
            this.$emit('aa',10);
            //this.num = bus.$emit('add',n);
        },
        //数字数组从大到小排序
        sortArr( arr ){
            let newArr = [], len = arr.length, index ;   
            for( let i = 0; i < len; i++ ){
                const max = Math.max( ...arr );
                index = arr.indexOf(max);
                newArr.push(max);
                arr.splice(index,1);
            } 
            this.arr = newArr;
            return newArr;  
        },

        //字符串中出现在次数最多的字符
        maxLetter( str ){
           let arr = [],item = [],maxL = [];
           for(let i of str ){
                if( item.indexOf( i ) < 0 ){
                    item.push( i );
                    let reg = new RegExp(i,'gi');
                    arr.push( str.match( reg ) );
                }
           }
            for( let i of arr ){
                if( i.length > maxL.length ){
                    maxL = i;
                }
            }
            console.log(maxL)
            return maxL[0] ;
        },
        //返回数组中最大差值
        maxDiff( arr ){
            //数组中最大值；
            const max = Math.max.apply( null , arr );
            //数组中最小值
            const min = Math.min(...arr);
            return max - min ;
        }
    },
    
    // beforeUpdate( state ){
        
    //     console.log( state ) ;
    //     return false;
    // }
}
</script>

