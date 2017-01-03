var input = "abcdEFGHijkl";

var diese = "#".repeat(input.length-4);
var sliced = input.slice(input.length-4);
var fini = diese+sliced;


console.log(fini);