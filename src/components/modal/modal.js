import "./modal.css";
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";

export default function Modal({ closeModal }){
    const { register, handleSubmit, formState: { errors }} = useForm();

    const addProduct = (data) => {
        try {
            const products = JSON.parse(localStorage.getItem("products"));
            products.push(data);

            localStorage.setItem("products", JSON.stringify(products));
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="parent-modal" onSubmit={ handleSubmit(addProduct) }>
            <form className="modal">
                <button className="modal__close-button" onClick={ () => closeModal() }>
                    <IoIosClose fill="#000000" size={ 40 } />
                </button>
                <span className="modal__title">Add new product</span>
                <input className="modal__input" type="text" placeholder="Image link" {...register("image", { required: "Это поле обязательно для заполнения" })} />
                { errors.image && <p className="error-message">{ errors.image.message }</p>}
                <input className="modal__input" type="text" placeholder="Category" {...register("category", { required: "Это поле обязательно для заполнения" })} />
                { errors.category && <p className="error-message">{ errors.category.message }</p>}
                <input className="modal__input" type="text" placeholder="Title" {...register("title", { required: "Это поле обязательно для заполнения" })} />
                { errors.title && <p className="error-message">{ errors.title.message }</p>}
                <input className="modal__input" type="number" placeholder="Estimation" {...register("estimation", { required: "Это поле обязательно для заполнения" })} />
                { errors.estimation && <p className="error-message">{ errors.estimation.message }</p>}
                <input className="modal__input" type="number" placeholder="Price" {...register("price", { required: "Это поле обязательно для заполнения" })} />
                { errors.price && <p className="error-message">{ errors.price.message }</p>}
                <button className="modal__button" type="submit">Add</button>
            </form>
        </div>
    );
}