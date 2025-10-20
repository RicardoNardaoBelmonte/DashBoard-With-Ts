import type { IVenda } from "../Context/dataContext";


export default function VendaItem({venda} : {venda: IVenda}){

    return(
        <div className="venda box" style={{fontFamily: "monospace"}}>
            <a href="">{venda.id}</a>
            <div>{venda.nome}</div>
            <div>{venda.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</div>
        </div>
    )
}