import "./materials.css";

export default function Materials(){
    return (
        <section className="materials-section">
            <div className="main__wrapper">
                <div className="main__container materials">
                    <div className="materials__content">
                        <h3 className="main__container-subtitle">MATERIALS</h3>
                        <h2 className="main__container-title">Very Serious<br />
                        Materials For Making<br />
                        Furniture</h2>
                        <p className="materials__text">Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
                        <div className="link-wrapper">
                            <a className="link" href="#">More Info</a>
                            <img className="link-icon" src="./assets/images/arrow.svg" alt="Arrow icon" />
                        </div>
                    </div>
                    <div className="materials__wrapper">
                        <img className="materials__first-image" src="./assets/images/materialsFirstImage.png" />
                        <img className="materials__second-image" src="./assets/images/materialsSecondImage.png" />
                        <img className="materials__third-image" src="./assets/images/materialsThirdImage.png" />
                    </div>
                </div>
            </div>
        </section>
    );
}