import Tema from "./Tema"
import User from "./User"

interface Postagem{
    id: number;
    titulo: string;
    midia_url: string;
    texto: string;
    data: Date;
    usuario?: User| null;   
    tema?: Tema| null;
}

export default Postagem;