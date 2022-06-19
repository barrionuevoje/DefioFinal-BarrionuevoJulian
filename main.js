
//Clase para el formate de directorio y compra de peliculas. 
//En este programa, el usuario carga la peliucla que desea, el sistema trabaja dependiendo si el usuario coloco bien la fecha o si el precio es el adecuado para proseguir. 


class Pelicula{
    constructor(pedido){
        this.pelicula;
        this.nombre = pedido.nombre;
        this.anio = pedido.anio;
        this.director = pedido.director;
        this.precio = pedido.precio;
        this.comprado = pedido.comprado;
        this.promocion = pedido.promocion;
        this.resultado = pedido.resultado;
        this.valor = pedido.valor
        
        
        
    }

  

    
    //Funcion que determina lo que hace el programa
    seleccionarPelicula(){
        
        
        //Calcula el precio de la pelicula a partir de 500 sumandole IVA, si se pone un numero inferior el sistema simplemente pedira un valor mas alto.
        if(this.precio >= 500){
            this.valor = this.precio * 1.21
            this.resultado = "El valor de la pelicula con IVA es: " + this.valor
        }else{
            this.resultado = "Debe asignar un valor mas alto."
        }
        //El sistema determina si el se compro la pelicula o no
        if(this.comprado.toUpperCase() == "SI"){
            this.pelicula = "Si Usted compro esta pelicula."
        }else if(this.comprado.toUpperCase() == "NO"){
            this.pelicula = "Usted no compro esta pelicula";
        }
        //El sistema determina si el director coincide se le prepara un llamada a un dos por uno en su pelicula.
        if(this.director == "Spielberg"){
            this.promocion = "Con este director accede a un 2x1"
        }else{
            this.promocion = " Este director no tiene promocion"
        }
        //Aqui si el anio es inferior al estipulado el sistema simplemente dira que no se encuentra en la base de datos del sistema para prestar peliculas.
        if(this.anio >= 1950){
            return "La pelicula que eligio es: \n" + this.nombre + " creada en el anio: \n" + this.anio + " el director es: \n" + this.director + " " +this.promocion +" Usted adquirio la pelicula?:  \n" + this.pelicula + " " + this.resultado 

        }else{
            return "La pelicula no se encuentra en nuestra base"
        }

    
    }


}


//Lista vacia donde se guardara las peliculas generadas por el usuario.

var peliculas = []
//Se crea las peliculas
let pelicula = new Pelicula({nombre:"", anio:"", director:"", precio:"", comprado:""});


//Creacion del menu.

menu = prompt("Menu principal: \n1) Cargar datos de las peliculas \n2) Mostrar su pelicula actual(Aqui se debe apretar el 2 y luego el 0 para que se muestren la pelicula actual cargada) \n3) Mostrar lista de pelicula(Aqui se debe apretar el 2 y luego el 0 para que se muestren la pelicula actual cargada")

while(menu != 0){
    if(menu == 1){
        //Se le pide al usuario que ingrese los datos para cargar las peliculas.
        pelicula.nombre = prompt("Nombre de la pelicula que deseea?");
        pelicula["anio"] = prompt("Cual es el anio de la pelicula");
        pelicula.director = prompt("Cual es el director?");
        pelicula["precio"] = prompt("Cual es el precio? (Los precio de las peliculas van de 500 hasta 1000, puede elegir el que guste, dado que no hay politicas. El usuario elije el precio)")
        pelicula.comprado = prompt("Lo desea comprar?");
        //Se pushea dentro de la lista vacia.
        peliculas.push(pelicula.seleccionarPelicula())
        
       
        //Muestra la pelicula actualmente cargada por el usuario
    }else if(menu == 2){
        document.write(pelicula.seleccionarPelicula());
        
        //Muestra todas las peliculas cargadas por el usuario.
    }else if(menu == 3){
        document.write(peliculas)
    }else{
        alert("Digite la opcion correcta")
    }

 //Vuelve a entrar en el menu, hasta dar con 0   
 menu = prompt("Menu principal: \n1) Cargar datos de las peliculas \n2) Mostrar su pelicula actual(Aqui se debe apretar el 2 y luego el 0 para que se muestren la pelicula actual cargada) \n3) Mostrar lista de pelicula(Aqui se debe apretar el 2 y luego el 0 para que se muestren la pelicula actual cargada")


}