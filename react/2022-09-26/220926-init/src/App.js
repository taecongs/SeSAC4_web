import React, { useState } from 'react';


function App() {
    const [list, setList] = useState(['test', 'test2', 'apple', 'sesac', 'animal']);

    function filterCheck() {
        let lists = ['test', 'test2', 'apple', 'sesac', 'animal'];
        let newLists = [...lists, 'dog'];


        // filter => for문
        let newList = [];
        for (let i = 0; i < lists.length; i++) {
            if (lists[i].length > 4) newList.push(lists[i]);
        }

        // for문 => filter
        newList = lists.filter((value) => {
            return value.length > 4;
        })
    }


    function addElement() {
        console.log([...list, 's']);
        // ...란? 전개 연산자
        setList([...list, 's']);


        // map => for문
        let newList = [];
        for (let i = 0; i < list.length; i++) {
            console.log(i);
            console.log(list[i]);
            newList.push(i + list[i]);
        }

        // for문 => map
        newList = list.map((value, i) => {
            console.log(i);
            console.log(value);
            return i + value;
        })

        console.log(newList);
    }


    return (
        <div>
            <ul>
                {list.map((name, i) => {
                    return <li key={"li_"+ i}> {name}</li>
                })}
            </ul>

            <ul>
                {list.filter((name) => {
                    return name.includes('a');
                })}
            </ul>

            <button onClick={addElement}>추가</button>
        </div>
    );
}

export default App;