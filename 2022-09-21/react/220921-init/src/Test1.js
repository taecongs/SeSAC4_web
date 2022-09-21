import React, {Component} from 'react';
import './Test1.css';


class Test1 extends Component{
    render(){
        return(
            <div className = 'my_style'>
                <h5>{this.props.name}</h5>
            </div>
        );
    }
}


export default Test1;
