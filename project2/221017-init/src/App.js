import './App.css';

function App() {
  return (
    <div>
      <section className="s01">

        <div className="p">
          <div className="pp p_01">
            <img src="./s1_back01.png" alt="" />
          </div>
          <div className="pp p_02">
            <img src="./s1_back02.png" alt="" />
          </div>
        </div>

        <div className="firework">
          <div className="f_01 ff" style={{transform: 'translate(0px, 0px)'}}>
            <img src="./firework01.png" alt="" />
          </div>
          <div className="f_02 ff" style={{transform: 'translate(0px, 0px)'}}>
            <img src="./firework02.png" alt="" />
          </div>
          <div className="f_03 ff" style={{transform: 'translate(0px, 0px)'}}>
            <img src="./firework03.png" alt="" />
          </div>
          <div className="f_04 ff" style={{transform: 'translate(0px, 0px)'}}>
            <img src="./firework04.png" alt="" />
          </div>
        </div>

        <div className="b">
          <div className="b_01 bb" style={{transform: 'translate(0px, 0px)', transformOrigin: '50% 100%'}}></div>
          <div className="b_02 bb" style={{transform: 'translate(0px, 0px)', transformOrigin: '50% 100%'}}></div>
          <div className="b_03 bb" style={{transform: 'translate(0px, 0px)', transformOrigin: '50% 100%'}}></div>
        </div>

        <div className="tbx">
          {/* <div className="im" style={{opacity: 1, transform: 'translate(0px, 0px)'}}>
            <img src="./s1_m1.png" alt="" />
          </div> */}

          <div className='im' style={{opacity: 1, transform: 'translate(0px, 0px)'}}>
            <h1>내일 뭐하지?</h1>
          </div>
          
          <p style={{opacity: 1, transform: 'translate(0px, 0px)'}}>2022.10.13(목)~16(일) / 4일간</p>
          <h2 style={{opacity: 1, transform: 'translate(0px, 0px)'}}>노들섬</h2>
        </div>

      </section>

      <section class="s02">
        <div class="w">
            <div class="wave" style={{backgroundImage:'url(./w_wave.png)'}}></div>
        </div>
    </section>       
    </div>
  );
}

export default App;
