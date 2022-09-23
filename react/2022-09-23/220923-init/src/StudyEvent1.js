import React from 'react';


function StudyEvent1(){
    function clickEvent(e){
        console.log(e);
    }

    function aClick(e){
        // preventDefault() : 기본 동작 막기
        e.preventDefault();
        console.log('aClick');
        console.log(e);
    }

    return(
        <div>
            <h1>함수형</h1>
            <a href='#' onClick={aClick}>a태그</a>
            <button onClick={clickEvent}>클릭</button>
        </div>
    );
}


export default StudyEvent1;