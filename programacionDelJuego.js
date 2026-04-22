class Ataque{
    constructor(nombre, danio, costKi){
        this._nombre = nombre;
        this._danio = danio;
        this._costKi = costKi;
    }

    describir(){
        return `${this._nombre} causa ${this._danio} pts de daño y cuesta ${this._costKi} de Ki`;
    }
}

class Evolucion{
    constructor(nombre, multiplicador){
        this._nombre = nombre;
        this._multiplicador = multiplicador;
    }

    describir(){
        return `Has evolucionado a ${this._nombre} tu poder de pelea se multiplica por ${this._multiplicador}`;
    }
}

class Guerrero{
    //no colocar arrays vacios en los parentecis del constructor
    constructor(nombre,poderBase, pts, ki){
        this._nombre = nombre;
        this._poderBase = poderBase;
        this._pts = pts;
        this._ki = ki;
        //vacias las evoluciones porque se desbloquean mediante juega
        this._evolucion = [];
        this._ataques = [];
    }

    agregarAtaque(ataque){
        this._ataques.push(ataque);
    }

    obtenerAtaque(nombre) {
    return this._ataques.find(ataque => ataque._nombre === nombre);
}
}

class Turno{
    constructor(guerrero){
        this._guerrero = guerrero;
        this._esquivando = false;
    }

    //metodo para recargar ki
    recarga(){
        this._guerrero._ki += 10;
    }

    atacar(nombreAtaque, rival){
        let ataque =  this._guerrero.obtenerAtaque(nombreAtaque);
       
        if(this._guerrero._ki >= ataque._costKi){
            console.log(`${this._guerrero._nombre} ha realizado ${ataque._nombre}`);
            this._guerrero._ki -= ataque._costKi //gasto de ki
            rival._pts -= ataque._danio;//daño al enemigo
        } else{
            console.log(`${this._guerrero._nombre} no tiene suficiente ki para realizar ${ataque._nombre}`)
        }
    }

    esquivar(){
        this._esquivando = true; // variable bandera que avisa al juego cunado esta el guerrero esquivando
        console.log(`${this._guerrero._nombre} esta esquivando`);
    }
}

class Torneo{
    constructor(guerrero1, guerrero2){
        this._guerrero1 = guerrero1;
        this._guerrero2 = guerrero2;
        this._turnoActual = new Turno(this._guerrero1); 
    }

    cambiarTurno(){
        if(this._turnoActual._guerrero === this._guerrero1){
            this._turnoActual = new Turno(this._guerrero2);
        }else{
            this._turnoActual = new Turno(this._guerrero1);
        }
    }

    verificarGanador() {
    if(this._guerrero1._pts <= 0){
        console.log(`Ganador: ${this._guerrero2._nombre}`);
    } else if(this._guerrero2._pts <= 0){
        console.log(`Ganador: ${this._guerrero1._nombre}`);
    } else {
        return 0;
    }
}
}

const bolKi = new Ataque ('Bolas de ki', 50, 15);
const golpe = new Ataque ('Puño', 15, 0);
const patada = new Ataque ('Patada', 30, 0);

const guerreroA1 = new Guerrero ('Goku', 3000, 500, 100);
const kamehame = new Ataque ('Kamehameha', 250, 30);
guerreroA1.agregarAtaque(kamehame);
guerreroA1.agregarAtaque(bolKi);
guerreroA1.agregarAtaque(golpe);
guerreroA1.agregarAtaque(patada);

const guerreroA2 = new Guerrero ('Vegeta',2800, 500, 100);
const galick = new Ataque ('Galick Gun', 250, 30);
guerreroA2.agregarAtaque(galick);
guerreroA2.agregarAtaque(bolKi);
guerreroA2.agregarAtaque(golpe);
guerreroA2.agregarAtaque(patada);

const torneo = new Torneo (guerreroA1, guerreroA2);

torneo._turnoActual.atacar("Kamehameha", guerreroA2);
torneo.verificarGanador();
torneo.cambiarTurno();