import Image from "next/image"

export default function Background() {
    return (
        <div>
            <Image
                src='https://wallpaperaccess.com/full/11801.jpg'
                fill
                alt="starwars-wallpaper"
                className="-z-50 object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-30 -z-40"></div>
        </div>

    )
}