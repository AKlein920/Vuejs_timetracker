<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
  </div>
</template>

<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <router-link tag='h3' to="/">
          <i class="glyphicon glyphicon-time"></i>
          Vue Time Tracker
        </router-link>
        <ul class="nav navbar-nav">
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/time-entries">Time Entries</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
        <sidebar :time="totalTime"></sidebar>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Sidebar from './components/Sidebar';
  import store from './store';

  export default {
    components: {
      sidebar: Sidebar,
    },
    computed: {
      totalTime() {
        return store.state.totalTime;
      },
    },
  };
</script>
