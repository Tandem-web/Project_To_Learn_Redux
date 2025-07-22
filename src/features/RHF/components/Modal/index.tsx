import { createPortal } from "react-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useModal } from "../../hooks/Modal/useModal";
import { FaXmark } from "react-icons/fa6";

const CardCategory = {
    EduTech: 'edu-tech',
    FinTech: 'fin-tech',
    AdTech: 'ad-tech'    
} as const;

type CardCategory = typeof CardCategory[keyof typeof CardCategory];

interface AddCardFormInput{
    title: string,
    description: string,
    category: CardCategory
}

function Modal_RHF() {
    const { closeModal } = useModal();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<AddCardFormInput>()

    const onSubmit: SubmitHandler<AddCardFormInput> = (data) => console.log(data)

    return createPortal(
        <>
            <div className="rhf-modal-wrapper">
                <div className="rhf-form">
                    <button className="rhf-form-close-icon" onClick={closeModal}>
                        <FaXmark/>
                    </button>
                    <div className="rhf-form-title">
                        <h2>Добавь новую карточку!</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="rhf-form-row">
                            <label>Заголовок</label>
                            <input type="text" {...register("title", {required: true})} />
                        </div>
                        <div className="rhf-form-row">
                            <label>Описание</label>
                            <textarea {...register("description", {required: true})} />
                        </div>
                        <div className="rhf-form-row">
                            <label>Категория</label>
                            <select {...register("category", {required: true})}>
                                {
                                    (Object.keys(CardCategory) as Array<keyof typeof CardCategory>).map((key) => (
                                        <option key={key} value={key}>{CardCategory[key]}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="rhf-form-row">
                            <input type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    , document.querySelector('#modal-root'))
}

export default Modal_RHF;