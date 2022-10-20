import { useState, useEffect } from "react";
import "../Components/style.css";

function App5() {
    const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
    const [ScrollActive, setScrollActive] = useState(false);
    function handleScroll() {
        if (ScrollY > 299) {
            setScrollY(window.pageYOffset);
            setScrollActive(true);
        } else {
            setScrollY(window.pageYOffset);
            setScrollActive(false);
        }
    }
    useEffect(() => {
        function scrollListener() {
            window.addEventListener("scroll", handleScroll);
        } //  window 에서 스크롤을 감시 시작
        scrollListener(); // window 에서 스크롤을 감시
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }; //  window 에서 스크롤을 감시를 종료
    });

    return (
        <div className="App">
            {/* <div className={ScrollActive ? "fixedBox fixed" : "fixedBox"}>
                {ScrollActive ? "I am fixed! 😎" : "I will be fixed! 😘"}
            </div> */}
            {/* <ElementScroll/> */}
            <div className="content" style={{ fontSize: "22px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at nihil
                sit fugit adipisci aperiam alias enim sed voluptates quo! Quam inventore
                officia commodi laudantium amet in sunt est quasi. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at nihil
                sit fugit adipisci aperiam alias enim sed voluptates quo! Quam inventore
                officia commodi laudantium amet in sunt est quasi. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at nihil
                sit fugit adipisci aperiam alias enim sed voluptates quo! Quam inventore
                officia commodi laudantium amet in sunt est quasi. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at nihil
                sit fugit adipisci aperiam alias enim sed voluptates quo! Quam inventore
                officia commodi laudantium amet in sunt est quasi. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at nihil
                sit fugit adipisci aperiam alias enim sed voluptates quo! Quam inventore
                officia commodi laudantium amet in sunt est quasi. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at nihil
                sit fugit adipisci aperiam alias enim sed voluptates quo! Quam inventore
                officia commodi laudantium amet in sunt est quasi. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at nihil
                sit fugit adipisci aperiam alias enim sed voluptates quo! Quam inventore
                officia commodi laudantium amet in sunt est quasi. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at nihil
                sit fugit adipisci aperiam alias enim sed voluptates quo! Quam inventore
                officia commodi laudantium amet in sunt est quasi. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at nihil
                sit fugit adipisci aperiam alias enim sed voluptates quo! Quam inventore
                officia commodi laudantium amet in sunt est quasi. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at nihil
                sit fugit adipisci aperiam alias enim sed voluptates quo! Quam inventore
                officia commodi laudantium amet in sunt est quasi. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at nihil
                sit fugit adipisci aperiam alias enim sed voluptates quo! Quam inventore
                officia commodi laudantium amet in sunt est quasi. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at nihil
                sit fugit adipisci aperiam alias enim sed voluptates quo! Quam inventore
                officia commodi laudantium amet in sunt est quasi. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at nihil
                sit fugit adipisci aperiam alias enim sed voluptates quo! Quam inventore
                officia commodi laudantium amet in sunt est quasi. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at nihil
                sit fugit adipisci aperiam alias enim sed voluptates quo! Quam inventore
                officia commodi laudantium amet in sunt est quasi. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at nihil
                sit fugit adipisci aperiam alias enim sed voluptates quo! Quam inventore
                officia commodi laudantium amet in sunt est quasi. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at nihil
                sit fugit adipisci aperiam alias enim sed voluptates quo! Quam inventore
                officia commodi laudantium amet in sunt est quasi. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at nihil
                sit fugit adipisci aperiam alias enim sed voluptates quo! Quam inventore
                officia commodi laudantium amet in sunt est quasi. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at nihil
                sit fugit adipisci aperiam alias enim sed voluptates quo! Quam inventore
                officia commodi laudantium amet in sunt est quasi. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at nihil
                sit fugit adipisci aperiam alias enim sed voluptates quo! Quam inventore
                officia commodi laudantium amet in sunt est quasi. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at nihil
                sit fugit adipisci aperiam alias enim sed voluptates quo! Quam inventore
                officia commodi laudantium amet in sunt est quasi. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at nihil
                sit fugit adipisci aperiam alias enim sed voluptates quo! Quam inventore
                officia commodi laudantium amet in sunt est quasi. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at nihil
                sit fugit adipisci aperiam alias enim sed voluptates quo! Quam inventore
                officia commodi laudantium amet in sunt est quasi. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at nihil
                sit fugit adipisci aperiam alias enim sed voluptates quo! Quam inventore
                officia commodi laudantium amet in sunt est quasi. <br />
            </div>
        </div>
    );
}

export default App5;