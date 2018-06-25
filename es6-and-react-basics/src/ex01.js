let name = 'Vinod';
let email = 'vinod@vinod.co';

let p1 = { name, email };
// spread operator {...p1} allows us to copy property/value from an object into another
let p2 = {...p1, email: 'vinod@kwit.com', city: 'Bangalore'};

console.log(p1);
console.log(p2);
console.log('p1===p2 is', p1===p2);

let nums1 = [10, 20, 30];
let nums2 = [...nums1, 12, 34, 56];

console.log(nums1);
console.log(nums2);

// destucturing allows us to extract properties of an object into individual variables

let prd1 = { id: 101, pname: 'Mobile phone', unitPrice: 15000, category: 'Electronics'};

let {pname, category, discount} = prd1;
console.log('pname = %s', pname);
console.log('category = %s', category);
console.log('discount = %s', discount);