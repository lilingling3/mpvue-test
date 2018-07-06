<template>
  <div class="counter-warp">
    <p>该页面用于演示vuex的辅助函数使用方法</p>
    <p>watch vuex rootCount: {{ rootCount }}</p>
    <p>watch vuex count {{ count }}</p>
    <p>watch vuex countAlias {{ countAlias }}</p>
    <p>watch vuex countAlias2 {{ countAlias2 }}</p>
    <p>watch data str: {{ str }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="incrementRootCount">+root</button>
      <button @click="decrement">-</button>
    </p>
    <input placeholder="引用型的name" class="counter-input" type="text" v-model="dataRef.name" @input="handleInputName(dataRef.name,'name')"/>
    <input placeholder="引用型的age" class="counter-input" type="text" v-model="dataRef.age" @input="handleInputAge(dataRef.age,'age')"/>
    <input placeholder="name" class="counter-input" type="text" v-model="name" @input="handleInputNameVal(name)"/>
    <input placeholder="age" class="counter-input" type="text" v-model="age" @input="handleInputAgeVal(age)"/>
    <button @click="submit">提交</button>
    <a href="/pages/index/main" class="home">去往首页22</a>
  </div>
</template>

<script>
import { stringUtil } from '@src/base/utils';
import {createNamespacedHelpers, mapState as mapRootState, mapMutations as mapRootMutations} from 'vuex';
const { mapState, mapActions, mapMutations } = createNamespacedHelpers('counter');
// const { mapActions, mapMutations } = createNamespacedHelpers('todayTask');

export default {
  data: {
    dataRef:{
      name:'',
      age:'',
    },
    name:'zzk',
    age:22,
    foo:{
      name:'',
      age:'',
    }
  },
  computed: {
    ...mapRootState({rootCount:'count'}),
    ...mapState(['count']),
    ...mapState({countAlias:'count'}),
    ...mapState({countAlias2:state=>{
      return state.count;
    }})
  },
  methods: {
    ...mapMutations(['increment','decrement']),
    ...mapRootMutations({incrementRootCount:'increment'}),
    handleInputName(name,key){
      this.dataRef.name = name+':name';
    },
    handleInputAge(inputAge,key){
      if(parseInt(inputAge)>100)this.dataRef.age=100;
    },
    handleInputNameVal(name){
      console.log(name);
    },
    handleInputAgeVal(age){
      console.log(age);
    },
    submit(){
      const {name,age} = this;
      const {name:name2,age:age2} = this.dataRef;
      console.log('submit',name,age);
      console.log('submit2',name2,age2);
    },
  },
  watch:{
    // 'dataRef.age':{
    //   handler(cur, old){
    //     this.foo.age = cur;
    //   },
    //   immediate:true,
    //   deep:true,
    // },
  }
};
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
.counter-input{
   border: 1px solid blue;
}
</style>
