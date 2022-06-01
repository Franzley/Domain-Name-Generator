let createDomain = (arr1, arr2, arr3) => {
  let domainNames = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      for (let k = 0; k < arr3.length; k++) {
        domainNames.push(arr1[i] + arr2[j] + arr3[k] + ".com");
      }
    }
  }
  return domainNames;
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
console.log(createDomain(pronoun, adj, noun));
