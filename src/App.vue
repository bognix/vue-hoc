<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <with-subscription :selectData="(DataSource, props) => DataSource.getBlogPost(props.id)" :id="1">
      <blog-post slot-scope="withSubscriptionScope" :id="withSubscriptionScope.id" :data="withSubscriptionScope.data" @click="onClick"/>
    </with-subscription>
    <with-subscription :selectData="(DataSource) => DataSource.getComments()">
      <comments-list slot-scope="withSubscriptionScope" :data="withSubscriptionScope.data"/>
    </with-subscription>
    <with-subscription :selectData="() => 'Data is passed to scoped slot'">
      <p slot-scope="withSubscriptionScope">{{withSubscriptionScope.data}}</p>
    </with-subscription>
  </div>
</template>

<script>
import CommentsList from './components/CommentsList'
import BlogPost from './components/BlogPost'
import WithSubscription from './components/WithSubscription'

export default {
  name: 'app',
  components: {
    'blog-post': BlogPost,
    'comments-list': CommentsList,
    'with-subscription': WithSubscription
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
