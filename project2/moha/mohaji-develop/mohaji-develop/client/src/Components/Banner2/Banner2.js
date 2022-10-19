import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Banner2.scss';


import banner_img1 from './img/s1_back01.png';
import banner_img2 from './img/s1_back02.png';

import fire_work1 from './img/firework01.png';
import fire_work2 from './img/firework02.png';
import fire_work3 from './img/firework03.png';
import fire_work4 from './img/firework04.png';



const Banner2 = ({ timeline, ease }) => {
    let image1 = useRef(null);
    let image2 = useRef(null);
    let image3 = useRef(null);

    let text1 = useRef(null);
    let text2 = useRef(null);
    let text3 = useRef(null);

    let fireWork1 = useRef(null);
    let fireWork2 = useRef(null);
    let fireWork3 = useRef(null);
    let fireWork4 = useRef(null);

    // 배경 애니메이션 효과
    useEffect(() => {
        timeline.from(image1, 0.6, {
            y: 1000,
            transformOrigin: 'bottom center',
            ease: ease,
        });
        timeline.from(image2, 0.6, {
            y: 750,
            transformOrigin: 'bottom center',
            ease: ease,
        });
        timeline.from(image3, 0.6, {
            y: 550,
            transformOrigin: 'bottom center',
            ease: ease,
        });
    });


    // 텍스트 애니메이션 효과
    useEffect(() => {
        timeline.from(text1, 0.6, {
            opacity : 0,
            y:100,
            stagger : {
                amount : .4
            }
        });

        timeline.from(text2, 0.6, {
            opacity : 0,
            y:100,
            stagger : {
                amount : .4
            }
        });

        timeline.from(text3, 0.6, {
            opacity : 0,
            y:100,
            stagger : {
                amount : .4
            }
        });
    })


    // 폭죽 애니메이션 효과
    useEffect(() => {
        timeline.from(fireWork1, {
            scale : 0,
            repeat: -1,
            repeatDelay : 3,
        });

        timeline.from(fireWork2, {
            scale : 0,
            repeat: -1,
            repeatDelay : 3,
        });

        timeline.from(fireWork3, {
            scale : 0,
            repeat: -1,
            repeatDelay : 3,
        });

        timeline.from(fireWork4, {
            scale : 0,
            repeat: -1,
            repeatDelay : 3,
        });
    })

    return (
        <section>
            <div className='bannerBox'>

                <div className="imgwork">
                    <div className="pp p_01">
                        <img src={banner_img1} alt="" />
                    </div>
                    <div className="pp p_02">
                        <img src={banner_img2} alt="" />
                    </div>
                </div>

                <div className="firework">
                    <div className="f_01 ff" ref={el => fireWork1 = el} style={{ transform: 'translate3d(0px, 0px, 0px) scale(0.9184, 0.918403)' }}>
                        <img src={fire_work1} alt="" />
                    </div>
                    <div className="f_02 ff" ref={el => fireWork2 = el} style={{ transform: 'translate3d(0px, 0px, 0px) scale(0.9184, 0.918403)' }}>
                        <img src={fire_work2} alt="" />
                    </div>
                    <div className="f_03 ff" ref={el => fireWork3 = el} style={{ transform: 'translate3d(0px, 0px, 0px) scale(0.9184, 0.918403)' }}>
                        <img src={fire_work3} alt="" />
                    </div>
                    <div className="f_04 ff" ref={el => fireWork4 = el} style={{ transform: 'translate3d(0px, 0px, 0px) scale(0.9184, 0.918403)' }}>
                        <img src={fire_work4} alt="" />
                    </div>
                </div>

                <div className="bgwork">
                    <div className="b_01 bb" ref={el => image3 = el} style={{ transform: 'translate(0px, 0px)', transformOrigin: '50% 100%' }}></div>
                    <div className="b_02 bb" ref={el => image2 = el} style={{ transform: 'translate(0px, 0px)', transformOrigin: '50% 100%' }}></div>
                    <div className="b_03 bb" ref={el => image1 = el} style={{ transform: 'translate(0px, 0px)', transformOrigin: '50% 100%' }}></div>
                </div>


                <div className="tbx">
                    <div className="im1" ref={el => text1 = el} style={{ opacity: 1, transform: 'translate(0px, 0px)' }}>
                        <h1>내일 <br />뭐하지?</h1>
                    </div>

                    <div className='im2' ref={el => text2 = el} style={{ opacity: 1, transform: 'translate(0px, 0px)' }}>
                        <p>전시회 및 축제 등의 이벤트 일정 제공 사이트</p>
                    </div>


                    <div className='im3' ref={el => text3 = el} style={{ opacity: 1, transform: 'translate(0px, 0px)' }}>
                        <p><Link className='search_btn' to='/gang'>지역 검색</Link></p>
                    </div>
                </div>

            </div>


            <div className='waveBox'>
                <div class="w">
                    <div class="wave"></div>
                </div>
            </div>
        </section>
    );
}

export default Banner2;