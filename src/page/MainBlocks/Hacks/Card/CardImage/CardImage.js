import React, { Component } from "react";
import styles from "./CardImage.module.css";

export default class CardImage extends Component {
    render() {
        const { number,name, month, year, cvv, changeParam } = this.props
        return (
            // changeParam === null? null : styles
            <div className={styles.Card}>
                <div className={`${styles.Front} ${changeParam === 'cvv' ? styles.Card__FrontFocus : null}`}>
                    <div className={styles.Top_Left}>
                        <div className={styles.Bank__Logo}></div>
                        <div className={styles.Bank__Title}></div>
                    </div>
                    <div className={styles.Top_Rigth}>
                        <div className={styles.Card__Type}></div>
                    </div>
                    <div className={`${styles.Card__Number} ${changeParam === 'number' ? styles.Card__NumberFocus : null}`}>{number}</div>
                    <div className={`${styles.Card__Holder} ${changeParam === 'name' ? styles.Card__HolderFocus : null}`}>{name}</div>
                    <div className={`${styles.Card__Date} ${changeParam === 'data' ? styles.Card__DateFocus : null}`}>{month}/{year}</div>
                </div>
                <div className={`${styles.Back} ${changeParam === 'cvv' ? styles.Card__BackFocus : null}`}>
                    <div className={styles.Card__Line}></div>
                    <div className={`${styles.Card__Cvv} ${changeParam === 'cvv' ? styles.Card__CvvFocus : null}`}>{cvv}</div>
                </div>
            </div>
        )
    }
}
