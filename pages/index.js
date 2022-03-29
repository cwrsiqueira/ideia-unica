import Link from "next/link";

function Home() {
    return (
        <div>
            <div>Home</div>
            <Link href="/sobre">
                <a>Ir para Sobre</a>
            </Link>
        </div>
    )
}

export default Home;