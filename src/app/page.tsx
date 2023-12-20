import Image from 'next/image'
import styles from './page.module.css'
import Logo from "@/app/components/Logo";
import {
    locationIcon,
    messageIcon,
    phoneAllImage,
    earth,
    instrument1,
    instrument2,
    instrument3,
    instrument4,
    instrument5,
    instrument6,
    instrument7,
    instagram
} from './images'
import Button, {FindUsButton} from "@/app/components/Button";
import Service from "@/app/components/Service";

export default function Home() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.topBlock}>
            <div className={styles.header}>
                <Logo/>
                    <div className={styles.locationBlock}>
                        <a className={styles.locationBlock} href={'https://yandex.by/maps/org/cyber_service/57157061172/?indoorLevel=1&ll=27.549641%2C53.892819&z=17.77'} target={'_blank'}>
                            <Image src={locationIcon} alt={'location'} className={styles.Icon} />
                            <div>ЛЕНИНГРАДСКАЯ, 5</div>
                        </a>
                    </div>
                <div className={styles.contactsBlock}>
                    <a className={styles.contactsBlock} href={'tel:+375292509999'}>
                        <Image src={messageIcon} alt={'contacts'} className={styles.Icon}/>
                        <div>
                            <div className={styles.phoneNumber}>+375 (29) 250-99-99</div>
                            <div>ЕСТЬ ВОПРОСЫ? ЗВОНИТЕ!</div>
                        </div>
                    </a>
                </div>
            </div>
            <div className={styles.mainTopBlock}>
                <div className={styles.mainTopBlockText}>
                    <div className={styles.mainTopBlockHeader}>РЕМОНТИРУЕМ УСТРОЙСТВО С ДОСТАВКОЙ ОТ 30 МИНУТ!</div>
                    <div className={styles.mainTopBlockLocation}>РЕМОНТ СМАРТФОНОВ М. ПЛОЩАДЬ ЛЕНИНА</div>
                    <div className={styles.mainTopBlockTime}>ГРАФИК РАБОТЫ:<br/>ПН-СБ 10:00 - 20:00 <br/>ВС 10:00 - 18:00</div>
                    <Button/>
                </div>
                <Image src={phoneAllImage} alt={'ремонт телефонов'}  className={styles.phoneImage}/>
            </div>
        </div>
        <div className={styles.transitionBlock}/>
        <div className={styles.mediumBlock}>
            <div className={styles.mediumWrapper}>
                <Image src={earth} alt={earth} className={styles.earthImage}/>
                <div className={styles.mediumMain}>
                    <div className={styles.mediumHeader}>СКОЛЬКО СТОЯТ НАШИ УСЛУГИ?</div>
                    <div className={styles.servicesWrapper}>
                        <Service image={instrument1} topLabel={'ЗАМЕНА'} bottomLabel={'ДИСПЛЕЙНОГО МОДУЛЯ'} price={60}/>
                        <Service image={instrument2} topLabel={'ЗАМЕНА'} bottomLabel={'АККУМУЛЯТОРА'} price={25}/>
                        <Service image={instrument3} topLabel={'ЗАМЕНА'} bottomLabel={'ЗАДНЕЙ КРЫШКИ'} price={20}/>
                        <Service image={instrument4} topLabel={'ЗАМЕНА'} bottomLabel={'ДИНАМИКА'} price={15}/>
                        <Service image={instrument5} topLabel={'ЗАМЕНА'} bottomLabel={'КАМЕРЫ'} price={25}/>
                        <Service image={instrument6} topLabel={'ЧИСТКА'} bottomLabel={'ОТ ПЫЛИ/ВЛАГИ'} price={40}/>
                        <Service image={instrument7} topLabel={'ПЕРЕПРОШИВКА'} bottomLabel={'ОБНОВЛЕНИЕ'} price={20}/>
                    </div>
                    <div style={{marginBottom: '50px'}}>
                        <FindUsButton/>
                    </div>
                </div>
            </div>

        </div>
        <div className={styles.transitionBlockRevert}/>
        <div className={styles.bottomBlock}>
            <Logo/>
            <div className={styles.bottomWrapperText}>
                <div className={styles.locationBlock}>
                    <a className={styles.locationBlock} href={'https://yandex.by/maps/org/cyber_service/57157061172/?indoorLevel=1&ll=27.549641%2C53.892819&z=17.77'} target={'_blank'}>
                        <Image src={locationIcon} alt={'location'} className={styles.Icon} />
                        <div>ЛЕНИНГРАДСКАЯ, 5</div>
                    </a>
                </div>
                <div className={styles.contactsBlock}>
                    <a className={styles.contactsBlock} href={'tel:+375292509999'}>
                        <Image src={messageIcon} alt={'contacts'} className={styles.Icon}/>
                        <div>
                            <div className={styles.phoneNumber}>+375 (29) 250-99-99</div>
                            <div>ЕСТЬ ВОПРОСЫ? ЗВОНИТЕ!</div>
                        </div>
                    </a>
                </div>
            </div>
            <a href={'https://www.instagram.com/cyberservice.by/'} target={'_blank'}>
                <div className={styles.instagramBlock}>
                    <Image src={instagram} alt={'instagram'} className={styles.Icon}/>
                    <div style={{marginBottom: '5px'}}>@CYBERSERVICE.BY</div>
                </div>
            </a>
        </div>
    </div>
  )
}
