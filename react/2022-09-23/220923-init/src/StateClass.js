import React, {Component} from 'react';


// Class 컴포넌트에서 부모 클래스는 ? => React.Component
class StateClass extends Component{
    // constructor(props){
    //     // super => 자식 클래스가 생성될 때 부모 클래스의 생성자를 참조
    //     // props를 전달하는 이유? => props를 초기화하기 위한 과정
    //     super(props);

    //     this.state = {
    //         name : 'SeSAC',
    //         list : ['s', 'e', 's', 'a', 'c']
    //     };
    // }



    state = {
        name : 'SeSAC',
        cnt : 0,
        list : ['s', 'e', 's', 'a', 'c']
    }






    render(){
        return(
            <div>
                <div>{this.state.name} StateClass {this.state.cnt}</div>
                <button onClick={() => {
                    // cnt => 비동기 처리(바로 실행하지 않고 기다린다.)
                    // 0 -> 1
                    // this.setState({name : '청년취업사관학교', cnt:this.state.cnt + 1});
                    // 0 -> 1
                    // this.setState({name : '영등포 캠퍼스', cnt:this.state.cnt + 1});

                    
                    // 순서대로 실행 시키고 싶다면 함수를 넣어야 한다.
                    // 하나를 실행하고 실행한 값을 받은 뒤 실행한다. (너무 빨라서 사람의 눈에는 0 -> 2로 보이지만 실제로는 0 -> 1 -> 2)
                    this.setState(prevState => {
                        return {cnt : prevState.cnt + 1}
                    });

                    this.setState(prevState => {
                        return {cnt : prevState.cnt + 1}
                    });
                }}>클릭</button>


                <button onClick={() => {
                    this.setState({list : ['c', 'l', 'i', 'c', 'k']})
                }}>클릭2</button>
                
                <ul>
                    {/* map : 반복문을 사용하기 위해 정의한다. */}
                    {this.state.list.map((txt) => {
                        return <li>{txt}</li>
                    })}
                </ul>
            </div>
        );
    }
}


export default StateClass;
