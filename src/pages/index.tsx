import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Principal</h1>
      <Link href="/contexto/contador">
        <button className="button">Contador</button>
      </Link>
    </div >
  )
}