<template>

  <h2>Exercise 5</h2>
  <h4>Statement</h4>
  <div class="statement">
    <p>
      Please implement the 2 empty functions from <span class="code">helpers/helpers.js</span>: <span class="code">getValueAtPath</span> and
      <span class="code">groupByKey</span>.
    </p>
    <p>
      Check their usage in <span class="code">App.js</span> to understand the specs.
    </p>
  </div>
  <h4>Solution</h4>
  <div class="solution">

    <h5>Gender</h5>
    <p v-if="genderGroups">Male: {{ parseInt(genderGroups.male * 100) }}%, Female: {{ parseInt(genderGroups.female * 100) }}%</p>

    <h5>Table</h5>
    <table>
      <thead>
        <tr>
          <th v-for="col in columns" :key="col">{{ col.split('.').slice(-1)[0] }}</th>
        </tr>
      </thead>
      <tr v-for="item in people" :key="item._id">
        <th v-for="col in columns" :key="col">{{ getValueAtPath(item, col) }}</th>
      </tr>
    </table>
  </div>

</template>

<script>

  import helpers from './helpers/helpers';

  export default {
    data() {
      return {
        people: [],
        columns: ['age', 'name', 'gender', 'preferences.fruit', 'preferences.pet'],
      };
    },
    computed: {
      genderGroups() {
        return this.groupByKey(this.people, 'gender');
      },
    },
    methods: {
      ...helpers,
    },
    created() {
      fetch('https://run.mocky.io/v3/8aabb2ec-21c0-42c0-815c-0d748b775734')
        .then((response)=>response.json())
        .then((people)=>this.people = people);
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
