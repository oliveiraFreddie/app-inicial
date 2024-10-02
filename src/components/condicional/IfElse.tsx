interface IfElseProps {
    teste: boolean
    children: any
}

export default function If(props: IfElseProps) {
    if (props.teste) {
        return props.children[0]
    } else {
        return props.children[1]
    }
}