function ejercicioUno(a,b) {
    return a + b
};

function ejercicioDos() {
   let pr;
   let a = parseInt(prompt("Ingresa Nota 1"));
   let b = parseInt(prompt("Ingresa Nota 2"));
   let c = parseInt(prompt("Ingresa Nota 3"));
   let d = parseInt(prompt("Ingresa Nota 4"));

   pr = (a + b + c + d)/4;

   return {
      Nota_1: a,
      Nota_2: b,
      Nota_3: c,
      Nota_4: d,
      Promedio: pr,
    };
}

function ejercicioTres() {
   let area;
   let base = parseInt(prompt("Ingresa la base del rectangulo"));
   let altura = parseInt(prompt("Ingresa la altura del rectangulo"));

   area = base * altura;
   return "El area del rectangulo es: " + area;
};

function ejercicioCuatro() {
   let area;
   let base = parseInt(prompt("Ingresa la base del triangulo"));
   let altura = parseInt(prompt("Ingresa la altura del triangulo"));

   area = (base * altura) / 2;
   return "El area del triangulo es: " + area;
};

function ejercicioCinco() {
   let area;
   const pi = 3.14;
   let radio = parseInt(prompt("Ingresa el radio de la circunferencia"));

   area = pi * Math.pow(radio, 2);
   return "El area de la circunferencia es: " + area.toFixed(2);
}

function ejercicioSeis() {
   let sueldo_semanal;
   const sueldo_hora = 15;
   let horas_trabajadas = parseInt(prompt("Ingresa las horas trabajadas"));

   sueldo_semanal = horas_trabajadas * sueldo_hora;
   return {
      Horas_Trabajadas_en_la_Semana: horas_trabajadas,
      Sueldo_a_Pagar_por_Hora: sueldo_hora,
      Sueldo_a_Pagar_por_Semana: sueldo_semanal,
    };
}

function ejercicioSiete() {
   let pedido;
   const pulgada = 0.0254;
   let metros_tela = parseInt(prompt("Ingresa: metros de tela por comprar"));

   pedido = metros_tela * pulgada;
   return "Debes realizar un pedido de " + pedido + " pulgadas";
}

function ejercicioOcho() {
    let dolares;
    const compra_dolar = 4.09;
    let soles = parseInt(prompt("ingresa la cantidad de soles"));

    dolares = soles / compra_dolar;
    return "con " + soles + " soles puedes comprar " + dolares.toFixed(2) + " dolares"; 
}

function ejercicioNueve() {
   let edad, n;
   const anio_actual = 2021;

   n = 0;
	while (n < 2) {
		let nacimiento = parseInt(prompt("Ingresa el año de tu nacimiento"));
      edad = anio_actual - nacimiento;
      document.write("Tu edad es: " + edad + "<br/>");
		++n;
	}
};

function ejercicioDiez() {
   let nombre_1 = prompt("Ingresa el primer nombre");
   let nombre_2 = prompt("Ingresa el segundo nombre");
   let nombre_3 = prompt("Ingresa el tercer nombre");
   let edad_1 = parseInt(prompt("Ingresa la edad de " + nombre_1));
   let edad_2 = parseInt(prompt("Ingresa la edad de " + nombre_2));
   let edad_3 = parseInt(prompt("Ingresa la edad de " + nombre_3));
   let el_menor, wildcard, name_wildcard;

   if (edad_1 < edad_2) {
      wildcard = edad_1;
      name_wildcard = nombre_1;
   } else {
      wildcard = edad_2;
      name_wildcard = nombre_2;
   }

   if (wildcard < edad_3) {
      el_menor = name_wildcard + " es el menor, su edad es " + wildcard;
   } else {
      el_menor = nombre_3 + " es el menor, su edad es " + edad_3;
   }

   return el_menor;
}

function ejercicioOnce() {
	let nombre = prompt("Ingresa tu nombre");
   let time_work = prompt("Ingresa años trabajados");
   let mensaje;

   switch (time_work) {
      case "1":
         mensaje = nombre + ", tu bono es de: $ 100, por " + time_work + " año de trabajo";
      break;

      case "2":
         mensaje = nombre + ", tu bono es de: $ 200, por " + time_work + " año de trabajo";
      break;

      case "3":
         mensaje = nombre + ", tu bono es de: $ 300, por " + time_work + " año de trabajo";
      break;

      case "4":
         mensaje = nombre + ", tu bono es de: $ 400, por " + time_work + " año de trabajo";
      break;

      case "5":
         mensaje = nombre + ", tu bono es de: $ 500, por " + time_work + " año de trabajo";
      break;

      default:
         mensaje = nombre + ", tu bono es de: $ 1000, por " + time_work + " año de trabajo";
      break;
   }

   return mensaje;
}

function ejercicioDoce() {
	let a, b, n;
	let nombre = prompt("Ingresa tu nombre");
   let salario = 1500;
	let bono = 0.1;

	n = 1;
	while (n < 7) {
		a = salario;
		salario = a * bono + salario;
      b = a * bono;
      document.write(nombre + ", tu bono en el año " + n + " es: " + b.toFixed(0) + " y tu sueldo es: " + salario.toFixed(0) + "<br/>");
		n = n+1;
	}
}

function ejercicioTrece() {
    let aprobados, reprobados;
    let n = parseInt(prompt("Ingresacantidad de alumnos"));

    aprobados = 0;
    reprobadosm = 0;

    while (n > 0) {
        let nombre = prompt("ingresa tu nota");
        let nota = prompt(nombre + ", ingresa tu nota");

        if (nota < 11) {
            ++reprobados;
        }
        else {
            ++aprobados;
        }
        --n
    }
     document.write("La cantidad de aprobados: " + aprobados + "<br/>");
     document.write("La cantidad de reprobados es: " +  reprobados);
}

//console.log (ejercicioUno(6, 9));
//console.log (ejercicioDos());
//console.log (ejercicioTres());
//console.log(ejercicioCuatro());
//console.log(ejercicioCinco());
//console.log(ejercicioSeis());
//console.log(ejercicioSiete());
//console.log (ejercicoOcho());
//console.log(ejercicioNueve());
//console.log (ejercicioDiez());
//console.log (ejercicioOnce());
//console.log(ejercicioDoce())
console.log(ejercicioTrece());