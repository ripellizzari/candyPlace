

const NavBar = () => {
    return (
        <div className="container">
            <div>
                <h1>Candy place</h1>
                <div className="navBar">
                    <img className="logo" src="https://www.pinclipart.com/picdir/big/538-5382071_lollipop-euclidean-vector-candy-candies-clipart-png-transparent.png" alt="main-logo"></img>


                    <ul className="menu" tyle={{ color: "blue", backgroundColor: "yellow", display: "flex-end", }}>
                        <li style={{ padding: 20 }}><a href="">Productos</a></li>
                        <li style={{ padding: 20 }}><a href="">Contactanos</a></li>
                        <li style={{ padding: 20 }}><a href="">Nosotros</a></li >
                    </ul >
                </div>
            </div >
        </div>
    )
}


export default NavBar;