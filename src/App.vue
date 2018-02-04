<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <blog-post :id="1"/>
    <comments-list/>
  </div>
</template>

<script>
import CommentsList from './components/CommentsList'
import BlogPost from './components/BlogPost'
import withSubscription from './hocs/withSubscription'
import DataSource from './store/source'

const BlogPostWithSubscription = withSubscription(BlogPost, (DataSource, props) => {
  return DataSource.getBlogPost(props.id)
})
const CommentsListWithSubscription = withSubscription(CommentsList, (DataSource) => DataSource.getComments())

export default {
  name: 'app',
  components: {
    'blog-post': BlogPostWithSubscription,
    'comments-list': CommentsListWithSubscription
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
