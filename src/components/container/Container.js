import React, { Component } from 'react';
import Button from '../button/Button';
import Util from '../../Util';

class Container extends Component {
    state = {
        active: false
    }
    onBtnClick = () => {
        this.setState({
            active: !this.state.active
        });
    }
    render(){
        return (
            <div>
                { this.state.active ? <span>Active Container</span>: null }
                <h2>{Util.getContainerTitle()}</h2>
                Container content
                <Button onClick={this.onBtnClick}>
                    Hello
                </Button>
            </div>
        )   
    }
}

export default Container;