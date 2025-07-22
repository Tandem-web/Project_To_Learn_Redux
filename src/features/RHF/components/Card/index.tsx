import React from "react";
import { FaPlus } from "react-icons/fa6";
import { useModal } from "../../hooks/Modal/useModal";

export const CardTypes = {
    OpenModal: 'open-modal',
    Default: 'default'
} as const;

export type CardTypes = typeof CardTypes[keyof typeof CardTypes]

interface CardProps{
    type: CardTypes;
    key: string;
}

const CardOpenModal: React.FC = () => {
    const { openModal } = useModal();
    return (
        <button className="rhf-card-open-modal" onClick={openModal}>
            <FaPlus/>
            <p>Добавить карточку</p>
        </button>
    )
};
const CardDefault: React.FC = () => {
    return(
        <>  
            <div className="rhf-card-default">
                <div className="rhf-card-aside-flag">
                    Какая-то категория
                </div>
                <div className="rhf-card-header">
                    <span className="rhf-card-title">Какой-то заголовок</span>
                </div>
                <div className="rhf-card-body">
                    <span className="rhf-card-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, vero ut dolores earum cumque sapiente vel porro in eligendi tenetur animi nostrum, cum quam et distinctio ipsam, rerum neque corrupti!</span>
                </div>
                <div className="rhf-card-footer">
                    <button className="rhf-card-delete-button">Удалить</button>
                </div>
            </div>
        </>

    ) 
};

const Card: React.FC<CardProps> = (props) => {
    const { type } = props;

    const renderCardContent = () => {
        switch (type) {
            case CardTypes.OpenModal:
                return <CardOpenModal />;
            case CardTypes.Default:
                return <CardDefault />;
            default:
                return null; // Или можно вернуть <div>Unknown type</div>;
        }
    };

    return (
        <div className="rhf-card-wrapper">
            {renderCardContent()}
        </div>
    );
}

export default Card;    