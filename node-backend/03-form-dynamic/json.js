const data  = {name:'une', is:'girl'};

const jsonData = JSON.stringify(data);
console.log("json : ", jsonData);

console.log("js obj : ", JSON.parse(jsonData));