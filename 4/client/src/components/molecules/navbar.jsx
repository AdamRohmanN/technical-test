export default function Navbar() {
    return(
        <header>
            <nav className="page flex jc-between ai-center bg-black">
                <h1 className="fs2 txt-white"><span className="txt-orange">7</span>DW</h1>
                <div className="double-button">
                    <button className="bg-orange txt-white bold">Add Hero</button>
                    <button className="bg-orange txt-white bold">Add Type</button>
                </div>
            </nav>
        </header>
    )
}