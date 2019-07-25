"use strict";

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate, turpis et pharetra finibus, risus lorem gravida mi, nec posuere erat enim placerat arcu.";

let isPassed = /me/.test(text);

let obj = /er/.exec(text);

console.log(isPassed);
console.log(obj);
