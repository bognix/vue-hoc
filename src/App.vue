<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <blog-post-with-mixin :id="1" @click="onClick"/>
    <comments-list-with-mixin/>
    <blog-post :id="1" @click="onClick"/>
    <comments-list/>
  </div>
</template>

<script>
import CommentsList from './components/CommentsList'
import BlogPost from './components/BlogPost'
import withSubscription from './mixins/withSubscription'
import Vue from 'vue'

export default {
  name: 'app',
  components: {
    'blog-post-with-mixin': Vue.extend(withSubscription).extend(BlogPost),
    'blog-post': BlogPost,
    'comments-list-with-mixin': Vue.extend(withSubscription).extend(CommentsList),
    'comments-list': CommentsList
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    onClick(msg) {
      alert(msg)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
