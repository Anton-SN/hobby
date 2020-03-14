import React, { Component } from "react";
import styles from "./Card.module.css";
import CardImage from './CardImage/CardImage'
import CardInput from './CardInput/CardInput'

export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: [
                "#", "#", "#", "#", " ",
                "#", "#", "#", "#", " ",
                "#", "#", "#", "#", " ",
                "#", "#", "#", "#"
            ],
            name: 'Full Name',
            month: 'MM',
            year: 'YY',
            cvv: 'CVV',
            changeParam: null,
        }
    }

    handleData = data => {
        this.setState({
            ...data
        })
    }

    render() {
        return (
            <div className={styles.Container}>
                <CardImage 
                    number={this.state.number}
                    name={this.state.name}
                    month={this.state.month}
                    year={this.state.year}
                    cvv={this.state.cvv}
                    changeParam={this.state.changeParam}
                />
                <CardInput 
                    onChange={this.handleData}
                    params={this.state}
                />
            </div>
        )
    }
}