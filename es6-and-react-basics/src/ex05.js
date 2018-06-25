import { greet } from './ex04';
import { greet as sayHello } from './ex04';

import { AUTHOR_NAME, AUTHOR_EMAIL} from './ex04';

import xyz from './ex04';

xyz();

console.log('Name = ', AUTHOR_NAME);
console.log('Email = ', AUTHOR_EMAIL);

console.log(greet());
console.log(greet('Vinod'));
console.log(greet('Vinod', 'Bangalore'));

console.log(sayHello());
console.log(sayHello('Vinod'));
console.log(sayHello('Vinod', 'Bangalore'));
