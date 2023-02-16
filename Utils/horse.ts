import pieceChess from "./pieceChess";

class horse extends pieceChess{
    constructor({name, path, color, position}:any) { 
        super({name, path, color, position});
    }
}

export default horse;