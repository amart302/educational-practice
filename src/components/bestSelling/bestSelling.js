import { useState } from "react";
import "./bestSelling.css";
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

export default function BestSelling(){
    const [ activeCategory, setActiveCategory ] = useState("chair");

    const categories = [
        {
            value: "chair",
            label: "Chair"
        },
        {
            value: "beds",
            label: "Beds"
        },
        {
            value: "sofa",
            label: "Sofa"
        },
        {
            value: "lamp",
            label: "Lamp"
        }
    ];

    const products = [
        {
            image: "./assets/images/1761471514347.png",
            category: "Chair",
            title: "Sakarias Armchair",
            estimation: 5,
            price: 392
        },
        {
            image: "./assets/images/1761471522960.png",
            category: "Chair",
            title: "Baltsar Chair",
            estimation: 5,
            price: 299
        },
        {
            image: "./assets/images/1761471526733.png",
            category: "Chair",
            title: "Anjay Chair",
            estimation: 5,
            price: 519
        },
        {
            image: "./assets/images/1761471528331.png",
            category: "Chair",
            title: "Nyantuy Chair",
            estimation: 5,
            price: 921
        }
    ];

    return (
        <section className="best-selling-section">
            <div className="main__container best-selling">
                <h2 className="main__container-title">Best Selling Product</h2>
                <div className="best-selling__filters">
                    {
                        categories.map((item, index) => (
                            <button className={ `best-selling__filter-button ${ item.value === activeCategory ? "active-filter-button" : "" }` } onClick={ () => setActiveCategory(item.value) }>{ item.label }</button>
                        ))
                    }
                </div>
                <div className="best-selling__cards">
                    {
                        products.map((item, index) => (
                            <div className="best-selling__card" key={ index }>
                                <div className="best-selling__card-wrapper">
                                    <img className="best-selling__card-image" src={ item.image }/>
                                </div>
                                <div className="best-selling__card-content">
                                    <span className="best-selling__card-category">{ item.category }</span>
                                    <p className="best-selling__card-title">{ item.title }</p>
                                    <div className="best-selling__card-estimation">
                                        {
                                            Array.from({ length: item.estimation }).map((_, indexx) => (
                                                <FaStar fill="#F6B76F" size={ 18 } />
                                            ))
                                        }
                                    </div>
                                    <div className="best-selling__card-footer">
                                        <span className="best-selling__card-price">$ { item.price }</span>
                                        <button className="best-selling__card-button">
                                            <FaPlus fill="#ffffff" size={ 24 } />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="link-wrapper">
                    <a className="link" href="#">More Info</a>
                    <img className="link-icon" src="./assets/images/arrow.svg" alt="Arrow icon" />
                </div>
            </div>
        </section>
    );
}