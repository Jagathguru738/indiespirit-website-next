import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import Footer from '../components/footer'
import Header1 from '../components/header1'

const AboutUs = (props) => {
  return (
    <>
      <main className="about-us-container">
        <Head>
          <title>About-Us - Indiespirit-Website</title>
          <meta property="og:title" content="About-Us - Indiespirit-Website" />
        </Head>
        <section className="about-us-container1"></section>
        <section className="about-us-container2">
          <h1 className="about-us-text">
            <span className="about-us-text01">
              We create websites and
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="about-us-text02">
              brands that are seen and
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="about-us-text03">heard.</span>
            <br className="about-us-text04"></br>
            <span className="about-us-text05">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>Loud and clear.</span>
          </h1>
          <Link href="/contactus">
            <a className="about-us-link button">
              <span className="about-us-text07">
                <span className="about-us-text08">Contact Us </span>
                <span>            </span>
                <span className="about-us-text10">-&gt;</span>
              </span>
            </a>
          </Link>
          <span className="about-us-text11">
            <span>
              We bring the experience wherever you connect with your customers. 
            </span>
            <span>
              We create websites that earn, brands that are seen and strategies
              that 
            </span>
            <span>
              work. The best result comes when emotions merge with data,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>technology with design and your company with ours.</span>
          </span>
          <div className="about-us-div">
            <DangerousHTML
              html={`<!DOCTYPE html>
<html>
  <head>
    <title>Slideshow Images</title>
    <style>
      * {
        box-sizing: border-box
      }
      body {
        font-family: Verdana, sans-serif;
        margin: 0
      }
      .mySlides {
        display: none
      }
      img {
        vertical-align: middle;
      }
      .slideshow-container {
        max-width: 1500px;
        position: relative;
        margin: auto;
      }
      /* Next & previous buttons */
      .prev,
      .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        padding: 16px;
        margin-top: -22px;
        color: white;
        font-weight: bold;
        font-size: 18px;
        transition: 0.6s ease;
        border-radius: 0 3px 3px 0;
        user-select: none;
      }
      /* Position the "next button" to the right */
      .next {
        right: 0;
        border-radius: 3px 0 0 3px;
      }
      /* On hover, add a black background color with a little bit see-through */
      .prev:hover,
      .next:hover {
        background-color: rgba(0, 0, 0, 0.8);
      }
      /* Caption text */
      .text {
        color: #ffffff;
        font-size: 15px;
        padding: 8px 12px;
        position: absolute;
        bottom: 8px;
        width: 100%;
        text-align: center;
      }
      /* Number text (1/3 etc) */
      .numbertext {
        color: #ffffff;
        font-size: 12px;
        padding: 8px 12px;
        position: absolute;
        top: 0;
      }
      /* The dots/bullets/indicators */
      .dot {
        cursor: pointer;
        height: 15px;
        width: 15px;
        margin: 0 2px;
        background-color: #999999;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
      }
      .active,
      .dot:hover {
        background-color: #111111;
      }
      /* Fading animation */
      .fade {
        -webkit-animation-name: fade;
        -webkit-animation-duration: 1.5s;
        animation-name: fade;
        animation-duration: 1.5s;
      }
      @-webkit-keyframes fade {
        from {
          opacity: .4
        }
        to {
          opacity: 1
        }
      }
      @keyframes fade {
        from {
          opacity: .4
        }
        to {
          opacity: 1
        }
      }
      /* On smaller screens, decrease text size */
      @media only screen and (max-width: 300px) {
        .prev,
        .next,
        .text {
          font-size: 11px
        }
      }
    </style>
  </head>
  <body>
    <div class="slideshow-container">
      <div class="mySlides fade">
        
        <img src="https://www.w3docs.com/uploads/media/default/0001/03/66cf5094908491e69d8187bcf934050a4800b37f.jpeg" style="width:100%">
        <div class="text">London, Ebgland</div>
      </div>
      <div class="mySlides fade">
        
        <img src="https://www.w3docs.com/uploads/media/default/0001/03/b7d624354d5fa22e38b0ab1f9b905fb08ccc6a05.jpeg" style="width:100%">
        <div class="text">Sunset in Romania</div>
      </div>
      <div class="mySlides fade">
      
        <img src="https://www.w3docs.com/uploads/media/default/0001/03/5bfad15a7fd24d448a48605baf52655a5bbe5a71.jpeg" style="width:100%">
        <div class="text">New York, USA</div>
      </div>
      
    </div>
    <br>
    <div style="text-align:center">
      <span class="dot" onclick="currentSlide(0)"></span>
      <span class="dot" onclick="currentSlide(1)"></span>
      <span class="dot" onclick="currentSlide(2)"></span>
    </div>
    <script>
      let slideIndex = 0;
      let timeoutId = null;
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");
      
      showSlides();
      function currentSlide(index) {
           slideIndex = index;
           showSlides();
      }
     function plusSlides(step) {
        
        if(step < 0) {
            slideIndex -= 2;
            
            if(slideIndex < 0) {
              slideIndex = slides.length - 1;
            }
        }
        
        showSlides();
     }
      function showSlides() {
        for(let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
          dots[i].classList.remove('active');
        }
        slideIndex++;
        if(slideIndex > slides.length) {
          slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add('active');
         if(timeoutId) {
            clearTimeout(timeoutId);
         }
        timeoutId = setTimeout(showSlides, 5000); // Change image every 5 seconds
      }
    </script>
  </body>
</html>`}
            ></DangerousHTML>
          </div>
          <div className="about-us-div1">
            <DangerousHTML
              html={`<!DOCTYPE html>
<html>
  <head>
    <title>Slideshow Images</title>
    <style>
      * {
        box-sizing: border-box
      }
      body {
        font-family: Verdana, sans-serif;
        margin: 0
      }
      .mySlides {
        display: none
      }
      img {
        vertical-align: middle;
      }
      .slideshow-container {
        max-width: 1500px;
        position: relative;
        margin: auto;
      }
      /* Next & previous buttons */
      .prev,
      .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        padding: 16px;
        margin-top: -22px;
        color: white;
        font-weight: bold;
        font-size: 18px;
        transition: 0.6s ease;
        border-radius: 0 3px 3px 0;
        user-select: none;
      }
      /* Position the "next button" to the right */
      .next {
        right: 0;
        border-radius: 3px 0 0 3px;
      }
      /* On hover, add a black background color with a little bit see-through */
      .prev:hover,
      .next:hover {
        background-color: rgba(0, 0, 0, 0.8);
      }
      /* Caption text */
      .text {
        color: #ffffff;
        font-size: 15px;
        padding: 8px 12px;
        position: absolute;
        bottom: 8px;
        width: 100%;
        text-align: center;
      }
      /* Number text (1/3 etc) */
      .numbertext {
        color: #ffffff;
        font-size: 12px;
        padding: 8px 12px;
        position: absolute;
        top: 0;
      }
      /* The dots/bullets/indicators */
      .dot {
        cursor: pointer;
        height: 15px;
        width: 15px;
        margin: 0 2px;
        background-color: #999999;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
      }
      .active,
      .dot:hover {
        background-color: #111111;
      }
      /* Fading animation */
      .fade {
        -webkit-animation-name: fade;
        -webkit-animation-duration: 1.5s;
        animation-name: fade;
        animation-duration: 1.5s;
      }
      @-webkit-keyframes fade {
        from {
          opacity: .4
        }
        to {
          opacity: 1
        }
      }
      @keyframes fade {
        from {
          opacity: .4
        }
        to {
          opacity: 1
        }
      }
      /* On smaller screens, decrease text size */
      @media only screen and (max-width: 300px) {
        .prev,
        .next,
        .text {
          font-size: 11px
        }
      }
    </style>
  </head>
  <body>
    <div class="slideshow-container">
      <div class="mySlides fade">
        
        <img src="https://www.w3docs.com/uploads/media/default/0001/03/66cf5094908491e69d8187bcf934050a4800b37f.jpeg" style="width:100%">
        <div class="text">London, Ebgland</div>
      </div>
      <div class="mySlides fade">
        
        <img src="https://www.w3docs.com/uploads/media/default/0001/03/b7d624354d5fa22e38b0ab1f9b905fb08ccc6a05.jpeg" style="width:100%">
        <div class="text">Sunset in Romania</div>
      </div>
      <div class="mySlides fade">
      
        <img src="https://www.w3docs.com/uploads/media/default/0001/03/5bfad15a7fd24d448a48605baf52655a5bbe5a71.jpeg" style="width:100%">
        <div class="text">New York, USA</div>
      </div>
      
    </div>
    <br>
    <div style="text-align:center">
      <span class="dot" onclick="currentSlide(0)"></span>
      <span class="dot" onclick="currentSlide(1)"></span>
      <span class="dot" onclick="currentSlide(2)"></span>
    </div>
    <script>
      let slideIndex = 0;
      let timeoutId = null;
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");
      
      showSlides();
      function currentSlide(index) {
           slideIndex = index;
           showSlides();
      }
     function plusSlides(step) {
        
        if(step < 0) {
            slideIndex -= 2;
            
            if(slideIndex < 0) {
              slideIndex = slides.length - 1;
            }
        }
        
        showSlides();
     }
      function showSlides() {
        for(let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
          dots[i].classList.remove('active');
        }
        slideIndex++;
        if(slideIndex > slides.length) {
          slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add('active');
         if(timeoutId) {
            clearTimeout(timeoutId);
         }
        timeoutId = setTimeout(showSlides, 5000); // Change image every 5 seconds
      }
    </script>
  </body>
</html>`}
            ></DangerousHTML>
          </div>
          <span className="about-us-text16">E-MAIL</span>
          <span className="about-us-text17">hello@outloud.com</span>
        </section>
        <section className="about-us-container3">
          <div>
            <DangerousHTML html={`<h1>hu</h1>`}></DangerousHTML>
          </div>
        </section>
        <section className="about-us-container4">
          <span className="about-us-text18">TEAM</span>
          <h1 className="about-us-text19">
            <span>
              Each of us know
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              something,together we
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>know a lot</span>
          </h1>
          <img
            alt="image"
            src="/playground_assets/image7-500h.jpg"
            className="about-us-image"
          />
          <img
            alt="image"
            src="/playground_assets/image7-500h.jpg"
            className="about-us-image01"
          />
          <img
            alt="image"
            src="/playground_assets/image7-500h.jpg"
            className="about-us-image02"
          />
          <img
            alt="image"
            src="/playground_assets/image7-500h.jpg"
            className="about-us-image03"
          />
          <img
            alt="image"
            src="/playground_assets/image7-500h.jpg"
            className="about-us-image04"
          />
          <img
            alt="image"
            src="/playground_assets/image7-500h.jpg"
            className="about-us-image05"
          />
          <img
            alt="image"
            src="/playground_assets/image7-500h.jpg"
            className="about-us-image06"
          />
          <span className="about-us-text25">
            <span>Andrej Adamčík</span>
            <br></br>
            <br></br>
          </span>
          <span className="about-us-text29">
            <span>Andrej Adamčík</span>
            <br></br>
            <br></br>
          </span>
          <span className="about-us-text33">
            <span>Andrej Adamčík</span>
            <br></br>
            <br></br>
          </span>
          <span className="about-us-text37">
            <span>Andrej Adamčík</span>
            <br></br>
            <br></br>
          </span>
          <span className="about-us-text41">
            <span>Andrej Adamčík</span>
            <br></br>
            <br></br>
          </span>
          <span className="about-us-text45">
            <span>Andrej Adamčík</span>
            <br></br>
            <br></br>
          </span>
          <span className="about-us-text49">Brand / UI &amp; UX</span>
          <span className="about-us-text50">Brand / UI &amp; UX</span>
          <span className="about-us-text51">Brand / UI &amp; UX</span>
          <span className="about-us-text52">Brand / UI &amp; UX</span>
          <span className="about-us-text53">Brand / UI &amp; UX</span>
          <span className="about-us-text54">Brand / UI &amp; UX</span>
        </section>
        <div className="about-us-container5">
          <img
            alt="image"
            src="/playground_assets/rectangle%2018%20%5B1%5D-800w.png"
            className="about-us-image07"
          />
          <img
            alt="image"
            src="/playground_assets/rectangle%2018%20%5B1%5D-800w.png"
            className="about-us-image08"
          />
          <img
            alt="image"
            src="/playground_assets/rectangle%2018%20%5B1%5D-800w.png"
            className="about-us-image09"
          />
          <img
            alt="image"
            src="/playground_assets/rectangle%2018%20%5B1%5D-800w.png"
            className="about-us-image10"
          />
          <h1 className="about-us-text55"></h1>
          <h1 className="about-us-text56">
            <span>
              Designers, programmers,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>marketers, friends</span>
          </h1>
        </div>
        <Footer rootClassName="footer-root-class-name1"></Footer>
        <Header1 rootClassName="header1-root-class-name"></Header1>
        <span className="about-us-text60">
          <span className="about-us-text61">Let&apos;s start something </span>
          <br className="about-us-text62"></br>
          <span className="about-us-text63">completely new together</span>
          <br></br>
        </span>
        <span className="about-us-text65">
          <span className="about-us-text66">
            Drop us a line, and we&apos;ll get in touch.
          </span>
          <br className="about-us-text67"></br>
          <span className="about-us-text68">
            We&apos;ll see if we&apos;re a match and how we can help each other.
          </span>
          <span>.</span>
        </span>
        <div className="about-us-separator"></div>
        <button className="about-us-button button">
          <svg viewBox="0 0 1024 1024" className="about-us-icon">
            <path d="M567.168 311.168c-16.683 16.683-16.683 43.648 0 60.331l97.835 97.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h323.669l-97.835 97.835c-16.683 16.683-16.683 43.648 0 60.331 8.32 8.32 19.243 12.501 30.165 12.501s21.845-4.181 30.165-12.501l200.832-200.832-200.832-200.832c-16.683-16.683-43.648-16.683-60.331 0z"></path>
          </svg>
          Contact Us
        </button>
        <span className="about-us-text70">+91 73586 64616</span>
        <span className="about-us-text71">PHONE NUMBER</span>
      </main>
      <style jsx>
        {`
          .about-us-container {
            width: 100%;
            height: 8125px;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #00164e;
          }
          .about-us-container1 {
            flex: 0 0 auto;
            left: -3px;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            bottom: -127px;
            height: auto;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: #d9d9d9;
          }
          .about-us-container2 {
            top: 86px;
            flex: 0 0 auto;
            color: #ffdd1a;
            right: -1px;
            width: 100%;
            height: 1482px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: #00164e;
          }
          .about-us-text {
            top: 122px;
            left: 100px;
            right: 178px;
            position: absolute;
            font-size: 562.5%;
            font-style: normal;
            font-weight: 500;
          }
          .about-us-text01 {
            color: #f9f8f8;
          }
          .about-us-text02 {
            color: #f9f8f8;
          }
          .about-us-text03 {
            color: #f9f8f8;
          }
          .about-us-text05 {
            color: #f9f8f8;
          }
          .about-us-link {
            left: 917px;
            width: 292px;
            bottom: -5731px;
            height: 72px;
            display: flex;
            position: absolute;
            font-size: 30px;
            font-style: normal;
            margin-top: 0px;
            font-weight: 500;
            padding-top: 18px;
            border-style: solid;
            padding-left: 30px;
            border-radius: 50px;
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: 18px;
            text-decoration: none;
            background-color: rgb(255, 221, 26);
          }
          .about-us-text07 {
            top: 14px;
            left: 32px;
            position: absolute;
          }
          .about-us-text08 {
            font-size: 20px;
          }
          .about-us-text10 {
            font-size: 20px;
          }
          .about-us-text11 {
            top: 1292px;
            left: 521px;
            color: rgb(232, 231, 226);
            right: 28px;
            bottom: 92px;
            position: absolute;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .about-us-div {
            top: 688px;
            left: -92px;
            right: 732px;
            width: 800px;
            height: 484px;
            position: absolute;
          }
          .about-us-div1 {
            top: 688px;
            right: -92px;
            width: 800px;
            height: 484px;
            position: absolute;
          }
          .about-us-text16 {
            top: 7322px;
            left: 101px;
            color: #546488;
            position: absolute;
            font-size: 20px;
          }
          .about-us-text17 {
            top: 7375px;
            left: 100px;
            color: #ffffff;
            position: absolute;
            font-size: 40px;
          }
          .about-us-container3 {
            top: 1568px;
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 100%;
            height: 872px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .about-us-container4 {
            top: 2440px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 1822px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-us-text18 {
            top: 165px;
            left: 100px;
            color: #546488;
            position: absolute;
            font-size: 100%;
            font-style: normal;
            font-weight: 500;
          }
          .about-us-text19 {
            top: 152px;
            left: 416px;
            color: #e2dede;
            position: absolute;
            font-size: 437.5%;
            font-style: normal;
            font-weight: 500;
          }
          .about-us-image {
            top: 552px;
            left: 100px;
            width: 397px;
            height: 450px;
            position: absolute;
            object-fit: cover;
          }
          .about-us-image01 {
            top: 552px;
            left: 100px;
            width: 397px;
            height: 450px;
            position: absolute;
            object-fit: cover;
          }
          .about-us-image02 {
            top: 1157px;
            left: 100px;
            width: 397px;
            height: 450px;
            position: absolute;
            object-fit: cover;
          }
          .about-us-image03 {
            top: 552px;
            left: 521px;
            width: 397px;
            height: 450px;
            position: absolute;
            object-fit: cover;
          }
          .about-us-image04 {
            top: 1157px;
            left: 521px;
            width: 397px;
            height: 450px;
            position: absolute;
            object-fit: cover;
          }
          .about-us-image05 {
            top: 552px;
            left: 943px;
            width: 397px;
            height: 450px;
            position: absolute;
            object-fit: cover;
          }
          .about-us-image06 {
            top: 1157px;
            left: 943px;
            width: 397px;
            height: 450px;
            position: absolute;
            object-fit: cover;
          }
          .about-us-text25 {
            top: 1023px;
            left: 100px;
            color: #f3e6e6;
            position: absolute;
            font-size: 150%;
          }
          .about-us-text29 {
            top: 1628px;
            left: 100px;
            color: #f3e6e6;
            position: absolute;
            font-size: 150%;
          }
          .about-us-text33 {
            top: 1023px;
            left: 521px;
            color: #f3e6e6;
            position: absolute;
            font-size: 150%;
          }
          .about-us-text37 {
            top: 1628px;
            left: 521px;
            color: #f3e6e6;
            position: absolute;
            font-size: 150%;
          }
          .about-us-text41 {
            top: 1023px;
            left: 943px;
            color: #f3e6e6;
            position: absolute;
            font-size: 150%;
          }
          .about-us-text45 {
            top: 1628px;
            left: 943px;
            color: #f3e6e6;
            position: absolute;
            font-size: 150%;
          }
          .about-us-text49 {
            top: 1073px;
            left: 100px;
            color: #546488;
            position: absolute;
            font-size: 100%;
          }
          .about-us-text50 {
            top: 1678px;
            left: 100px;
            color: #546488;
            position: absolute;
            font-size: 100%;
          }
          .about-us-text51 {
            top: 1073px;
            left: 521px;
            color: #546488;
            position: absolute;
            font-size: 100%;
          }
          .about-us-text52 {
            top: 1678px;
            left: 521px;
            color: #546488;
            position: absolute;
            font-size: 100%;
          }
          .about-us-text53 {
            top: 1073px;
            left: 943px;
            color: #546488;
            position: absolute;
            font-size: 100%;
          }
          .about-us-text54 {
            top: 1678px;
            left: 943px;
            color: #546488;
            position: absolute;
            font-size: 100%;
          }
          .about-us-container5 {
            top: 4262px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 2586px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: #f4f8fe;
          }
          .about-us-image07 {
            top: 120px;
            left: 732px;
            width: 608px;
            height: 593px;
            position: absolute;
            object-fit: cover;
          }
          .about-us-image08 {
            top: 1873px;
            left: 100px;
            width: 608px;
            height: 593px;
            position: absolute;
            object-fit: cover;
          }
          .about-us-image09 {
            top: 775px;
            left: 84px;
            width: 608px;
            height: 400px;
            position: absolute;
            object-fit: cover;
          }
          .about-us-image10 {
            top: 1353px;
            left: 732px;
            width: 608px;
            height: 400px;
            position: absolute;
            object-fit: cover;
          }
          .about-us-text55 {
            top: 0px;
            left: 0px;
            position: absolute;
          }
          .about-us-text56 {
            top: 1189px;
            left: 250px;
            color: rgb(49, 54, 89);
            position: absolute;
            font-size: 70px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .about-us-text60 {
            top: 6996px;
            left: 100px;
            position: absolute;
            font-size: 80px;
          }
          .about-us-text61 {
            color: #ffffff;
          }
          .about-us-text62 {
            color: #ffffff;
          }
          .about-us-text63 {
            color: #ffffff;
          }
          .about-us-text65 {
            top: 7251px;
            left: 101px;
            position: absolute;
            font-size: 20px;
          }
          .about-us-text66 {
            color: #ffffff;
          }
          .about-us-text68 {
            color: #ffffff;
          }
          .about-us-separator {
            top: 7374px;
            flex: 0 0 auto;
            left: 100px;
            width: 80%;
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
          .about-us-button {
            top: 418px;
            left: 100px;
            color: rgb(0, 0, 0);
            width: 268px;
            display: none;
            position: absolute;
            font-size: 20px;
            padding-top: 20px;
            border-width: 0px;
            padding-left: 40px;
            border-radius: 50px;
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: 20px;
            background-color: rgb(255, 221, 26);
          }
          .about-us-icon {
            top: 439px;
            left: 324px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .about-us-text70 {
            top: 7465px;
            left: 697px;
            color: rgb(255, 255, 255);
            bottom: 630px;
            position: absolute;
            font-size: 40px;
          }
          .about-us-text71 {
            top: 7408px;
            left: 697px;
            color: rgb(84, 100, 136);
            bottom: 694px;
            position: absolute;
            font-size: 20px;
          }
          @media (max-width: 769px) {
            .about-us-container2 {
              height: 1483px;
            }
            .about-us-text {
              top: 120px;
              left: 50px;
              right: 50px;
              font-size: 500%;
            }
            .about-us-text11 {
              top: 1200px;
              left: 50px;
              color: rgb(232, 231, 226);
              right: 50px;
              font-size: 28px;
              font-style: normal;
              font-weight: 500;
            }
            .about-us-div {
              display: none;
            }
            .about-us-div1 {
              top: 688px;
              left: -1px;
            }
            .about-us-text16 {
              top: 7100px;
              left: 50px;
            }
            .about-us-text17 {
              top: 7150px;
              left: 50px;
            }
            .about-us-container4 {
              height: 1839px;
            }
            .about-us-text18 {
              left: 50px;
            }
            .about-us-text19 {
              top: 225px;
              left: 150px;
              font-size: 300%;
            }
            .about-us-image {
              top: 1400px;
              left: 50px;
              width: var(--dl-size-size-xxlarge);
              height: var(--dl-size-size-xxlarge);
            }
            .about-us-image01 {
              top: 500px;
              left: 50px;
              width: var(--dl-size-size-xxlarge);
              height: var(--dl-size-size-xxlarge);
            }
            .about-us-image02 {
              top: 950px;
              left: 50px;
              right: 21px;
              width: var(--dl-size-size-xxlarge);
              height: var(--dl-size-size-xxlarge);
            }
            .about-us-image03 {
              top: 500px;
              left: 425px;
              width: var(--dl-size-size-xxlarge);
              height: var(--dl-size-size-xxlarge);
            }
            .about-us-image04 {
              top: 950px;
              left: 425px;
              width: var(--dl-size-size-xxlarge);
              height: var(--dl-size-size-xxlarge);
            }
            .about-us-image05 {
              top: 1400px;
              right: 49px;
              width: var(--dl-size-size-xxlarge);
              height: var(--dl-size-size-xxlarge);
            }
            .about-us-image06 {
              top: 1400px;
              left: 425px;
              width: var(--dl-size-size-xxlarge);
              height: var(--dl-size-size-xxlarge);
            }
            .about-us-text25 {
              top: 1725px;
              left: 425px;
            }
            .about-us-text29 {
              top: 1725px;
              left: 50px;
            }
            .about-us-text33 {
              top: 845px;
              left: 425px;
              right: 133px;
              width: var(--dl-size-size-xlarge);
            }
            .about-us-text37 {
              top: 1300px;
              left: 425px;
              color: rgb(243, 230, 230);
              font-size: 150%;
            }
            .about-us-text41 {
              top: 850px;
              left: 50px;
            }
            .about-us-text45 {
              top: 1300px;
              left: 50px;
            }
            .about-us-text49 {
              top: 1350px;
              left: 50px;
            }
            .about-us-text50 {
              top: 1775px;
              left: 425px;
            }
            .about-us-text51 {
              top: 880px;
              left: 425px;
            }
            .about-us-text52 {
              top: 1350px;
              left: 425px;
            }
            .about-us-text53 {
              top: 880px;
              left: 50px;
            }
            .about-us-text54 {
              top: 1775px;
              left: 50px;
            }
            .about-us-image07 {
              left: 100px;
              width: 608px;
            }
            .about-us-image08 {
              left: 350px;
              width: 350px;
              height: 350px;
            }
            .about-us-image09 {
              left: 350px;
              width: 350px;
              height: 350px;
            }
            .about-us-image10 {
              top: 1400px;
              left: 50px;
              width: 350px;
              height: 350px;
            }
            .about-us-text56 {
              top: 1225px;
              left: 50px;
              color: rgb(49, 54, 89);
              width: 652px;
              height: auto;
              font-size: 50px;
              font-style: normal;
              font-weight: 500;
            }
            .about-us-text60 {
              top: 6900px;
              left: 50px;
              right: -8px;
              font-size: 48px;
            }
            .about-us-text65 {
              top: 7025px;
              left: 50px;
              right: 50px;
              bottom: 1178px;
              font-size: 30px;
            }
            .about-us-separator {
              top: 7150px;
              left: 50px;
              right: 50px;
            }
            .about-us-button {
              top: 7500px;
              left: 50px;
              display: flex;
              padding-top: 20px;
            }
            .about-us-icon {
              top: 20px;
              left: 180px;
              right: 58px;
              bottom: 18px;
            }
            .about-us-text70 {
              top: 7400px;
              left: 50px;
            }
            .about-us-text71 {
              top: 7350px;
              left: 50px;
            }
          }
          @media (max-width: 767px) {
            .about-us-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 750px) {
            .about-us-div {
              display: none;
            }
            .about-us-div1 {
              top: 683px;
              left: -1px;
              width: 760px;
            }
          }
          @media (max-width: 479px) {
            .about-us-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 376px) {
            .about-us-container2 {
              height: 1200px;
            }
            .about-us-text {
              top: 100px;
              left: 16px;
              width: 350px;
              font-size: 200%;
              font-style: normal;
              font-weight: 500;
            }
            .about-us-text01 {
              color: #f9f8f8;
            }
            .about-us-text02 {
              color: #f9f8f8;
            }
            .about-us-text03 {
              color: #f9f8f8;
            }
            .about-us-text04 {
              color: #f9f8f8;
            }
            .about-us-text05 {
              color: #f9f8f8;
            }
            .about-us-text11 {
              top: 700px;
              left: 16px;
              color: rgb(232, 231, 226);
              font-size: 24px;
              font-style: normal;
              font-weight: 500;
            }
            .about-us-div {
              display: none;
            }
            .about-us-div1 {
              top: 368px;
              left: -1px;
              width: 375px;
              height: 375px;
            }
            .about-us-text16 {
              top: 7250px;
              left: 16px;
              font-size: 16px;
            }
            .about-us-text17 {
              top: 7279px;
              left: 16px;
              font-size: 20px;
            }
            .about-us-container3 {
              top: 1190px;
              right: -7px;
              height: 750px;
            }
            .about-us-container4 {
              top: 1938px;
              right: 0px;
              height: 2465px;
            }
            .about-us-text18 {
              top: 80px;
              left: 16px;
            }
            .about-us-text19 {
              top: 150px;
              left: 16px;
              color: rgb(226, 222, 222);
              font-size: 175%;
              font-style: normal;
              font-weight: 500;
            }
            .about-us-image {
              top: 650px;
              left: 16px;
              width: 340px;
              height: 250px;
            }
            .about-us-image01 {
              top: 300px;
              left: 16px;
              width: 340px;
              height: 250px;
            }
            .about-us-image02 {
              top: 1350px;
              left: 16px;
              width: 340px;
              height: 250px;
            }
            .about-us-image03 {
              top: 764px;
              left: 16px;
              width: 250px;
              height: 250px;
              display: none;
            }
            .about-us-image04 {
              top: 1700px;
              left: 16px;
              width: 340px;
              height: 250px;
            }
            .about-us-image05 {
              top: 1000px;
              left: 16px;
              width: 340px;
              height: 250px;
            }
            .about-us-image06 {
              top: 2050px;
              left: 16px;
              width: 340px;
              height: 250px;
            }
            .about-us-text25 {
              top: 560px;
              left: 16px;
              height: 20px;
              font-size: 100%;
            }
            .about-us-text29 {
              top: 1610px;
              left: 16px;
              right: -222px;
              width: var(--dl-size-size-large);
              height: 20px;
              font-size: 100%;
            }
            .about-us-text33 {
              top: 1260px;
              left: 16px;
              font-size: 100%;
            }
            .about-us-text37 {
              top: 1960px;
              left: 16px;
              font-size: 100%;
            }
            .about-us-text41 {
              top: 910px;
              left: 16px;
              font-size: 100%;
            }
            .about-us-text45 {
              top: 2310px;
              left: 16px;
              font-size: 100%;
            }
            .about-us-text49 {
              top: 600px;
              left: 16px;
            }
            .about-us-text50 {
              top: 1650px;
              left: 16px;
            }
            .about-us-text51 {
              top: 950px;
              left: 16px;
            }
            .about-us-text52 {
              top: 1300px;
              left: 16px;
            }
            .about-us-text53 {
              top: 2000px;
              left: 16px;
            }
            .about-us-text54 {
              top: 2350px;
              left: 16px;
            }
            .about-us-container5 {
              top: 4402px;
              height: 2386px;
            }
            .about-us-image07 {
              top: 650px;
              left: 16px;
              width: 300px;
              height: 250px;
            }
            .about-us-image08 {
              top: 1270px;
              left: 84px;
              right: var(--dl-space-space-halfunit);
              width: 280px;
              height: 250px;
            }
            .about-us-image09 {
              top: 200px;
              left: 60px;
              width: 280px;
              height: 250px;
            }
            .about-us-image10 {
              top: 1923px;
              left: 16px;
              width: 300px;
              height: 250px;
            }
            .about-us-text56 {
              top: 1048px;
              left: 40px;
              color: rgb(49, 54, 89);
              right: 34px;
              width: 300px;
              font-size: 150%;
              font-style: normal;
              text-align: center;
              font-weight: 500;
            }
            .about-us-text60 {
              top: 6850px;
              left: 16px;
              width: 300px;
              bottom: 1009px;
              height: 200px;
              font-size: 40px;
            }
            .about-us-text65 {
              top: 7100px;
              left: 16px;
              width: 350px;
              font-size: 15px;
              line-height: 1.5;
            }
            .about-us-text66 {
              color: #ffffff;
            }
            .about-us-text67 {
              color: #ffffff;
            }
            .about-us-text68 {
              color: #ffffff;
            }
            .about-us-separator {
              top: 7325px;
              left: 10px;
              width: 350px;
              border-color: #546488;
            }
            .about-us-button {
              top: 7200px;
              left: 16px;
              color: rgb(0, 0, 0);
              width: 270px;
              display: flex;
              font-size: 20px;
              padding-left: 20px;
              background-color: rgb(255, 221, 26);
            }
            .about-us-icon {
              top: 21px;
              left: 220px;
              right: 30px;
            }
            .about-us-text70 {
              top: 7437px;
              left: 16px;
              width: 200px;
              height: 30px;
              font-size: 20px;
            }
            .about-us-text71 {
              top: 7405px;
              color: rgb(84, 100, 136);
              right: -423px;
              bottom: 956px;
              font-size: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

export default AboutUs
