import React, {Component} from 'react';

export class ThemeButton extends Component {

    handleClick = (event) => {
        console.log(
            `ThemeButton: Type: ${event.type}` + 
            `Target: ${event.target.tagName}` +
            `CurrentTarget: ${event.currentTarget.tagName}`
        );
        this.props.callback(this.props.theme)

    }
    render(){
        return (
            <>
            <span className="m-1" onClickCapture={this.handleClick} onClick={this.handleClick}>
                <button className={`btn btn-${this.props.theme}`} onClick={this.handleClick}>
                    Wybierz temat "{this.props.theme}"
                </button>
            </span>
            </>
        )
    }
}
