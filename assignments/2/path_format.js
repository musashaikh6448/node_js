//the path.format() method formats a path object into a path string.

let path = require("path");

let obj = {
  directory: "C:UsersadminDesktopNode.jsassignmentsassign2",
  basename: "path_extname.js",
};
console.log( path.format(obj));

