import React, { Component } from "react";
import styles from "./CardInput.module.css";

export default class CardInput extends Component{
    constructor(props) {
        super(props)
        this.state = {
            number: this.props.params.number,
            name: this.props.params.name,
            month: this.props.params.month,
            year: this.props.params.year,
            cvv: this.props.params.cvv,
            changeParam: this.props.params.changeParam
        }
    }

    handleNumber = number => {
        let value = number.target.value.replace(/[^\d]/g, '').substring(0,16);
        value = value !== '' ? value.match(/.{1,4}/g).join(' ') : '';
        number.target.value = value;
        this.setState({
            number: value,
        }, () => {
            this.props.onChange({ ...this.state })
        })
    }

    handleHolder = name => {
        let value = name.target.value.toUpperCase()
        name.target.value = value;
        this.setState({
            name: value,
        }, () => {
            this.props.onChange({ ...this.state })
        })
    }

    handleMonth = month => {
        let value = month.target.value.slice(0, 2)
        month.target.value = value;
        this.setState({
            month: value,
        }, () => {
            this.props.onChange({ ...this.state })
        })
    }

    handleYear = year => {
        let value = year.target.value.slice(0, 4)
        year.target.value = value;
        this.setState({
            year: year.target.value,
        }, () => {
            this.props.onChange({ ...this.state })
        })
    }

    handleCvv = cvv => {
        let value = cvv.target.value.slice(0, 3)
        cvv.target.value = value;
        this.setState({
            cvv: cvv.target.value,
        }, () => {
            this.props.onChange({ ...this.state })
        })
    }

    handleFocus = event => {
        let focus = event.target.name
        this.setState({
            changeParam: focus,
        }, () => {
            this.props.onChange({ ...this.state })
        })
    }

    render() {
        return (
            <div className={styles.inputBlock}>
                <div className={styles.inputItem}>
                    <p className={styles.inputItem__text}>Card Number</p>
                    <input 
                    name="number"
                    type="text" 
                    autoFocus
                    onChange={this.handleNumber}
                    onFocus={this.handleFocus}
                    maxLength={19}
                    ></input>
                </div>
                <div className={styles.inputItem}>
                    <p className={styles.inputItem__text}>Card Holder</p>
                    <input 
                    type="text" 
                    name="name"
                    onChange={this.handleHolder}
                    onFocus={this.handleFocus}
                    ></input>
                </div>
                <div className={styles.inputItem}>
                    <p className={styles.inputItem__text}>Date</p>
                    <input 
                    type="number" 
                    name="data"
                    placeholder="Month" 
                    min="1" 
                    max="12"
                    onChange={this.handleMonth}
                    onFocus={this.handleFocus}
                    ></input>
                    <input 
                    type="number" 
                    name='data'
                    placeholder="Year" 
                    min="1950"
                    max="2020"
                    onChange={this.handleYear}
                    onFocus={this.handleFocus}
                    ></input>
                </div>
                <div className={styles.inputItem}>
                    <p className={styles.inputItem__text}>CVV</p>
                    <input 
                    type="number" 
                    placeholder="CVV" 
                    name="cvv"
                    min="1" 
                    max="999"
                    onChange={this.handleCvv}
                    onFocus={this.handleFocus}
                    ></input>
                </div>
                <div className={styles.inputBlock__btn}>
                    Submit
                </div>
            </div>
        )
    }
}