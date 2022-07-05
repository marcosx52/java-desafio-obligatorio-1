//CALCULADORA DE PROMEDIOS DE NOTAS

//SALUDO
function saludar () {
    alert('Bienvenidas/os a  la calculadora de promedios del curso de JAVASCRIPT');
}
saludar();

//FUNCION DE PROMEDIO
function promediar (exam1, exam2, exam3, exam4) {
    const resultado = (exam1 + exam2 + exam3 ) / 3;
    return resultado;
}

const valor1 = Number(prompt('Ingrese la nota de su primer examen')); 
const valor2 = Number(prompt('Ingrese la nota de su segundo examen'));
const valor3 = Number(prompt('Ingrese la nota de su tercer examen'));

const resultadoFinal = promediar (valor1, valor2, valor3); 

//MENSAJE PARA PROMEDIO FINAL
alert('Tu promedio de examenes es de ' + resultadoFinal);
console.log('Tu promedio de examenes es de ' + resultadoFinal);

//CONDICIONAL PARA SABER SI APROBO O DESAPROBO EL CURSO
if (resultadoFinal >= 7) {
    alert('FELICITACIONES !!!! Tu promedio te permite avanzar al curso de REACT!!!!'); 
} else if (resultadoFinal <= 6) {
    alert('Tu promedio no alcanza para finalizar el curso, te esperamos para reveer en que haz fallado!!!!');
}

