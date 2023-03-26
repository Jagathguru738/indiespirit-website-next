import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import Header from '../components/header'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Indiespirit-Website</title>
          <meta property="og:title" content="Indiespirit-Website" />
        </Head>
        <Header rootClassName="header-root-class-name2"></Header>
        
        <section className="home-container1" data-aos="fade-down" data-aos-duration="1000">
          <span className="home-text">
            <span className="home-text001" data-aos="fade-down" data-aos-duration="1000">Creative</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text003" data-aos="fade-down" data-aos-duration="1000">studio for </span>
            <br className="home-text004"></br>
            <span className="home-text005" data-aos="fade-down" data-aos-duration="1000">world-class brands</span>
            <span className="home-text006">*</span>
            <br></br>
            <br></br>
          </span>
          <span className="home-text009">
            <span className="home-text010" data-aos="fade-down" data-aos-duration="1000">*</span>
            <span className="home-text011" data-aos="fade-down" data-aos-duration="1000">
              And for the ones with grand ambitions
            </span>
          </span>
          <video data-aos="fade-up" data-aos-duration="1000"
            src="/playground_assets/payments%20reimagined%20_%20scan%20%26%20pay%20with%20cred.mp4"
            muted
            poster="https://play.teleporthq.io/static/svg/videoposter.svg"
            preload="auto"
            autoPlay
            
            className="home-video1"
          ></video>
          <div className="home-div">
            <DangerousHTML
              html={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
    <script>
        let x = 1;
while (x <= 12) {
  let plane = document.createElement('div');
  plane.className = \`plane plane-\${x}\`;
  plane.style.transform = \`rotateY(\${x * 15}deg)\`;
  document.querySelector('.sphere-wrapper').appendChild(plane);
  for (y = 1; y <= 36; y++) {
    let spoke = document.createElement('div');
    spoke.className = \`spoke spoke-\${y}\`;
    spoke.innerHTML = \` <div class="dot" style="background-color:\${
      y % 2 === 0 ? '#ffdd1a' : '#00164e'
    }; animation: pulsate .5s infinite \${aDelay(y)}s alternate both"></div>\`;
    spoke.style.transform = \`rotateZ(\${y}0deg)\`;
    document.querySelector(\`.plane-\${x}\`).appendChild(spoke);
  }
  x++;
}
function aDelay(t) {
  switch (t) {
    case 1:
    case 35:
      return 0.05;
    case 2:
    case 34:
      return 0.1;
    case 3:
    case 33:
      return 0.15;
    case 4:
    case 34:
      return 0.2;
    case 5:
    case 33:
      return 0.25;
    case 6:
    case 30:
      return 0.3;
    case 7:
    case 29:
      return 0.35;
    case 8:
    case 28:
      return 0.4;
    case 9:
    case 27:
      return 0.45;
    case 10:
    case 26:
      return 0.5;
    case 11:
    case 25:
      return 0.55;
    case 12:
    case 24:
      return 0.6;
    case 13:
    case 23:
      return 0.65;
    case 14:
    case 22:
      return 0.7;
    case 15:
    case 21:
      return 0.75;
    case 16:
    case 20:
      return 0.8;
    case 17:
    case 19:
      return 0.85;
    case 18:
      return 0.95;
    case 36:
      return 0;
    default:
      return 1;
  }
}
    </script>
    <style>
        * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  height: 100vh;
  
  
}
.main-wrapper {
  display: flex;
  position: absolute;
  transform-style: preserve-3d;
  perspective: 400px;
  inset: 0;
  align-items: center;
  justify-content: center;
}
.sphere-wrapper {
  transform-style: preserve-3d;
  width: 300px;
  height: 300px;
  position: relative;
  animation: rotate3d 15s linear infinite;
}
.plane {
  position: absolute;
  transform-style: preserve-3d;
  inset: 0;
}
.spoke {
  transform-origin: 0 0;
  transform-style: preserve-3d;
  position: absolute;
  left: 50%;
  top: 50%;
  height: 200px;
  width: 0;
}
.dot {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  left: -3px;
  top: 100%;
  transform: rotateX(90deg);
}
@keyframes rotate3d {
  0% {
    transform: rotate3d(1, 1, 1, 0deg);
  }
  25% {
    transform: rotate3d(1, 1, 1, 90deg);
  }
  50% {
    transform: rotate3d(1, 1, 1, 180deg);
  }
  75% {
    transform: rotate3d(1, 1, 1, 270deg);
  }
  100% {
    transform: rotate3d(1, 1, 1, 360deg);
  }
}
@keyframes pulsate {
  0% {
    transform: rotateX(90deg) scale(0.3) translateZ(20px);
  }
  100% {
    transform: rotateX(90deg) scale(1) translateZ(0);
  }
}
</style>
  </head>
  <body>
    <div class="main-wrapper">
      <div class="sphere-wrapper"></div>
    </div>
    
  </body>
</html>
`}
            ></DangerousHTML>
          </div>
        </section>
        <section className="home-container2" data-aos="fade-up" data-aos-duration="1000">
          <span className="home-text012">
            <span>We bring the experience wherever you connect</span>
            <br></br>
            <span>with your customers.</span>
            <span>
              We create
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              websites that
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>earn, brands that are seen and strategies that</span>
            <br></br>
            <span> work.</span>
            <span>
              The best
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>result comes when emotions</span>
            <br></br>
            <span> merge with data, t</span>
            <span>
              echnology with design
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              and your
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>company with ours.</span>
          </span>
          <span className="home-text030">
            <span>
              Experienced companies,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              new players or ferocious
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>startups</span>
          </span>
          <span className="home-text036" data-aos="fade-right" data-aos-duration="1000">ABOUT</span>
          <span className="home-text037" data-aos="fade-up" data-aos-duration="1000">Brand / UI &amp; UX / Front-end</span>
          <span className="home-text038" data-aos="fade-up" data-aos-duration="1000">Brand / UI &amp; UX / Front-end</span>
          <span className="home-text039" data-aos="fade-up" data-aos-duration="1000">Brand / UI &amp; UX / Front-end</span>
          <span className="home-text040" data-aos="fade-up" data-aos-duration="1000">Brand / UI &amp; UX / Front-end</span>
          <span className="home-text041" data-aos="fade-up" data-aos-duration="1000">Brand / UI &amp; UX / Front-end</span>
          <span className="home-text042" data-aos="fade-up" data-aos-duration="1000">Brand / UI &amp; UX / Front-end</span>
          <span className="home-text043" data-aos="fade-up" data-aos-duration="1000">Convo</span>
          <span className="home-text044" data-aos="fade-up" data-aos-duration="1000">Convo</span>
          <span className="home-text045" data-aos="fade-up" data-aos-duration="1000">Convo</span>
          <span className="home-text046" data-aos="fade-up" data-aos-duration="1000">Convo</span>
          <span className="home-text047" data-aos="fade-up" data-aos-duration="1000">Convo</span>
          <span className="home-text048" data-aos="fade-up" data-aos-duration="1000">Convo</span>
          <span className="home-text049" data-aos="fade-right" data-aos-duration="1000">OUR WORK</span>
          <img data-aos="fade-up" data-aos-duration="1000"
            alt="image"
            src="/playground_assets/rectangle%206l-600w.png"
            className="home-image"
          />
          <img data-aos="fade-up" data-aos-duration="1000"
            alt="image"
            src="/playground_assets/rectangle%206l-600w.png"
            className="home-image1"
          />
          <img data-aos="fade-up" data-aos-duration="1000"
            alt="image"
            src="/playground_assets/rectangle%206l-600w.png"
            className="home-image2"
          />
          <img data-aos="fade-up" data-aos-duration="1000"
            alt="image"
            src="/playground_assets/rectangle%206l-600w.png"
            className="home-image3"
          />
          <img data-aos="fade-up" data-aos-duration="1000"
            alt="image"
            src="/playground_assets/rectangle%206l-600w.png"
            className="home-image4"
          />
          <img data-aos="fade-up" data-aos-duration="1000"
            alt="image"
            src="/playground_assets/rectangle%206l-600w.png"
            className="home-image5"
          />
        </section>
        <section className="home-container3">
          <span className="home-text050" data-aos="fade-right" data-aos-duration="1000">SERVICES</span>
          <span className="home-text051" data-aos="fade-right" data-aos-duration="1000">Design</span>
          <span className="home-text052" data-aos="fade-right" data-aos-duration="1000">Marketing</span>
          <span className="home-text053" data-aos="fade-right" data-aos-duration="1000">Development</span>
          <span className="home-text054" data-aos="fade-left" data-aos-duration="1000">
            <span>
              We do what we do best.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>We don’t do what we’re</span>
            <br></br>
            <span>
              {' '}
              not
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>good at. Simple.</span>
          </span>
          <span className="home-text061"  data-aos="fade-left" data-aos-duration="1000">UI &amp; UX</span>
          <span className="home-text062" data-aos="fade-left" data-aos-duration="1000">Websites</span>
          <span className="home-text063" data-aos="fade-left" data-aos-duration="1000">Strategy</span>
          <span className="home-text064" data-aos="fade-left" data-aos-duration="1000">Naming</span>
          <span className="home-text065" data-aos="fade-left" data-aos-duration="1000">Photo &amp; video</span>
          <span className="home-text066" data-aos="fade-left" data-aos-duration="1000">Copywriting</span>
          <span className="home-text067" data-aos="fade-left" data-aos-duration="1000">Trademarks</span>
          <span className="home-text068" data-aos="fade-left" data-aos-duration="1000">Mobile apps</span>
          <span className="home-text069" data-aos="fade-left" data-aos-duration="1000">CMS</span>
          <span className="home-text070" data-aos="fade-left" data-aos-duration="1000">Web apps</span>
          <span className="home-text071" data-aos="fade-left" data-aos-duration="1000">eCommerce</span>
          <span className="home-text072" data-aos="fade-left" data-aos-duration="1000">APIs</span>
          <span className="home-text073" data-aos="fade-left" data-aos-duration="1000">Brand identity</span>
          <span className="home-text074" data-aos="fade-left" data-aos-duration="1000">Print</span>
          <span className="home-text075" data-aos="fade-left" data-aos-duration="1000">Motion design</span>
          <span className="home-text076" data-aos="fade-left" data-aos-duration="1000">Packaging</span>
          <span className="home-text077" data-aos="fade-left" data-aos-duration="1000">Mobile apps</span>
          <ul className="list home-ul">
            <li className="list-item" data-aos="fade-right" data-aos-duration="1000"></li>
          </ul>
          <li className="home-li01 list-item"></li>
          <li className="home-li02 list-item"></li>
          <li className="home-li03 list-item"></li>
          <li className="home-li04 list-item"></li>
          <li className="home-li05 list-item"></li>
          <li className="home-li06 list-item"></li>
          <li className="home-li07 list-item"></li>
          <li className="home-li08 list-item"></li>
          <li className="home-li09 list-item"></li>
          <li className="home-li10 list-item"></li>
          <li className="home-li11 list-item"></li>
          <li className="home-li12 list-item"></li>
          <li className="home-li13 list-item"></li>
          <li className="home-li14 list-item"></li>
          <li className="home-li15 list-item"></li>
          <li className="home-li16 list-item"></li>
          <li className="home-li17 list-item"></li>
        </section>
        <div className="home-container4">
          <span className="home-text078" data-aos="fade-left" data-aos-duration="1000">TESTIMONIALS</span>
          <span className="home-text079" data-aos="fade-left" data-aos-duration="1000">CEO at BookLocal</span>
          <span className="home-text080" data-aos="fade-left" data-aos-duration="1000">Sardor Umarov</span>
          <span className="home-text081" data-aos="fade-right" data-aos-duration="1000">
            <span>
              Happy clients who we
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>were </span>
            <span>pleased to work with</span>
          </span>
          <span className="home-text086" data-aos="fade-left" data-aos-duration="1000">
            <span>
              The website has generated a significant amount of traffic and
            </span>
            <br></br>
            <span>
              potential customers. Outloud was flexible in their
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              communication scheme and implemented any requested
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              product changes rapidly. They were professional in all their
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              interactions and displayed stand-out technical expertise.
            </span>
          </span>
          <img data-aos="fade-left" data-aos-duration="1000"
            alt="pastedImage"
            src="/playground_assets/pastedimage-hcau-1500h.png"
            className="home-pasted-image"
          />
          <img
            alt="image" data-aos="fade-right" data-aos-duration="1000"
            src="/playground_assets/image7-600w.jpg"
            className="home-image6"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-y2-1500h.png"
            className="home-pasted-image1"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-y2-1500h.png"
            className="home-pasted-image2"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-y2-1500h.png"
            className="home-pasted-image3"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-y2-1500h.png"
            className="home-pasted-image4"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-y2-1500h.png"
            className="home-pasted-image5"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-y2-1500h.png"
            className="home-pasted-image6"
          />
        </div>
        <section className="home-container5">
          <span className="home-text096" data-aos="fade-right" data-aos-duration="1000">
            <span className="home-text097">Let&apos;s start something </span>
            <br className="home-text098"></br>
            <span className="home-text099">completely new together</span>
            <br></br>
          </span>
          <span className="home-text101" data-aos="fade-right" data-aos-duration="1000">
            <span className="home-text102">
              Drop us a line, and we&apos;ll get in touch.
            </span>
            <br className="home-text103"></br>
            <span className="home-text104">
              We&apos;ll see if we&apos;re a match and how we can help
            </span>
            <br className="home-text105"></br>
            <span className="home-text106"> each other</span>
            <span>.</span>
          </span>
          <span className="home-text108" data-aos="fade-right" data-aos-duration="1000">E-MAIL</span>
          <span className="home-text109" data-aos="fade-left" data-aos-duration="1000">PHONE NUMBER</span>
          <span className="home-text110" data-aos="fade-right" data-aos-duration="1000">hello@outloud.com</span>
          <span className="home-text111" data-aos="fade-left" data-aos-duration="1000">+421 948 243 101</span>
          <Link href="/contactus">
            <a className="home-link button" data-aos="fade-left" data-aos-duration="1000">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M567.168 311.168c-16.683 16.683-16.683 43.648 0 60.331l97.835 97.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h323.669l-97.835 97.835c-16.683 16.683-16.683 43.648 0 60.331 8.32 8.32 19.243 12.501 30.165 12.501s21.845-4.181 30.165-12.501l200.832-200.832-200.832-200.832c-16.683-16.683-43.648-16.683-60.331 0z"></path>
              </svg>
              Contact Us
            </a>
          </Link>
          <div className="home-separator" data-aos="fade-right" data-aos-duration="1000"></div>
         
          <div className="home-separator2" data-aos="fade-right" data-aos-duration="1000"></div>
          <div className="home-separator3" data-aos="fade-right" data-aos-duration="1000"></div>
          <div className="home-separator4" data-aos="fade-right" data-aos-duration="1000"></div>
        </section>
        <Footer rootClassName="footer-root-class-name9"></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: 9000;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-video {
            width: 320px;
            height: 180px;
          }
          .home-container1 {
            top: 86px;
            left: 0px;
            width: 100%;
            height: 1500px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #f4f8fe;
          }
          .home-text {
            top: 120px;
            left: 100px;
            height: var(--dl-size-size-xxlarge);
            position: absolute;
            font-size: 130px;
          }
          .home-text001 {
            color: #ffdd1a;
          }
          .home-text003 {
            color: #00164e;
          }
          .home-text004 {
            color: #00164e;
          }
          .home-text005 {
            color: #00164e;
          }
          .home-text006 {
            color: #ffdd1a;
          }
          .home-text009 {
            top: 482px;
            left: 100px;
            position: absolute;
            font-size: 30px;
          }
          .home-text010 {
            color: #ffdd1a;
          }
          .home-text011 {
            color: #00164e;
          }
          .home-video1 {
            top: 720px;
            left: 100px;
            width: 1240px;
            bottom: -19px;
            height: 700px;
            position: absolute;
          }

          .home-video1:hover{
            transform: scale(1.5);
          }

          .home-div {
            top: 100px;
            left: 920px;
            width: 400px;
            height: 400px;
            position: absolute;
          }
          .home-container2 {
            top: 1576px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 3622px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #00164e;
          }
          .home-text012 {
            top: 122px;
            left: 416px;
            color: rgb(255, 255, 255);
            width: 917px;
            height: 152px;
            position: absolute;
            font-size: 24px;
          }
          .home-text030 {
            top: 394px;
            left: 416px;
            color: rgb(255, 255, 255);
            right: 143px;
            width: 839px;
            height: 264px;
            position: absolute;
            font-size: 70px;
          }
          .home-text036 {
            top: 126px;
            left: 101px;
            color: #546488;
            width: 57px;
            height: 24px;
            position: absolute;
            font-size: 16px;
          }
          .home-text037 {
            top: 1490px;
            left: 96px;
            color: rgb(84, 100, 136);
            width: 236px;
            height: 24px;
            position: absolute;
            font-size: 16px;
          }
          .home-text038 {
            top: 1618px;
            left: 837px;
            color: rgb(84, 100, 136);
            width: 236px;
            height: 24px;
            position: absolute;
            font-size: 16px;
          }
          .home-text039 {
            top: 3342px;
            left: 100px;
            color: rgb(84, 100, 136);
            width: 236px;
            height: 24px;
            position: absolute;
            font-size: 16px;
          }
          .home-text040 {
            top: 3478px;
            left: 837px;
            color: rgb(84, 100, 136);
            width: 236px;
            height: 24px;
            position: absolute;
            font-size: 16px;
          }
          .home-text041 {
            top: 2548px;
            left: 837px;
            color: rgb(84, 100, 136);
            width: 236px;
            height: 24px;
            position: absolute;
            font-size: 16px;
          }
          .home-text042 {
            top: 2412px;
            left: 100px;
            color: rgb(84, 100, 136);
            width: 236px;
            height: 24px;
            position: absolute;
            font-size: 16px;
          }
          .home-text043 {
            top: 1442px;
            left: 96px;
            color: rgb(255, 255, 255);
            width: 74px;
            height: 38px;
            position: absolute;
            font-size: 24px;
          }
          .home-text044 {
            top: 2498px;
            left: 837px;
            color: rgb(255, 255, 255);
            width: 74px;
            height: 38px;
            position: absolute;
            font-size: 24px;
          }
          .home-text045 {
            top: 3428px;
            left: 837px;
            color: rgb(255, 255, 255);
            width: 74px;
            height: 38px;
            position: absolute;
            font-size: 24px;
          }
          .home-text046 {
            top: 3292px;
            left: 100px;
            color: rgb(255, 255, 255);
            width: 74px;
            height: 38px;
            position: absolute;
            font-size: 24px;
          }
          .home-text047 {
            top: 2362px;
            left: 100px;
            color: rgb(255, 255, 255);
            width: 74px;
            height: 38px;
            position: absolute;
            font-size: 24px;
          }
          .home-text048 {
            top: 1568px;
            left: 837px;
            color: rgb(255, 255, 255);
            width: 74px;
            height: 38px;
            position: absolute;
            font-size: 24px;
          }
          .home-text049 {
            top: 406px;
            left: 101px;
            color: rgb(84, 100, 136);
            width: 87px;
            height: 24px;
            position: absolute;
            font-size: 16px;
          }
          .home-image {
            top: 832px;
            left: 100px;
            width: 503px;
            height: 580px;
            position: absolute;
            object-fit: cover;
          }
          .home-image1 {
            top: 968px;
            left: 837px;
            right: 100px;
            width: 503px;
            height: 580px;
            position: absolute;
            object-fit: cover;
          }
          .home-image2 {
            top: 1898px;
            left: 837px;
            right: 132px;
            width: 503px;
            height: 580px;
            position: absolute;
            object-fit: cover;
          }
          .home-image3 {
            top: 2828px;
            left: 837px;
            width: 503px;
            height: 580px;
            position: absolute;
            object-fit: cover;
          }
          .home-image4 {
            top: 2692px;
            left: 100px;
            width: 503px;
            height: 580px;
            position: absolute;
            object-fit: cover;
          }
          .home-image5 {
            top: 1762px;
            left: 100px;
            width: 503px;
            height: 580px;
            position: absolute;
            object-fit: cover;
          }
          .home-container3 {
            top: 5182px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 1262px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #f4f8fe;
          }
          .home-text050 {
            top: 133px;
            left: 100px;
            color: #546488;
            width: 78px;
            height: 24px;
            position: absolute;
            font-size: 16px;
          }
          .home-text051 {
            top: 547px;
            left: 417px;
            color: rgb(9, 14, 54);
            width: 133px;
            height: 64px;
            position: absolute;
            font-size: 40px;
          }
          .home-text052 {
            top: 1012px;
            left: 417px;
            color: rgb(9, 14, 54);
            width: 193px;
            height: 64px;
            position: absolute;
            font-size: 40px;
          }
          .home-text053 {
            top: 779px;
            left: 417px;
            color: rgb(9, 14, 54);
            width: 254px;
            height: 64px;
            position: absolute;
            font-size: 40px;
          }
          .home-text054 {
            top: 120px;
            left: 416px;
            color: #090e36;
            width: 925px;
            height: 264px;
            position: absolute;
            font-size: 70px;
          }
          .home-text061 {
            top: 556px;
            left: 733px;
            width: 102px;
            height: 32px;
            position: absolute;
            font-size: 20px;
          }
          .home-text062 {
            top: 789px;
            left: 733px;
            width: 102px;
            height: 32px;
            position: absolute;
            font-size: 20px;
          }
          .home-text063 {
            top: 1022px;
            left: 732px;
            width: 102px;
            height: 32px;
            position: absolute;
            font-size: 20px;
          }
          .home-text064 {
            top: 1066px;
            left: 732px;
            width: 102px;
            height: 32px;
            position: absolute;
            font-size: 20px;
          }
          .home-text065 {
            top: 1110px;
            left: 732px;
            width: 140px;
            bottom: 104px;
            height: 32px;
            position: absolute;
            font-size: 20px;
          }
          .home-text066 {
            top: 1022px;
            left: 1048px;
            width: 102px;
            bottom: 218px;
            height: 32px;
            position: absolute;
            font-size: 20px;
          }
          .home-text067 {
            top: 1066px;
            left: 1048px;
            width: 102px;
            bottom: 170px;
            height: 32px;
            position: absolute;
            font-size: 20px;
          }
          .home-text068 {
            top: 833px;
            left: 733px;
            width: 126px;
            height: 32px;
            position: absolute;
            font-size: 20px;
          }
          .home-text069 {
            top: 877px;
            left: 733px;
            width: 102px;
            height: 32px;
            position: absolute;
            font-size: 20px;
          }
          .home-text070 {
            top: 790px;
            left: 1048px;
            width: 102px;
            height: 32px;
            position: absolute;
            font-size: 20px;
          }
          .home-text071 {
            top: 834px;
            left: 1048px;
            width: 102px;
            height: 32px;
            position: absolute;
            font-size: 20px;
          }
          .home-text072 {
            top: 878px;
            left: 1048px;
            width: 102px;
            height: 32px;
            position: absolute;
            font-size: 20px;
          }
          .home-text073 {
            top: 556px;
            left: 1048px;
            width: 163px;
            height: 32px;
            position: absolute;
            font-size: 20px;
          }
          .home-text074 {
            top: 600px;
            left: 1048px;
            width: 102px;
            height: 32px;
            position: absolute;
            font-size: 20px;
          }
          .home-text075 {
            top: 644px;
            left: 1048px;
            width: 165px;
            height: 32px;
            position: absolute;
            font-size: 20px;
          }
          .home-text076 {
            top: 644px;
            left: 733px;
            width: 129px;
            height: 32px;
            position: absolute;
            font-size: 20px;
          }
          .home-text077 {
            top: 600px;
            left: 733px;
            width: 145px;
            height: 32px;
            position: absolute;
            font-size: 20px;
          }
          .home-li01 {
            top: 645px;
            left: 713px;
            position: absolute;
          }
          .home-li02 {
            top: 789px;
            left: 715px;
            position: absolute;
          }
          .home-li03 {
            top: 833px;
            left: 715px;
            position: absolute;
          }
          .home-li04 {
            top: 877px;
            left: 715px;
            position: absolute;
          }
          .home-li05 {
            top: 1021px;
            left: 713px;
            position: absolute;
          }
          .home-li06 {
            left: 713px;
            bottom: 175px;
            position: absolute;
          }
          .home-li07 {
            left: 713px;
            bottom: 133px;
            position: absolute;
          }
          .home-li08 {
            top: 791px;
            left: 1031px;
            position: absolute;
          }
          .home-li09 {
            top: 837px;
            left: 1031px;
            position: absolute;
          }
          .home-li10 {
            top: 879px;
            left: 1031px;
            position: absolute;
          }
          .home-li11 {
            top: 1023px;
            left: 1033px;
            position: absolute;
          }
          .home-li12 {
            left: 1033px;
            bottom: 177px;
            position: absolute;
          }
          .home-li13 {
            top: 645px;
            left: 1031px;
            position: absolute;
          }
          .home-li14 {
            top: 599px;
            left: 1031px;
            position: absolute;
          }
          .home-li15 {
            top: 557px;
            left: 1029px;
            position: absolute;
          }
          .home-li16 {
            top: 603px;
            left: 713px;
            position: absolute;
          }
          .home-li17 {
            top: 556px;
            left: 713px;
            position: absolute;
          }
          .home-container4 {
            top: 6440px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 1252px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text078 {
            top: 133px;
            left: 100px;
            color: #546488;
            width: 126px;
            height: 24px;
            position: absolute;
            font-size: 16px;
          }
          .home-text079 {
            top: 827px;
            left: 631px;
            color: rgb(84, 100, 136);
            width: 161px;
            bottom: 358px;
            height: 24px;
            position: absolute;
            font-size: 16px;
          }
          .home-text080 {
            top: 777px;
            left: 631px;
            color: #090e36;
            width: 172px;
            height: 38px;
            position: absolute;
            font-size: 24px;
          }
          .home-text081 {
            top: 120px;
            left: 417px;
            color: rgb(9, 14, 54);
            width: 916px;
            height: 176px;
            position: absolute;
            font-size: 70px;
          }
          .home-text086 {
            top: 542px;
            left: 631px;
            color: rgb(9, 14, 54);
            width: 706px;
            height: 190px;
            position: absolute;
            font-size: 24px;
            line-height: 1.5;
          }
          .home-pasted-image {
            top: 473.65px;
            left: 637px;
            width: 35.66px;
            height: 27.35px;
            position: absolute;
          }
          .home-image6 {
            top: 452px;
            left: 100px;
            width: 504px;
            height: 508px;
            position: absolute;
            object-fit: cover;
          }
          .home-pasted-image1 {
            top: 783px;
            left: 1049px;
            width: 200px;
            height: 32.21px;
            position: absolute;
          }
          .home-pasted-image2 {
            top: 1090px;
            right: 1259px;
            width: 200px;
            height: 32.21px;
            position: absolute;
          }
          .home-pasted-image3 {
            top: 1090px;
            left: 301px;
            width: 200px;
            bottom: 85px;
            height: 32.21px;
            position: absolute;
          }
          .home-pasted-image4 {
            top: 1090px;
            left: 621px;
            width: 200px;
            bottom: 89px;
            height: 32.21px;
            position: absolute;
          }
          .home-pasted-image5 {
            top: 1090px;
            left: 941px;
            width: 200px;
            bottom: 81px;
            height: 32.21px;
            position: absolute;
          }
          .home-pasted-image6 {
            top: 1090px;
            left: 1261px;
            right: 125px;
            width: 200px;
            bottom: 89px;
            height: 32.21px;
            position: absolute;
          }
          .home-container5 {
            top: 7678px;
            flex: 0 0 auto;
            left: -1px;
            width: 100%;
            bottom: 504px;
            height: 801px;
            display: flex;
            z-index: 100;
            position: absolute;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: flex-end;
            border-color: var(--dl-color-gray-black);
            border-style: solid;
            border-width: 1px;
            border-radius: 0px;
            flex-direction: column;
            justify-content: center;
            background-color: #00164e;
          }
          .home-text096 {
            top: 77px;
            left: 100px;
            position: absolute;
            font-size: 80px;
          }
          .home-text097 {
            color: #ffffff;
          }
          .home-text098 {
            color: #ffffff;
          }
          .home-text099 {
            color: #ffffff;
          }
          .home-text101 {
            top: 322px;
            left: 101px;
            position: absolute;
            font-size: 20px;
          }
          .home-text102 {
            color: #ffffff;
          }
          .home-text104 {
            color: #ffffff;
          }
          .home-text106 {
            color: #ffffff;
          }
          .home-text108 {
            top: 552px;
            left: 101px;
            color: #546488;
            position: absolute;
            font-size: 20px;
          }
          .home-text109 {
            top: 552px;
            left: 730px;
            color: #546488;
            position: absolute;
            font-size: 20px;
          }
          .home-text110 {
            top: 620px;
            left: 100px;
            color: #ffffff;
            position: absolute;
            font-size: 40px;
          }
          .home-text111 {
            top: 618px;
            left: 728px;
            color: rgb(255, 255, 255);
            position: absolute;
            font-size: 40px;
          }
          .home-link {
            top: 330px;
            left: 941px;
            width: 292px;
            height: 72px;
            position: absolute;
            font-size: 20px;
            font-style: normal;
            margin-top: 0px;
            font-weight: 500;
            padding-top: 20px;
            border-style: solid;
            padding-left: 30px;
            border-radius: 50px;
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: 25px;
            text-decoration: none;
            background-color: rgb(255, 221, 26);
          }
          .home-icon {
            top: 25px;
            left: 240px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .home-separator {
            top: 461px;
            flex: 0 0 auto;
            left: 101px;
            width: 90%;
            height: 0px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-style: ridge;
            border-width: 1px;
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-separator1 {
            top: -2024px;
            flex: 0 0 auto;
            right: 30px;
            width: 1000px;
            height: 0px;
            display: flex;
            opacity: 0.5;
            position: absolute;
            align-items: flex-start;
            border-color: #141313;
            border-style: ridge;
            border-width: 1px;
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-separator2 {
            top: -2024px;
            flex: 0 0 auto;
            right: 30px;
            width: 1000px;
            height: 0px;
            display: flex;
            opacity: 0.5;
            position: absolute;
            align-items: flex-start;
            border-color: #141313;
            border-style: ridge;
            border-width: 1px;
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-separator3 {
            top: -1782px;
            flex: 0 0 auto;
            right: 34px;
            width: 1000px;
            height: 0px;
            display: flex;
            opacity: 0.5;
            position: absolute;
            align-items: flex-start;
            border-color: #141313;
            border-style: ridge;
            border-width: 1px;
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-separator4 {
            top: -1551px;
            flex: 0 0 auto;
            right: 43px;
            width: 1000px;
            height: 0px;
            display: flex;
            opacity: 0.5;
            position: absolute;
            align-items: flex-start;
            border-color: #141313;
            border-style: ridge;
            border-width: 1px;
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          @media (max-width: 769px) {
            .home-container1 {
              height: 924px;
            }
            .home-text {
              left: 100px;
              height: 160px;
              font-size: 65px;
            }
            .home-text009 {
              top: 303px;
              left: 100px;
              font-size: 25px;
            }
            .home-video1 {
              top: 400px;
              left: 100px;
              width: 600px;
              height: 400px;
            }
            .home-container2 {
              top: 940px;
              left: 0px;
              height: 4324px;
              padding-bottom: 4px;
            }
            .home-text012 {
              top: 100px;
              left: 200px;
              color: rgb(255, 255, 255);
              right: var(--dl-space-space-halfunit);
              width: 630px;
              height: 100px;
              font-size: 15px;
              text-align: left;
            }
            .home-text030 {
              top: 295px;
              left: 200px;
              right: -69px;
              width: 600px;
              height: 200px;
              font-size: 45px;
            }
            .home-text036 {
              top: 100px;
              left: 100px;
            }
            .home-text037 {
              top: 1212px;
              left: 100px;
            }
            .home-text039 {
              top: 2740px;
              left: 100px;
              color: rgb(84, 100, 136);
              bottom: 816px;
              font-size: 16px;
            }
            .home-text040 {
              top: 3488px;
              left: 100px;
            }
            .home-text041 {
              top: 4250px;
              left: 100px;
              bottom: 594px;
            }
            .home-text042 {
              top: 1970px;
              left: 100px;
            }
            .home-text043 {
              top: 1174px;
              left: 100px;
            }
            .home-text044 {
              right: -274px;
              bottom: 518px;
            }
            .home-text045 {
              top: 3452px;
              left: 100px;
            }
            .home-text046 {
              top: 2700px;
              left: 100px;
              color: rgb(255, 255, 255);
              bottom: 742px;
              font-size: 24px;
            }
            .home-text047 {
              top: 1932px;
              left: 100px;
            }
            .home-text048 {
              top: 4218px;
              left: 100px;
            }
            .home-text049 {
              top: 300px;
              left: 100px;
            }
            .home-image {
              top: 558px;
              left: 100px;
              width: 550px;
              height: 600px;
            }
            .home-image1 {
              top: 2846px;
              left: 102px;
              width: 550px;
              height: 600px;
            }
            .home-image2 {
              top: 3602px;
              left: 98px;
              width: 550px;
              height: 600px;
            }
            .home-image4 {
              top: 2089px;
              left: 100px;
              width: 550px;
              height: 600px;
            }
            .home-image5 {
              top: 1318px;
              left: 100px;
              width: 550px;
              height: 600px;
            }
            .home-container3 {
              top: 5261px;
              left: -2px;
              height: 1056px;
            }
            .home-text051 {
              top: 390px;
              left: 100px;
            }
            .home-text052 {
              top: 800px;
              left: 100px;
            }
            .home-text053 {
              top: 600px;
              left: 100px;
            }
            .home-text054 {
              left: 200px;
              font-size: 50px;
            }
            .home-text061 {
              top: 410px;
              left: 400px;
            }
            .home-text062 {
              top: 620px;
              left: 400px;
            }
            .home-text063 {
              top: 820px;
              left: 400px;
            }
            .home-text064 {
              top: 870px;
              left: 400px;
            }
            .home-text065 {
              top: 920px;
              left: 400px;
            }
            .home-text066 {
              top: 820px;
              left: 600px;
            }
            .home-text067 {
              top: 870px;
              left: 600px;
            }
            .home-text068 {
              top: 670px;
              left: 400px;
            }
            .home-text069 {
              top: 720px;
              left: 400px;
            }
            .home-text070 {
              top: 620px;
              left: 600px;
            }
            .home-text071 {
              top: 670px;
              left: 600px;
            }
            .home-text072 {
              top: 720px;
              left: 600px;
            }
            .home-text073 {
              top: 410px;
              left: 600px;
            }
            .home-text074 {
              top: 460px;
              left: 600px;
            }
            .home-text075 {
              top: 510px;
              left: 600px;
            }
            .home-text076 {
              top: 510px;
              left: 400px;
            }
            .home-text077 {
              top: 460px;
              left: 400px;
            }
            .home-li01 {
              top: 510px;
              left: 390px;
            }
            .home-li02 {
              top: 620px;
              left: 390px;
            }
            .home-li03 {
              top: 670px;
              left: 390px;
            }
            .home-li04 {
              top: 720px;
              left: 390px;
            }
            .home-li05 {
              top: 820px;
              left: 390px;
            }
            .home-li06 {
              top: 870px;
              left: 390px;
            }
            .home-li07 {
              top: 920px;
              left: 390px;
            }
            .home-li08 {
              top: 620px;
              left: 590px;
            }
            .home-li09 {
              top: 670px;
              left: 590px;
            }
            .home-li10 {
              top: 720px;
              left: 590px;
            }
            .home-li11 {
              top: 820px;
              left: 590px;
            }
            .home-li12 {
              top: 870px;
              left: 590px;
            }
            .home-li13 {
              top: 410px;
              left: 590px;
            }
            .home-li14 {
              top: 460px;
              left: 590px;
            }
            .home-li15 {
              top: 510px;
              left: 590px;
            }
            .home-li16 {
              top: 460px;
              left: 390px;
            }
            .home-li17 {
              top: 410px;
              left: 390px;
            }
            .home-container4 {
              top: 6321px;
              left: 0px;
              height: 904px;
            }
            .home-text079 {
              top: 659px;
              left: 232px;
              right: 377px;
            }
            .home-text080 {
              top: 618px;
              left: 232px;
            }
            .home-text081 {
              left: 250px;
              font-size: 40px;
            }
            .home-text086 {
              top: 368px;
              left: 100px;
              right: -31px;
              font-size: 22px;
            }
            .home-pasted-image {
              top: 300px;
              left: 100px;
            }
            .home-image6 {
              top: 600px;
              left: 100px;
              width: 100px;
              height: 100px;
              padding-left: 2px;
              border-radius: var(--dl-radius-radius-round);
            }
            .home-pasted-image1 {
              top: 800px;
              left: 550px;
              right: 33px;
            }
            .home-pasted-image3 {
              top: 800px;
              left: -27px;
              bottom: 438px;
            }
            .home-pasted-image4 {
              top: 800px;
              left: 259px;
            }
            .home-container5 {
              top: 7230px;
              right: -1px;
              height: 601px;
            }
            .home-text096 {
              top: 88px;
              left: 100px;
              right: -166px;
              font-size: 50px;
            }
            .home-text101 {
              top: 227px;
              left: 100px;
            }
            .home-text108 {
              top: 440px;
              left: 100px;
            }
            .home-text109 {
              top: 440px;
              left: 450px;
              right: 137px;
            }
            .home-text110 {
              top: 470px;
              left: 100px;
              font-size: 30px;
            }
            .home-text111 {
              top: 470px;
              left: 450px;
              right: 78px;
              width: 300px;
              font-size: 30px;
            }
            .home-link {
              top: 310px;
              left: 100px;
              font-size: 20px;
              font-style: normal;
              font-weight: 500;
              text-decoration: none;
              background-color: rgb(255, 221, 26);
            }
            .home-icon {
              top: 25px;
              left: 240px;
              right: 33px;
              bottom: 21px;
            }
            .home-separator {
              top: 400px;
              left: 100px;
              width: 80%;
            }
            .home-separator1 {
              top: -3930px;
              right: 17px;
              width: 650px;
            }
            .home-separator2 {
              top: -1190px;
              left: 100px;
              width: 650px;
            }
            .home-separator3 {
              top: -1390px;
              left: 100px;
              right: 19px;
              width: 650px;
            }
            .home-separator4 {
              top: -1600px;
              left: 101px;
              width: 650px;
            }
          }
          @media (max-width: 767px) {
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-separator1 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-separator2 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-separator3 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-separator4 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 750px) {
            .home-text {
              top: 96px;
              right: 0px;
            }
            .home-container2 {
              width: 750px;
            }
            .home-text012 {
              top: 100px;
            }
            .home-text030 {
              top: 300px;
              right: -377px;
            }
            .home-text051 {
              left: 100px;
            }
            .home-text052 {
              left: 100px;
            }
            .home-text053 {
              left: 100px;
            }
            .home-text108 {
              top: 440px;
            }
            .home-text109 {
              top: 440px;
              width: 300px;
            }
            .home-text110 {
              top: 470px;
            }
            .home-text111 {
              top: 470px;
            }
            .home-link {
              top: 310px;
              left: 100px;
            }
            .home-separator {
              top: 400px;
            }
            .home-separator2 {
              top: -1190px;
              width: 640px;
            }
            .home-separator3 {
              top: -1390px;
              width: 640px;
            }
            .home-separator4 {
              top: -1600px;
              left: 100px;
              right: 100px;
              width: 640px;
            }
          }
          @media (max-width: 479px) {
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-separator1 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-separator2 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-separator3 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-separator4 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 376px) {
            .home-container1 {
              height: 520px;
            }
            .home-text {
              top: 80px;
              left: 16px;
              width: 350px;
              height: 100px;
              font-size: 35px;
            }
            .home-text009 {
              top: 170px;
              left: 16px;
              width: 300px;
              font-size: 15px;
            }
            .home-video1 {
              top: 264px;
              left: 16px;
              width: 340px;
              height: 200px;
            }
            .home-container2 {
              top: 602px;
              left: 0px;
              width: 376px;
              height: 4210px;
              margin-bottom: 0px;
            }
            .home-text012 {
              top: 136px;
              left: 15px;
              color: rgb(255, 255, 255);
              width: 380px;
              height: 165px;
              font-size: 15px;
            }
            .home-text030 {
              top: 426px;
              left: 16px;
              right: -18px;
              width: 380px;
              height: 150px;
              font-size: 30px;
            }
            .home-text036 {
              top: 70px;
              left: 16px;
            }
            .home-text037 {
              top: 1081px;
              left: 16px;
            }
            .home-text038 {
              top: 2876px;
              left: 16px;
            }
            .home-text039 {
              top: 2296px;
              left: 16px;
            }
            .home-text040 {
              top: 3500px;
              left: 16px;
            }
            .home-text041 {
              top: 4105px;
              left: 16px;
              bottom: 376px;
            }
            .home-text042 {
              top: 1694px;
              left: 16px;
            }
            .home-text043 {
              top: 1043px;
              left: 16px;
            }
            .home-text044 {
              top: 2842px;
              left: 16px;
            }
            .home-text045 {
              top: 3466px;
              left: 16px;
            }
            .home-text046 {
              top: 2264px;
              left: 16px;
            }
            .home-text047 {
              top: 1654px;
              left: 16px;
            }
            .home-text048 {
              top: 4070px;
              left: 16px;
            }
            .home-text049 {
              top: 360px;
              left: 16px;
            }
            .home-image {
              top: 660px;
              left: 16px;
              width: 340px;
              height: 360px;
            }
            .home-image1 {
              top: 2470px;
              left: 16px;
              width: 340px;
              height: 360px;
            }
            .home-image2 {
              top: 3098px;
              left: 16px;
              width: 340px;
              height: 360px;
            }
            .home-image3 {
              top: 3700px;
              left: 16px;
              width: 340px;
              bottom: 582px;
              height: 360px;
            }
            .home-image4 {
              top: 1882px;
              left: 16px;
              width: 340px;
              height: 360px;
              padding-top: 0px;
            }
            .home-image5 {
              top: 1271px;
              left: 16px;
              width: 340px;
              height: 360px;
            }
            .home-container3 {
              top: 4810px;
              left: 0px;
              height: 1335px;
            }
            .home-text050 {
              top: 70px;
              left: 16px;
            }
            .home-text051 {
              top: 309px;
              left: 16px;
              font-size: 30px;
            }
            .home-text052 {
              top: 1014px;
              left: 16px;
            }
            .home-text053 {
              top: 659px;
              left: 16px;
            }
            .home-text054 {
              left: 16px;
              color: rgb(9, 14, 54);
              width: 350px;
              height: 150px;
              font-size: 30px;
            }
            .home-text061 {
              top: 370px;
              left: 24px;
            }
            .home-text062 {
              top: 730px;
              left: 24px;
            }
            .home-text063 {
              top: 1080px;
              left: 24px;
              bottom: 144px;
            }
            .home-text064 {
              top: 1120px;
              left: 24px;
              right: 36px;
              bottom: 68px;
            }
            .home-text065 {
              top: 1160px;
              left: 24px;
              bottom: 78px;
            }
            .home-text066 {
              top: 1200px;
              left: 24px;
            }
            .home-text067 {
              top: 1240px;
              left: 24px;
              bottom: 84px;
            }
            .home-text068 {
              top: 770px;
              left: 24px;
            }
            .home-text069 {
              top: 810px;
              left: 24px;
            }
            .home-text070 {
              top: 850px;
              left: 24px;
            }
            .home-text071 {
              top: 890px;
              left: 24px;
            }
            .home-text072 {
              top: 930px;
              left: 24px;
            }
            .home-text073 {
              top: 490px;
              left: 24px;
            }
            .home-text074 {
              top: 530px;
              left: 24px;
            }
            .home-text075 {
              top: 570px;
              left: 24px;
            }
            .home-text076 {
              top: 450px;
              left: 24px;
            }
            .home-text077 {
              top: 410px;
              left: 24px;
            }
            .home-ul {
              top: 631px;
              left: 0px;
              position: absolute;
            }
            .home-li01 {
              top: 370px;
              left: 16px;
            }
            .home-li02 {
              top: 770px;
              left: 16px;
            }
            .home-li03 {
              top: 850px;
              left: 16px;
            }
            .home-li04 {
              top: 930px;
              left: 16px;
            }
            .home-li05 {
              top: 1120px;
              left: 16px;
            }
            .home-li06 {
              top: 1160px;
              left: 16px;
            }
            .home-li07 {
              top: 1200px;
              left: 16px;
            }
            .home-li08 {
              top: 730px;
              left: 16px;
            }
            .home-li09 {
              top: 810px;
              left: 16px;
            }
            .home-li10 {
              top: 890px;
              left: 16px;
            }
            .home-li11 {
              top: 1080px;
              left: 16px;
            }
            .home-li12 {
              top: 1240px;
              left: 16px;
            }
            .home-li13 {
              top: 570px;
              left: 16px;
            }
            .home-li14 {
              top: 530px;
              left: 16px;
            }
            .home-li15 {
              top: 450px;
              left: 16px;
            }
            .home-li16 {
              top: 490px;
              left: 16px;
            }
            .home-li17 {
              top: 410px;
              left: 16px;
            }
            .home-container4 {
              top: 6158px;
              left: 0px;
              height: 734px;
              padding-bottom: 4px;
            }
            .home-text078 {
              top: 70px;
              left: 16px;
              color: rgb(84, 100, 136);
              width: 126px;
              height: 24px;
              font-size: 16px;
            }
            .home-text079 {
              top: 491px;
              left: 136px;
            }
            .home-text080 {
              top: 454px;
              left: 136px;
            }
            .home-text081 {
              left: 16px;
              color: rgb(9, 14, 54);
              width: 350px;
              height: 100px;
              font-size: 25px;
            }
            .home-text086 {
              top: 280px;
              left: 10px;
              color: rgb(9, 14, 54);
              width: 360px;
              height: 100px;
              font-size: 12px;
              line-height: 1.5;
            }
            .home-pasted-image {
              top: 232px;
              left: 16px;
            }
            .home-image6 {
              top: 430px;
              left: 16px;
              width: 100px;
              height: 100px;
              border-radius: var(--dl-radius-radius-round);
            }
            .home-pasted-image1 {
              top: 621px;
              left: 134px;
              width: 100px;
              height: 20px;
            }
            .home-pasted-image2 {
              top: 618px;
              right: 2px;
              width: 100px;
              height: 24px;
            }
            .home-pasted-image3 {
              top: 620px;
              left: -11px;
              width: 100px;
              height: 20px;
            }
            .home-container5 {
              top: 6900px;
              left: -1px;
              bottom: 1272px;
              height: 771px;
            }
            .home-text096 {
              top: 30px;
              left: 16px;
              width: 350px;
              font-size: 40px;
            }
            .home-text101 {
              top: 250px;
              left: 16px;
              right: -18px;
              font-size: 15px;
            }
            .home-text102 {
              color: #ffffff;
            }
            .home-text103 {
              color: #ffffff;
            }
            .home-text104 {
              color: #ffffff;
            }
            .home-text105 {
              color: #ffffff;
            }
            .home-text106 {
              color: #ffffff;
            }
            .home-text108 {
              top: 480px;
              left: 16px;
            }
            .home-text109 {
              top: 600px;
              left: 16px;
            }
            .home-text110 {
              top: 520px;
              left: 16px;
              right: -6px;
              font-size: 30px;
            }
            .home-text111 {
              top: 640px;
              left: 16px;
              font-size: 30px;
            }
            .home-link {
              top: 340px;
              left: 16px;
            }
            .home-icon {
              top: 25px;
              left: 240px;
            }
            .home-separator {
              top: 450px;
              left: 10px;
              width: 90%;
            }
            .home-separator1 {
              top: -1099px;
              left: 16px;
              right: 20px;
              width: 90%;
            }
            .home-separator2 {
              top: -1129px;
              left: 16px;
              right: 20px;
              width: 90%;
            }
            .home-separator3 {
              top: -1830px;
              left: 16px;
              width: 90%;
            }
            .home-separator4 {
              top: -1480px;
              left: 16px;
              width: 90%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
