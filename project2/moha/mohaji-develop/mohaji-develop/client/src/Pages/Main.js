import Component from '../Components/Component';
import Map from '../Components/Map';
import ImageMap from '../Components/ImageMap';
import Button from '../Components/Button';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';


import {gsap, Power3} from 'gsap';
import Banner2 from '../Components/Banner2/Banner2';


const Main = () => {
    let tl = new gsap.timeline();
    let ease = Power3.easeOut;
    return (
        <div>
            <Banner />
            <Banner2 timeline={tl} ease={ease} />
            {/* <Component /> */}
            {/* <Map /> */}
            {/* <ImageMap /> */}
            {/* <Button /> */}
        </div>
    )
}

export default Main;