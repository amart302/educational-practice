import "./reviews.css";
import { FaStar } from "react-icons/fa";

export default function Reviews(){
    const reviews = [
        {
            background: "1761559633402.png",
            userAvatar: "./assets/images/1761560248060.png",
            userName: "",
            text: "",
            estimation: 5
        },
        {
            background: "1761559636141.png",
            userAvatar: "./assets/images/1761560293604.png",
            userName: "",
            text: "",
            estimation: 5
        },
        {
            background: "1761559635275.png",
            userAvatar: "./assets/images/1761560294418.png",
            userName: "",
            text: "",
            estimation: 5
        }
    ];

    return (
        <section className="reviews-section">
            <div className="main__wrapper">
                <div className="main__container reviews">
                    <h2 className="main__container-title">Our Client Reviews</h2>
                    <div className="review__cards">
                        {
                            reviews.map((item, index) => (
                                <div className="review__card" key={ index } style={{ background: `url(./assets/images/${ item.background }) no-repeat center` }}>
                                    <div className="review__card-content">
                                        <img className="review__card-user-avatar" src={ item.userAvatar } />
                                        <span className="review__card-user-name">{ item.userName }</span>
                                        <p className="reviws__card-text">{ item.text }</p>
                                        <div className="review__card-estimation">
                                            {
                                                Array.from({ length: item.estimation }).map((_, indexx) => (
                                                    <FaStar fill="#F6B76F" size={ 18 } />
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}