export default {
  sortByAge(a, b) {
    return a.age - b.age;
  },
  filterByAge(ageMin, ageMax) {
    return (item)=>(item.age >= ageMin && item.age <= ageMax);
  },
};
