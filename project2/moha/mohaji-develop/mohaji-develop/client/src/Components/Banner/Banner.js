import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

import './Banner.scss';
import banner_img1 from './img/top_sky.jpg';
import banner_img2 from './img/top_leaf01.png';
import banner_img3 from './img/top_leaf02.png';
import banner_title from './img/topTitle01_01.png';
import bannger_earth from './img/top_knoll01.png';
import banner_person from './img/top_knoll02.png';
import banner_wave from './img/w_wave.png';


const Banner = () => {
    return (
        <section>
            <div className='bannerArea banner01 bannerActive' style={{ minHeight: '937px' }}>
                <div className='topVisual'>
                    <img src={banner_img1} className="top_sky" alt='top_sky' />
                    <img src={banner_img2} className="top_leaf01" alt='top_leaf01' />
                    <img src={banner_img3} className="top_leaf02" alt='top_leaf02' />

                    <div className="topTitle01">
                        <img src={banner_title} className="topTitle01_01" alt='top_leaf01' />
                        <h1 className='banner_h1'>내일뭐하지?</h1>
                    </div>

                    <div className='topRound'>
                        <img src={bannger_earth} className="top_knoll01" alt='green_bottom' />
                        <img src={banner_person} className="top_knoll02" alt='person' />
                    </div>

                    <div className='topNav'>
                        <ul>
                            <li><Link className='mapNav' to='/gang'>강서구</Link></li>
                            <li><Link className='mapNav' to='/'>강남구</Link></li>
                            <li><Link className='mapNav' to='/'>강동구</Link></li>
                            <li><Link className='mapNav' to='/'>강서구</Link></li>
                            <li><Link className='mapNav' to='/'>구로구</Link></li>
                            <li><Link className='mapNav' to='/'>관악구</Link></li>
                            <li><Link className='mapNav' to='/'>광진구</Link></li>
                            <li><Link className='mapNav' to='/'>노원구</Link></li>
                            <li><Link className='mapNav' to='/'>도봉구</Link></li>
                            <li><Link className='mapNav' to='/'>동대문구</Link></li>
                            <li><Link className='mapNav' to='/'>동작구</Link></li>
                            <li><Link className='mapNav' to='/'>마포구</Link></li>
                            <li><Link className='mapNav' to='/'>성북구</Link></li>
                            <li><Link className='mapNav' to='/'>서대문구</Link></li>
                            <li><Link className='mapNav' to='/'>성동구</Link></li>
                            <li><Link className='mapNav' to='/'>서초구</Link></li>
                            <li><Link className='mapNav' to='/'>송파구</Link></li>
                            <li><Link className='mapNav' to='/'>은평구</Link></li>
                            <li><Link className='mapNav' to='/'>용산구</Link></li>
                            <li><Link className='mapNav' to='/'>영등포구</Link></li>
                            <li><Link className='mapNav' to='/'>양천구</Link></li>
                            <li><Link className='mapNav' to='/'>종로구</Link></li>
                            <li><Link className='mapNav' to='/'>중구</Link></li>
                            <li><Link className='mapNav' to='/'>중랑구</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="s02">
                <div className="w">
                    <div className="wave"></div>
                </div>
            </div>
        </section>
    );
}

export default Banner;