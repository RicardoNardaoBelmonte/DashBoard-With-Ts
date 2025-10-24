import { NavLink } from "react-router-dom";
import type { IVenda } from "../Context/dataContext";


export default function VendaItem({venda} : {venda: IVenda}){

    return(
        <div className="venda box" style={{fontFamily: "monospace"}}>
            <NavLink to={`/vendas/${venda.id}`}>{venda.id}</NavLink>
            <div>{venda.nome}</div>
            <div>{venda.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</div>
        </div>
    )
}