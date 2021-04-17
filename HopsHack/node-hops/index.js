const a = "https://www.pexels.com/photo/two-yellow-labrador-retriever-puppies-1108099/"

let split1 = a.split("/");
console.log(split1);
console.log(split1[split1.length-2]);
const split2 = split1[split1.length - 2].split('-');
const number = split2[split2.length-1];

const template1 = `https://images.pexels.com/photos/${number}/pexels-photo-${number}.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`;
console.log(template1);
