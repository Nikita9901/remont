import styles from './index.module.css'
import Image from "next/image";
import {StaticImport} from "next/dist/shared/lib/get-img-props";

export default function Service({image, topLabel, bottomLabel, price}: {image: StaticImport, topLabel: string, bottomLabel:string, price: number}) {
    return (
        <div className={styles.wrapper}>
            <Image src={image} alt={bottomLabel} className={styles.image}/>
            <div className={styles.textWrapper}>
                <div className={styles.topText}>{topLabel}</div>
                <div className={styles.bottomText}>{bottomLabel}</div>
            </div>
            <div className={styles.priceWrapper}>ОТ {price} РУБ.</div>
        </div>
    )
}
