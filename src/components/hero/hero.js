import "./hero.css";

export default function Hero(){
    return (
        <section className="hero-section">
            <div className="main__hero">
                <div className="main__hero-content">
                    <h1 className="main__title">Make Your Interior More<br />
                    Minimalistic & Modern</h1>
                    <p className="main__text">Turn your room with panto into a lot more minimalist<br />
                    and modern with ease and speed</p>
                    <div className="main__search">
                        <input className="main__search-input" type="text" placeholder="Search furniture" />
                        <button className="main__search-button">
                            <img className="main__search-icon" src="/assets/images/search.svg" alt="search icon" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}