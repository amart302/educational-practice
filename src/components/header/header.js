import "./header.css";

export default function Header(){
    return (
        <header className="header">
            <div className="header__inner">
                <div className="header__brand">
                    <a className="header__brand-link" href="/">Panto</a>
                </div>
                <nav className="header__nav">
                    <a className="header__link" href="/furniture">Furniture</a>
                    <a className="header__link" href="/shop">Shop</a>
                    <a className="header__link" href="/aboutus">About Us</a>
                    <a className="header__link" href="/contact">Contact</a>
                </nav>
                <div className="header__basket">
                    <img className="header__basket-image" src="./assets/images/bag.svg" alt="bag icon" />
                </div>
            </div>
        </header>
    );
}