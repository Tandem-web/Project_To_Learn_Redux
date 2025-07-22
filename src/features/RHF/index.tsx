import { useCallback, useState } from "react";
import CardList from "./components/Card List";
import Modal_RHF from "./components/Modal";
import './styles/style.scss'
import { useModal } from "./hooks/Modal/useModal";

function RHF() {
    const { isOpen } = useModal()

    return (
        <>
            <CardList />
            {isOpen && <Modal_RHF/>}
        </>
    );
}

export default RHF;