import Avo from "@/components/comunicacao/direta/Avo";

export default function PaginaDireta() {
    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen">
            <h1 className="text-5xl mb-10">Comunicação Direta</h1>
            <Avo nome="Osvaldo" sobrenome="Santos" />
        </div>
    )
}