import React from "react";
import Card, { CardTypes } from "../Card";
import { useSelector } from "react-redux";
import { selectors } from "../../slice/rhf-slice";


const CardList = () => {
    const cards = useSelector(selectors.selectAll);

    console.log(cards)
    return (
        <>
            <div className="rhf-card-list-wrapper">
                <Card key='rhf-add-card' type={CardTypes.OpenModal}/>
                {
                    cards.map(card => (
                        <Card key={card.id} info={card} type={CardTypes.Default}/>
                    ))
                }
            </div>
        </>
    );
}

export default CardList;