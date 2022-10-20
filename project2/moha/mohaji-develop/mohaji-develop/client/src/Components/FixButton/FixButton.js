import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import './FixButton.scss';




const FixButton = () => {
    const [ScrollY, setScrollY] = useState(0);
    const [scrollActive, setScrollActive] = useState(0);

    function handleScroll() {
        console.log('스크롤 이벤트');
        if (ScrollY > 150 && !scrollActive) {
            // scroll 값을 가져오기
            setScrollY(window.pageYOffset);
            setScrollActive(true);
            return;
        } else {
            setScrollY(window.pageYOffset);
            setScrollActive(false);
            return;
        }
    }

    useEffect(() => {
        function scrollListener() {
            //  window 에서 스크롤을 감시 시작
            window.addEventListener("scroll", handleScroll);
        } 
        // window 에서 스크롤을 감시
        scrollListener(); 
        return () => {
            //  window 에서 스크롤을 감시를 종료
            window.removeEventListener("scroll", handleScroll);
        };
    });


    return (
        <div class="ont_plus">
            <Link className='fix_a one_a'>
                <div className="onTicket">
                    <div className={scrollActive ? "transBack" : "back"}></div>
                    <div className="circle">
                        <dl>
                            <dt>
                                <img src="/img/icon/ticket_icon.png" alt="" />
                            </dt>
                            <dd>
                                일반좌석<br />예약하기
                            </dd>
                        </dl>
                    </div>
                </div>
            </Link>

            <Link className='fix_a two_a'>
                <div className="onTicket">
                    <div></div>
                    <div className="circle">
                        <dl>
                            <dt>
                                <img src="/img/icon/ticket_icon.png" alt="" />
                            </dt>
                            <dd>
                                일반좌석<br />예약하기
                            </dd>
                        </dl>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default FixButton;