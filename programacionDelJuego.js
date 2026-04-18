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