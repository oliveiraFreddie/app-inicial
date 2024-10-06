import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="flex justify-center font-bold">Principal</h1>
      <div className="flex flex-col">
        <Link href="/contexto/contador">
          <button className="button">Contador</button>
        </Link>
        <Link href="/listas/produtos">
          <button className="button">Lista de Produtos</button>
        </Link>
      </div>
    </div >
  )
}