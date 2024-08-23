//The path.normalize() method resolves the specified path, fixing '..','\\\\' etc.
let path=require('path');
let x=path.normalize('/class/Day5/.././.filesystem1.js')
console.log(x);

console.log(path.isAbsolute(x));

