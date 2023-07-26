import guardrail from './9-try';
import divideFunction from './8-try';

console.log(guardrail(() => { return divideFunction(8, 2)}));
console.log(guardrail(() => { return divideFunction(8, 0)}));
