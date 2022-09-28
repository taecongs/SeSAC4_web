import React, { Component, createRef} from 'react';

class Ref extends Component {
    event1 = () => {
        let input = document.querySelector('#input1');
        console.log(input.value);
    }

    event2 = () => {
        console.log(this.input.value);
    }

    // 클래스형에서는 createRef
    input3 = createRef();

    event3 = () => {
        // 요소 자체가 current에 담겨있기 때문에 항상 정의해야한다.
        console.log(this.input3.current.value);
    }


    render() {
        return (
            <div>
                <div>
                    {/* id를 사용했기 때문에 중복된다. */}
                    <input type='text' id='input1' />
                    <button type='button' onClick={this.event1}>클릭1</button>
                </div>

                <div>
                    {/* (ref) => {} : ref를 선언하는 콜백함수  */}
                    <input type='text' ref={(ref) => {this.input = ref}} />
                    <button type='button' onClick={this.event2}>클릭2</button>
                </div>  
                
                <div>
                    <input type='text' ref={this.input3}/>
                    <button type='button' onClick={this.event3}>클릭3</button>
                </div>  
            </div>
        );
    }
}


export default Ref;