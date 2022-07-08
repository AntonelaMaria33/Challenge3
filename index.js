const http  = require ("http");                               


const host  = "localhost";
const port  = 8000;


class Usuario {
	constructor(id, firstName, lastName, age, country) {
	this.id = id;
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.country = country;
	}
}


const usuarios = [
	new Usuario(1, "Miranda", "Ontivero", 27, "Alemania"),
	new Usuario(2, "Noah", "Lopez", 30, "Peru"),
	new Usuario(3, "Abigail", "Vidal", 21, "Argentina"),
	new Usuario(4, "Maximo", "Zamora", 43, "Africa"),
	new Usuario(5, "Sofia", "Herrera", 57, "Puerto Rico"),
];


const jsonUsers = JSON.stringify(usuarios)


const requestListener = function(req, res) {                
res.setHeader("Content-Type", "application/json");
	switch (req.url) {
	case "/usuarios":
res.writeHead(200);
res.end(jsonUsers);
	break;
	default:
res.writeHead(404);
res.end(JSON.stringify({statusCode : 404, message: "La url no existe"}));
	}
}


const server = http.createServer(requestListener);          
	server.listen(port, host, () => {
	console.log(`El servidor se esta ejecutando en http://${host}:${port}`)
	});
