import { useData } from "../Context/dataContext"

export default function Resumo(){
   const {data} = useData();

   console.log(data);
   
    return (
        <div>Resumo</div>
    )
}