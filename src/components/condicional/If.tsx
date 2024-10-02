interface IfProps {
    teste: boolean
    children: any
}

export default function If(props: IfProps) {
    if (props.teste) { // se o teste for verdadeiro retorna os filhos
        return props.children
    } else {
        return null // se for falso retorna null
    }
}