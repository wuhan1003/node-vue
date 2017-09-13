import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        count:0,
    },


    /**
     * mutations 与 actions最大的区别在于，actions可以是异步请求函数，mutations只能是同步函数
     * actions 提交的是mutation，而不是直接的更改状态
     */
    mutations:{
        //接受commit传过来的参数n
        add(state,n){   
        //    console.log( n );     
           state.count += n.params;
        }
    },
    actions:{
        add( { commit,state },params ){
            // console.log(state);
            // console.log( params )
           commit(params)
        }
    }
});
export default store;