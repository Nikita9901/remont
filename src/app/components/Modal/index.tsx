import styles from './index.module.css'
import {useState} from "react";
import {LoadingButton} from "@/app/components/Button";
import {Controller, useForm} from "react-hook-form"
import InputMask from 'react-input-mask';

export type Problems =
    'Замена стекла'
    | 'Замена дисплея'
    | 'Замена аккумулятора'
    | 'Замена задней крышки'
    | 'Замена динамика'
    | 'Замена камеры'
    | 'Чистка'
    | 'Программное'
    | 'Другое'

export default function CustomModal({closeModal}: {closeModal: () => void}) {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [timer, setTimer] = useState(3)
    const {
        handleSubmit,
        control,
        formState: { isValid },
    } = useForm<{name: string; phoneNumber: string; model: string; problem: Problems}>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: {
            name: '',
            phoneNumber: '',
            model: '',
            problem: 'Замена стекла',
        },
    });
    const onSubmit = async ({name, phoneNumber, model, problem}: {name: string; phoneNumber: string; model: string; problem: Problems}) => {
        setLoading(true);
        try {
            const botToken = '6788367099:AAEeAXGsm8SFo6Kbx_Q3nZZQws13fmqZgpw';
            const chatId = '-1002035422048';
            const message = `Name: ${name}\nPhone: ${phoneNumber.replace(/[\s()-]/g, '')}\nModel: ${model}\nProblem: ${problem}`;

            const res = await fetch(
                `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
                    message
                )}`
            );
            if (res.ok) {
                setSuccess(true)
                setTimeout(closeModal, 3000)
                setInterval(() => setTimer(prev => prev-1), 1000)
            }
            else {
                throw new Error('Failed to send message to Telegram');
            }
        } catch (error) {
            console.error('Error:', error);
        }
        setLoading(false);
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.backdrop} onClick={closeModal}/>
            <div className={styles.modal}>
                {success ?
                    <>
                        <div className={styles.modalDescription}>{timer}</div>
                        <div className={styles.modalHeader}>Заявка отправлена!</div>
                    </>
                    :
                    <>
                        <div className={styles.modalHeader}>ОБРАТНЫЙ ЗВОНОК</div>
                        <div className={styles.modalDescription}>ВВЕДИТЕ СВОЙ ТЕЛЕФОН И МЫ СВЯЖЕМСЯ С ВАМИ В БЛИЖАЙШЕЕ ВРЕМЯ С 10:00 ДО 20:00</div>
                        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                            <Controller
                                name={'name'}
                                control={control}
                                rules={{required: true}}
                                render={({field}) => (
                                    <input placeholder={'ВАШЕ ИМЯ'} className={styles.input} {...field}/>
                                )}
                            />
                            <Controller
                                name={'phoneNumber'}
                                control={control}
                                rules={{required: true}}
                                render={({field}) => (
                                    <InputMask mask="+375 (99) 999-99-99" placeholder={'ВАШ НОМЕР ТЕЛЕФОНА'} className={styles.input} {...field}/>
                                )}
                            />
                            <Controller
                                name={'model'}
                                control={control}
                                rules={{required: true}}
                                render={({field}) => (
                                    <input placeholder={'МОДЕЛЬ ТЕЛЕФОНА'} className={styles.input} {...field} />
                                )}
                            />
                            <Controller
                                name={'problem'}
                                control={control}
                                rules={{required: true}}
                                render={({field}) => (
                                    <select placeholder={'ВАША ПРОБЛЕМА'} className={styles.input} {...field}>
                                        <option>Замена стекла</option>
                                        <option>Замена дисплея</option>
                                        <option>Замена аккумулятора</option>
                                        <option>Замена задней крышки</option>
                                        <option>Замена динамика</option>
                                        <option>Замена камеры</option>
                                        <option>Чистка</option>
                                        <option>Программное</option>
                                        <option>Другое</option>
                                    </select>
                                )}
                            />
                            <LoadingButton isLoading={loading} disabled={!isValid || loading}/>
                        </form>
                    </>
                }
            </div>
        </div>
    )
}
