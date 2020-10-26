window.onload = function () {
    let peliculas = [
        {
            numero: "1",
            calificacion: 0,
            titulo: "Mision de rescate",
            duracion: "99M",
            director: "Sam Hargrave",
            anio: "2020",
            imagen: "001.png"
        },
        {
            numero: "2",
            calificacion: 0,
            titulo: "A ciegas",
            duracion: "89M",
            director: "Susanne Bier",
            anio: "2018",
            imagen: "002.png"
        },
        {
            numero: "3",
            calificacion: 0,
            titulo: "Spenser Confidential",
            duracion: "85M",
            director: "Peter Berg",
            anio: "2020",
            imagen: "003.png"
        },
        {
            numero: "4",
            calificacion: 0,
            titulo: "Escuadrón 6",
            duracion: "83M",
            director: "Michael Bay",
            anio: "2019",
            imagen: "004.png"
        },
        {
            numero: "5",
            calificacion: 0,
            titulo: "Misterio a bordo",
            duracion: "73M",
            director: "Kyle Newacheck",
            anio: "2019",
            imagen: "005.png"
        },
        {
            numero: "6",
            calificacion: 0,
            titulo: "El irlandés",
            duracion: "64M",
            director: "Martin Scorsese",
            anio: "2019",
            imagen: "006.png"
        },
        {
            numero: "7",
            calificacion: 0,
            titulo: "Triple frontera",
            duracion: "63M",
            director: "J. C. Chandor",
            anio: "2019",
            imagen: "007.png"
        },
        {
            numero: "8",
            calificacion: 0,
            titulo: "La otra Missy",
            duracion: "59M",
            director: "Happy Madison",
            anio: "2020",
            imagen: "008.png"
        },
        {
            numero: "9",
            calificacion: 0,
            titulo: "El hoyo",
            duracion: "56M",
            director: "Galder Gaztelu-Urrutia",
            anio: "2019",
            imagen: "009.png"
        },
        {
            numero: "10",
            calificacion: 0,
            titulo: "La cita perfecta",
            duracion: "48M",
            director: "Chris Nelson",
            anio: "2019",
            imagen: "010.png"
        }
    ];

    let $base = document.querySelector('#base');

    let ordenado = [];
    

    function cargarPeliculas() {
        let contador=10;
        for (let info of peliculas) {

            let nodoSeparador = document.createElement('br');

            let nodoPelicula = document.createElement('div');
            nodoPelicula.classList.add('card', 'bg-dark','col-sm-12');
            nodoPelicula.classList.add('card-tittle');
            nodoPelicula.classList.add('card-text');

            let nodoPeliculaCardBody = document.createElement('div');
            nodoPeliculaCardBody.classList.add('card-body');
            
            let nodoPeliculaRanking = document.createElement('h4');
            nodoPeliculaRanking.textContent = ("Ranking "+ (contador));
            nodoPeliculaRanking.classList.add('text-primary');

            let nodoPeliculaTitulo = document.createElement('h5');
            nodoPeliculaTitulo.textContent = ((info['numero'])+'.'+(info['titulo'])+'('+(info['duracion'])+')');
            nodoPeliculaTitulo.classList.add('text-danger');

            let nodoPeliculaImagen = document.createElement('img');
            nodoPeliculaImagen.classList.add('card-img-top');
            nodoPeliculaImagen.setAttribute('src', ('img/'+(info['imagen'])));

            let nodoPeliculaParrafo = document.createElement('p');
            nodoPeliculaParrafo.textContent = 'Director: ' + info['director']+' / '+'Año: '+ info['anio'];
            nodoPeliculaParrafo.classList.add('text-white');

            let nodoPeliculaBoton = document.createElement('button');
            nodoPeliculaBoton.classList.add('btn', 'btn-danger');
            nodoPeliculaBoton.textContent = '+ Punto';
            nodoPeliculaBoton.setAttribute('marcador', info['numero']);
            nodoPeliculaBoton.addEventListener('click', agregarPuntuacion);

            let nodoPeliculaBr = document.createElement('br');

            nodoPeliculaCardBody.appendChild(nodoPeliculaImagen);
            nodoPeliculaCardBody.appendChild(nodoPeliculaRanking);
            nodoPeliculaCardBody.appendChild(nodoPeliculaTitulo);
            nodoPeliculaCardBody.appendChild(nodoPeliculaParrafo);
            nodoPeliculaCardBody.appendChild(nodoPeliculaBoton);

            nodoPelicula.appendChild(nodoPeliculaCardBody);

            base.appendChild(nodoPelicula);
            base.appendChild(nodoSeparador);
            contador--;
        }
    }

    function agregarPuntuacion(){
        base.innerHTML = '';
        id = parseInt((this.getAttribute('marcador')-1)) ;
        console.log("nombre "+ peliculas[id].titulo);
        peliculas[id].calificacion +=1; 
        console.log("puntuacion "+ peliculas[id].calificacion);
        peliculas = peliculas.sort((a, b) => {
            if (a.calificacion < b.calificacion){
                return 1;
            }else if (a.calificacion > b.calificacion){
                return -1;
            }else{
                return 0;
            }
        });
        cargarPeliculas();
	}

    cargarPeliculas();
}