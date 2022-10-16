<template>

  <h2>Exercise 2</h2>
  <h4>Statement</h4>
  <div class="statement">
    <p>
      The code behind this page should display a paginated list of
      people sorted by name. It contains common coding mistakes.
    </p>
    <p>
      Please update the files <span class="code">App.vue</span> and
      <span class="code">components/List.vue</span> in order to get
      rid of the errors (console and eslint), and make sure the
      solution works properly.
    </p>
  </div>
  <h4>Solution</h4>
  <div class="solution">
    <List data="people" options="options"></List>
  </div>

</template>

<script>

  import List from './components/List';

  export default {
    name: 'App',
    components: {List},
    data: ()=>{
      return {
        people: [],
        options: {pagination: {limit: 10, offset: 0}},
      };
    },
    created() {
      fetch('https://run.mocky.io/v3/8aabb2ec-21c0-42c0-815c-0d748b775734')
        .then(function(response) {
          response.json();
        })
        .then(function(data) {
          this.people = data;
        });
    },
  };

</script>

<style lang="scss">

.statement, .solution {
  border: 1px solid #dedede;
  padding: 0 0.5em;
  min-height: 40px;

  .code {
    color: #434343;
    background-color: #f9f9f9;
    padding: 0 5px;
  }
}

</style>
