var x = parseInt(prompt("Тэгш өнцөгтийн уртын хэмжээг өгнө үү"));
var y = parseInt(prompt("Тэгш өнцөгтийн өргөний хэмжээг өгнө үү"));
var P; var S; var D;
 
console.log("input : " + x + " " + y );

P = (x + y) * 2; 
S = x * y;
D = (x**2 + y**2) ** (1/2);

console.log("Периметр Талбай Диагноль")
console.log("Output : " + P + " " + S + " " + " " + D);


