const style: React.CSSProperties = {
    border: "var(--gap-s) solid var(--color-2)",
    borderRightColor: "var(--color-4)",
    width: "var(--gap)",
    height: "var(--gap)",
    borderRadius: "50%",
    animation: "spin 1s infinite",
}

export default function Carregando(){
    return(
        <div className="spin" style={style}></div>
    )
}