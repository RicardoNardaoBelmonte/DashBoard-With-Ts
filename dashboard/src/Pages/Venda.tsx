import { useParams } from "react-router-dom"
import useFetch from "../Hooks/useFetch";
import type { IVenda } from "../Context/dataContext";
import Carregando from "../Components/Carregando";

type VendaSemData = Omit<IVenda, 'data'>;

export default function Venda(){

    const {id} = useParams();

    const {data, loading} = useFetch<VendaSemData>(`https://data.origamid.dev/vendas/${id}`);

    if(loading) return <Carregando/>
    
    if (data === null) return null;
    return( 
        <div>
            <div className="box mb">ID: {data.id}</div>
            <div className="box mb">Nome: {data.nome}</div>
            <div className="box mb">Preço: {data.preco.toLocaleString('pt-BR', {style: "currency", currency: "BRL"})}</div>
            <div className="box mb">Status: {data.status}</div>
            <div className="box mb">Pagamento: {data.pagamento}</div>
        </div>
    )
}