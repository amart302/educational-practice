import "./whyUs.css";

export default function WhyUs(){
    const qualities = [
        {
            title: "Luxury facilities",
            description: "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities."
        },
        {
            title: "Affordable Price",
            description: "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here."
        },
        {
            title: "Many Choices",
            description: "We provide many unique work space choices so that you can choose the workspace to your liking."
        }
    ];

    return (
        <section className="why-us-section">
            <div className="main__wrapper">
                <div className="main__container why-us">
                    <div className="why-us__quality">
                        <h2 className="main__container-title">Why<br />
                        Choosing Us</h2>
                    </div>
                    {
                        qualities.map((item, index) => (
                            <div className="why-us__quality" key={ index }>
                                <h3 className="why-us__quality-title">{ item.title }</h3>
                                <p className="why-us__quality-description">{ item.description }</p>
                                <div className="link-wrapper">
                                    <a className="link" href="#">More Info</a>
                                    <img className="link-icon" src="./assets/images/arrow.svg" alt="Arrow icon" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}