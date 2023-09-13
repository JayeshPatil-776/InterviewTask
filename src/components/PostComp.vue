<template>
    <div class="hello">
      <H1>Post page</H1>
      <table>
        <tr>
          <th>Title</th>
          <th>Body</th>
        </tr>
        <tr>
          <td>{{ receiveQueryItems.title }}</td>
          <td>{{ receiveQueryItems.body }}</td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PostComp',
    receiveQueryItems:'',
    created(){
      if(this.$route.query && this.$route.query.item) {
        this.receiveQueryItems = []
        this.receiveQueryItems = this.$route.query.item
      }
    }
  }
  </script>
    <style scoped>
  </style>
  