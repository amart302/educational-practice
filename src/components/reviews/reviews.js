import "./reviews.css";
import { FaStar } from "react-icons/fa";

export default function Reviews(){
    const reviews = [
        {
            background: "1761559633402.png",
            userAvatar: "1761560248060.png",
            userName: "Bang Upin",
            profession: "Pedagang Asongan",
            text: "“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“",
            estimation: 5
        },
        {
            background: "1761559636141.png",
            userAvatar: "1761560293604.png",
            userName: "Ibuk Sukijan",
            profession: "Ibu Rumah Tangga",
            text: "“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“",
            estimation: 5
        },
        {
            background: "1761559635275.png",
            userAvatar: "1761560294418.png",
            userName: "Mpok Ina",
            profession: "Karyawan Swasta",
            text: "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“",
            estimation: 5
        }
    ];

    return (
        <section className="reviews-section">
            <div className="main__wrapper">
                <div className="main__container reviews">
                    <h3 className="main__container-subtitle">TESTIMONIALS</h3>
                    <h2 className="main__container-title">Our Client Reviews</h2>
                    <div className="review__cards">
                        {
                            reviews.map((item, index) => (
                                <div className="review__card" key={ index }>
                                    <img className="review__card-background" src={ `./assets/images/${ item.background }` } />
                                    <div className="review__card-content">
                                        <img className="review__card-user-avatar" src={ `./assets/images/${ item.userAvatar }` } />
                                        <span className="review__card-user-name">{ item.userName }</span>
                                        <span className="review__card-user-profession">{ item.profession }</span>
                                        <p className="reviws__card-text">{ item.text }</p>
                                        <div className="review__card-estimation">
                                            {
                                                Array.from({ length: item.estimation }).map((_, indexx) => (
                                                    <FaStar fill="#F6B76F" size={ 16 } />
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