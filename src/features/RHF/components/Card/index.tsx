import React from "react";
import { FaPlus } from "react-icons/fa6";
import { useModal } from "../../hooks/Modal/useModal";
import { CardRHF } from "../../slice/rhf-card-adapter";
import { AppDispatch } from "../../../../store/store";
import { useDispatch } from "react-redux";
import { removeCard } from "../../slice/rhf-slice";


export const CardTypes = {
    OpenModal: 'open-modal',
    Default: 'default'
} as const;

export type CardTypes = typeof CardTypes[keyof typeof CardTypes]
interface CardProps{
    type: CardTypes;
    info?: CardRHF;
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
const CardDefault: React.FC<{info: CardRHF}> = (props) => {

    const dispatch:AppDispatch = useDispatch();
    const {title, description, category, id} = props.info;

    return(
        <>  
            <div className="rhf-card-default">
                <div className="rhf-card-aside-flag">
                    {category}
                </div>
                <div className="rhf-card-header">
                    <span className="rhf-card-title">{title}</span>
                </div>
                <div className="rhf-card-body">
                    <span className="rhf-card-description">{description}</span>
                </div>
                <div className="rhf-card-footer">
                    <button className="rhf-card-delete-button" onClick={() => dispatch(removeCard(id))}>Удалить</button>
                </div>
            </div>
        </>

    ) 
};

const Card: React.FC<CardProps> = (props) => {
    const { type, info } = props;

    const renderCardContent = () => {
        switch (type) {
            case CardTypes.OpenModal:
                return <CardOpenModal />;
            case CardTypes.Default:
                return <CardDefault info={info}/>;
            default:
                return null;
        }
    };

    return (
        <div className="rhf-card-wrapper">
            {renderCardContent()}
        </div>
    );
}

export default Card;    