	let nota1, nota2, nota3
	nota1 = Number(prompt("Primeira nota: "));
	nota2 = Number(prompt("Segunda nota: "));
	nota3 = Number(prompt("Terceira nota: "));
	console.log(`Registros das notas`);
	console.log(`Primeira nota:`+nota1);
	console.log(`Segunda nota:`+nota2);
  console.log(`Terceira nota:`+nota3);
	  if ((nota1+nota2+nota3)/3>=7) {
		console.log('Aprobado');
		alert('Aprobado');
    }
	  else {
		  console.log('Reporbado');
		  alert('Reprobado')}