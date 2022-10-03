import React, {Component, createRef} from 'react';


class Ref extends Component{
    clickBtn1 = () => {
        let input = document.querySelector('#input1');
        console.log(input.value);
        input.value = '';
    }


    clickBtn2 = () => {
        console.log(this.input.value);
        this.input.value = '';
    }
    

    inputText = createRef();

    clickBtn3 = () => {
        console.log(this.inputText.current.value);
        this.inputText.current.value = '';
    }

    render(){
        return(
            <div>
                <h1>Ref 실습</h1>

                <div>
                    <input type='text' id='input1' placeholder='기본값' />
                    <button type='button' onClick={this.clickBtn1}>클릭1</button>
                </div>

                <div>
                    <input type='text' placeholder='기본값2' ref={(ref) => {this.input = ref} } />
                    <button onClick={this.clickBtn2}>클릭2</button>
                </div>
                
                <div>
                    <input type='text' placeholder='기본값3' ref={this.inputText} />
                    <button type='button' onClick={this.clickBtn3}>클릭3</button>
                </div>
            </div>
        );
    }
}


export default Ref;