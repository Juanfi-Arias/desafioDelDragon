let goku, vegeta; //variables que guardaran el objeto del personaje
let jugador, maquina; //variables para el personaje que escogio el jugador y para el rival que usara la maquina

fetch('https://dragonball-api.com/api/characters/1')
    .then(respuesta => respuesta.json())
    .then(datos =>{
        //el codigo fuera del .then se ejecuta al instante, lo que esta dentro se ejecuta medio segundo o un segundo despues cuando la informacion llega del servidor
        goku = datos;
        console.log(goku);
        document.getElementById("imgGoku").src = goku.image;
        document.getElementById("nameGoku").textContent = goku.name;
        document.getElementById("kiGoku").textContent = `Ki: ${goku.ki}`;
    })

fetch('https://dragonball-api.com/api/characters/2')
    .then(respuesta => respuesta.json())
    .then(datos =>{
        //el codigo fuera del .then se ejecuta al instante, lo que esta dentro se ejecuta medio segundo o un segundo despues cuando la informacion llega del servidor
        vegeta = datos;
        console.log(vegeta);
        document.getElementById("imgVegeta").src = vegeta.image;
        document.getElementById("nameVegeta").textContent = vegeta.name;
        document.getElementById("kiVegeta").textContent = `Ki: ${vegeta.ki}`;
    })

    //el codigo fuera del .then se ejecuta al instante, lo que esta dentro se ejecuta medio segundo o un segundo despues cuando la informacion llega del servidor!!!!
    //memorizalo!!!!!!!