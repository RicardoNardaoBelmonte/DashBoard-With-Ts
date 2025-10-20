import VendaItem from "../Components/VendaItem";
import { useData } from "../Context/dataContext"


export default function Vendas(){

    const {data} = useData();

    if(data === null) return null;
    return(
        <ul>{data.map((venda) => (
            <li key={venda.id}><VendaItem venda={venda}/></li>
        ))}</ul>
    )
}