// ¿Cómo sabemos que necesitamos un bucle aquí? 
// R: porque tenemos una secuencia de datos en aumento
// con condiciones

//¿Cuál es el punto de partida del bucle?
// R: Km 3

//¿Cuándo debe detenerse el bucle?
// R: km 10

//¿Cómo sabrá parar?
//R: con un nuevo bucle en el cual se le indicara el mensaje que debe dar al parar

//¿Cuál es el incremento para cada iteración del bucle?
 // el incremento es (km += 3) este indica que va de 3 en 3.

//¿Qué variables necesitamos?
// variable km

for (var km = 3; km < 10 ; km += 3)
       console.log("¡Al km", km, "debes dar caramelo!")

        for (var km = 10; km <= 10; km +=10)
            console.log("Al km", km, "debes dejar de dar caramelo!")
