<template>
  <div><h2>Home Page</h2>
    <input text="seacrh" placeholder="Serach">
    <button @click="serachData">seacrh</button>
    <table border>
      <tr>
        <th>ID</th>
        <th>Body</th>
        <th>Title</th>
      </tr>
      <tr  v-for="item in getApiData" :key="item">
      <td><router-link :to="{name:'PostComp',params:{useritem:item}}">{{ item.id }}</router-link></td>
      <td>{{ item.body }}</td>
      <td>{{ item.title }}</td>
    </tr>
    </table>
  </div>
</template>
<script>
import axios from 'axios'
import { RouterLink } from 'vue-router';
export default{
  name:'omeComp',
  componnets:{
    RouterLink
  },
  data() {
    return {
      getApiData: [],
      userIdForSerach: ''
    }
  },
    created() {
      this.getData();
    },
    methods:{
      getData() {
        console.log(';;;;')
        this.getApiData = []
        axios.get(' https://dummyjson.com/posts')
        .then((result)=>{
            this.getApiData = result.data.posts
            console.log('getApiData',this.getApiData)
        })
        .catch((err)=>{
          console.log('err',err)
        })
      },
      serachData() {
        this.getApiData = []
        let obj = {
          id : this.userIdForSerach
        }
        axios.get('https://dummyjson.com/posts/search',obj
        )
        .then((result)=>{
            this.getApiData = result.data.posts
        })
        .catch((err)=>{
          console.log('err',err)
        })
      }
    }
  }
</script>
