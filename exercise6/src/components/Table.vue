<template>

  <table>
    <thead>
      <tr>
        <th v-for="col in cols" :key="col.key" @click="updateSorting(col.key)" :data-cy="'sort-by-'+col.key">
          {{ col.label }}
          <i class="sort asc" :class="{active: sorting.key === col.key && sorting.direction === 'asc'}">&#9650;</i>
          <i class="sort desc" :class="{active: sorting.key === col.key && sorting.direction === 'desc'}">&#9660;</i>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in rows" :key="row.id">
        <td v-for="(col, colIndex) in cols" :key="col.key" :data-cy="'cell-'+(rowIndex+1)+'-'+(colIndex+1)">{{ row[col.key] }}</td>
      </tr>
    </tbody>
  </table>

</template>

<script>

  export default {
    name: 'Table',
    emits: ['update:sorting'],
    props: {
      rows: {type: Array, default: ()=>[]},
      cols: {type: Array, default: ()=>[]},
      sorting: {type: Object, default: ()=>({key: 'none', direction: 'none'})},
    },
    methods: {
      updateSorting(key) {
        const sorting = {...this.sorting};
        if (sorting.key === key) {
          if (sorting.direction === 'none') {
            sorting.direction = 'asc';
          } else if (sorting.direction === 'asc') {
            sorting.direction = 'desc';
          } else {
            sorting.direction = 'none';
            sorting.key = 'none';
          }
        } else {
          sorting.key = key;
          sorting.direction = 'asc';
        }
        this.$emit('update:sorting', sorting);
      },
    },
  };

</script>

<style scoped lang="scss">

  table{
    margin:auto;
    border-spacing: 0;

    thead tr {
      background-color: #eee;

      th {
        padding: 2px 25px 2px 10px;
        position: relative;
        cursor: pointer;
        user-select: none;
        min-width: 160px;

        .sort {
          position:absolute;
          font-size: 12px;
          margin-left: 5px;
          color: #ccc;

          &.asc{
            top: 0;
          }
          &.desc{
            top: 8px;
          }
          &.active {
            color: #000;
          }
        }
      }
    }
    tbody tr {
      background-color: #f8f8f8;

      &:nth-child(even) {
        background-color: #fff;
      }
    }
  }

</style>
