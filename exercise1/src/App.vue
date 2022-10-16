<template>

  <h2>Exercise 1</h2>
  <h4>Statement</h4>
  <div class="statement">
    <p>
      Please update the template and logic to ensure you don't get any VueJS warnings in the console, or build warnings.
    </p>
    <p>
      If anything else looks odd to you, feel free to update it for it to match best practices!
    </p>
  </div>
  <h4>Solution</h4>
  <div class="solution">

    <div class="person-wrapper">
      <PersonCard v-for="person in people" :person="person" class="person-card" :personClick="alertBox"/>
    </div>
    <div class="summary">{{people.length}} persons cards displayed</div>

  </div>

</template>

<script>

  import PersonCard from './components/PersonCard';
  import people from './assets/people.json';

  export default {
    name: 'App',
    components: {PersonCard},
    data() {
      return {
        people: people,
      };
    },
    methods: {
      alertBox(person) {
        alert('You clicked on ' + person.name);
      },
    },
  };

</script>

<style lang="scss">

  .person-card {
    background: #e4e4e4;
    min-width: 100px;
    float: left;
    width: 300px;
    margin: 10px;
  }

  .summary {
    text-align: center;
    clear: both;
  }

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
