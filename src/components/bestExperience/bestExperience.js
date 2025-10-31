import "./bestExperience.css";

export default function BestExperience(){

    return (
        <section className="best-experience-section">
            <div className="main__wrapper">
                <div className="main__container best-experience">
                    <div className="best-experiense__wrapper">
                        <img className="best-experience__image" src="./assets/images/bestExperienceImage.png" />
                    </div>
                    <div className="best-experience__content">
                        <h3 className="main__container-subtitle">EXPERIENCES</h3>
                        <h2 className="main__container-title">We Provide You The<br />
                        Best Experience</h2>
                        <p className="best-experience__text">You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
                        <div className="link-wrapper">
                            <a className="link" href="#">More Info</a>
                            <img className="link-icon" src="./assets/images/arrow.svg" alt="Arrow icon" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}