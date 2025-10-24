import { useLocation } from "react-router-dom";
import DateRange from "./DateRange";
import Meses from "./Meses";
import React from 'react';

export default function Header(){

    const [title, setTitle] = React.useState('Resumo');
    const location = useLocation();

    React.useEffect(() => {
        if(location.pathname === "/"){  
            setTitle("Resumo")
            document.title = 'Deashboard | Resumo'
        }else if(location.pathname === '/vendas'){
            document.title = 'Deashboard | Vendas'
            setTitle("Vendas")
        }
    },[location])

    return (
        <header className="mb">
            <div className="daterange mb">
                <DateRange/>
                <h1 className="box bg-3">{title}</h1>
            </div>
            <Meses/>
        </header>
    )
}