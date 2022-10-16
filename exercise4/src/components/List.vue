<template>
  <ul>
    <li v-for="item in sortedData" :key="item._id">
      <slot v-bind:item="item"></slot>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'List',
    props: {
      data: {type: Array, default: ()=>[]},
      sorting: {type: Function, default: ()=>1},
      filtering: {type: Function, default: ()=>true},
    },
    computed: {
      filteredData() {
        return this.data.filter(this.filtering);
      },
      sortedData() {
        return this.filteredData.slice().sort(this.sorting);
      },
    },
  };
</script>

<style scoped lang="scss">

</style>
