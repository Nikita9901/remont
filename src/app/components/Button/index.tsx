'use client'

import {useState} from "react";
import styles from './index.module.css'
import CustomModal from "@/app/components/Modal";

export default function Button() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    return (
        <>
            <div className={styles.wrapper} onClick={openModal}>
                <div className={styles.name}>БЫСТРАЯ КОНСУЛЬТАЦИЯ</div>
            </div>
            {modalIsOpen && <CustomModal closeModal={closeModal}/>}
        </>
    )
}
export const FindUsButton = () => {
    return (
        <a href={'https://yandex.by/maps/org/cyber_service/57157061172/?indoorLevel=1&ll=27.549641%2C53.892819&z=17.77'} target={'_blank'}>
            <div className={styles.findUs}>НАЙТИ НАС НА КАРТЕ</div>
        </a>
    )
}
export const LoadingButton = ({isLoading, disabled}: {isLoading: boolean, disabled: boolean}) => {
    return (
        <button className={styles.loadingButtonWrapper} type={'submit'} disabled={disabled}>
            {isLoading ? '....' : 'Оставить заявку'}
        </button>
    )
}