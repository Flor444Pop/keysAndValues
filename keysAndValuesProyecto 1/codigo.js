let prueba =({ f:1, b:2,c:3, a:4,e:8,d:10 });
let keysAndValues1=({a:1,b:2,c:3});
let keysAndValues2=({a:'Apple',b:'Microsoft',c:'Google'});
let KeysAndValues3=({key1:true,key2:false,key3:undefined});

function mifuncion(objeto){
	//ordenar las llaves del obheto alfabeticamente 
	let llaves=Object.keys(objeto).sort();
	//Crear un array vacio para guardar los valores
	let valores=[];
	//Recorrer el array de llaves
	for(let i=0; i<llaves.length; i++){
		//agregar los valores al array de valores
	valores.push(objeto[llaves[i]]);}
//Retornar un array con los valores de las llaves y los valores
return[llaves,valores];
}

console.log(mifuncion(prueba));
console.log(mifuncion(keysAndValues1));
console.log(mifuncion(keysAndValues2));
console.log(mifuncion(KeysAndValues3));