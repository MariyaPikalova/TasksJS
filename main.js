
// GET NEW ARRAY
const names = ['Oleg', 'Co', 'Ilia', 'Yan', 'Genya'];

let filtered = names.filter(i => i.length >= 4);

console.log(filtered);

let resultsOfNames = Object.keys(filtered).reduce((out, key) =>{
  out.push({
	    name: filtered[key],
	    length: filtered[key].length
        });
 	  return out;
	}, []);

console.log(resultsOfNames);


// GET TO SUM

const valuesToSum= [{price: 12}, {price: 50}, {price: 13}];

let pricePull = valuesToSum.map((a,b) => a.price);


console.log(pricePull);

let total = pricePull.reduce((a, b) => a + b);

 console.log(total);