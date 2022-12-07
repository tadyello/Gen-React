import Tema from './Tema'
import User from './User';

interface Postagem{
    id: number;
    titulo: string;
    midia_url: string;
    texto: string;
    data?:Date| null ;
    tema?: Tema| null;
    usuario?: User| null;
}

export default Postagem;