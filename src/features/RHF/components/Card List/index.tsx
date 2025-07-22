import React from "react";
import Card, { CardTypes } from "../Card";

interface CardListProps{
    
}

const CardList: React.FC<CardListProps> = (props) => {

    return (
        <>
            <div className="rhf-card-list-wrapper">
                <Card key='12442' type={CardTypes.OpenModal}/>
                <Card key='12443' type={CardTypes.Default}/>
            </div>
        </>
    );
}

export default CardList;