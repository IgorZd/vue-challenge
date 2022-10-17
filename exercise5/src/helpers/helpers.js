export default {
  // group an array by key and returns an object containing percentage for each group
  // ex: groupByKey([{color: 'blue'}, {color: 'green'}, {color: 'blue'}, {color: 'blue'}], 'color')  =>  {blue: 0.75, green: 0.25}
  groupByKey(array, key) {
    // TODO: implement logic here
    const arrayOfUniqueValues = [];
    const countOfItems = array.length;
    const arrayOfValues = array.map((item)=>(item[key]));
    const valuesOfKey = arrayOfValues.filter(((element) => {
      const isDuplicate = arrayOfUniqueValues.includes(element);
      if (!isDuplicate) {
        arrayOfUniqueValues.push(element);
        return true;
      }

      return false;
    }));
    const statistics = valuesOfKey.reduce((a, v) => ({...a, [v]: arrayOfValues.filter((el)=> el === v).length / countOfItems}), {});
    return statistics;
  },
  // get the value of an object at a given dotted path
  // ex: getValueAtPath({my: {dotted: {path: 123}}}, 'my.dotted.path')  =>  123
  getValueAtPath(obj, path, defaultValue='none') {
    // TODO: implement logic here
    const getPath = () => {
      if (typeof path !== 'string') {
        return path;
      }
      const result = [];
      const pathList = path.split('.');
      pathList.forEach((item) => {
        item.split(/\[([^}]+)\]/g).forEach((key)=> {
          if (key.length > 0) {
            result.push(key);
          }
        });
      });

      return result;
    };

    const pathArr = getPath();
    let current = obj;

    for (let i = 0; i < pathArr.length; i++) {
      if (!current[pathArr[i]]) {
        return defaultValue;
      }

      current = current[pathArr[i]];
    }

    return current;
  },
};
