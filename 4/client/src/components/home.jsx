export default function Home() {
    return(
        <main className="page vh100 bg-black">
            <section>
                <ul>
                    <li className="flex-col bg-gray">
                        <img className="w100" src="https://picsum.photos/seed/picsum/200/300" alt="hero-img" />
                        <h3 className="mt1 mb0-5 txt-white">Hero Name</h3>
                        <p className="mb1 txt-white">Hero Type</p>
                        <button className="bg-red txt-white">Detail</button>
                    </li>
                </ul>
            </section>
        </main>
    )
}