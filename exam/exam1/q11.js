//Q11)write a node js program for finding  the operating system's default directory for temporary files

const os= require('os')

const tmpdir = os.tmpdir('q11.js');
console.log(tmpdir);
