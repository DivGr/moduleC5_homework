const jsonString = `
{
  "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;


const data = JSON.parse(jsonString);

const list = data.list;
	
const result = {list: []};
const objList = new Object();
	    
list.forEach(function(elem) {
	objList = elem;
  result.list.push(objList);
});
console.log(result);