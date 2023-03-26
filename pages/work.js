import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header1 from '../components/header1'
import Component1 from '../components/component1'
import Footer from '../components/footer'

const Work = (props) => {
  return (
    <>
      <section className="work-container">
        <Head>
          <title>work - Indiespirit-Website</title>
          <meta property="og:title" content="work - Indiespirit-Website" />
        </Head>
        <main className="work-container1">
          <h1 className="work-text" data-aos="fade-down" data-aos-duration="1000">
            <span className="work-text01" data-aos="fade-down" data-aos-duration="1000">Experienced companies,</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="work-text05" data-aos="fade-down-right" data-aos-duration="1000">
              new players or ferocious
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="work-text06"></br>
            <span className="work-text07" data-aos="fade-down" data-aos-duration="1000">startups</span>
          </h1>
        </main>
        <Header1 rootClassName="header1-root-class-name1"></Header1>
        <section className="work-container2">
          <img
            alt="image"
            src="/playground_assets/rectangle%206l-600w.png"
            className="work-image" data-aos="fade-up" data-aos-duration="1000"
          />
          <img
            alt="image"
            src="/playground_assets/rectangle%206l-600w.png"
            className="work-image01" data-aos="fade-up" data-aos-duration="1000"
          />
          <img
            alt="image"
            src="/playground_assets/rectangle%206l-600w.png"
            className="work-image02" data-aos="fade-up" data-aos-duration="1000"
          />
          <img
            alt="image"
            src="/playground_assets/rectangle%206l-600w.png"
            className="work-image03" data-aos="fade-up" data-aos-duration="1000"
          />
          <img
            alt="image"
            src="/playground_assets/rectangle%206l-600w.png"
            className="work-image04" data-aos="fade-up" data-aos-duration="1000"
          />
          <img
            alt="image"
            src="/playground_assets/rectangle%206l-600w.png"
            className="work-image05" data-aos="fade-up" data-aos-duration="1000"
          />
          <img
            alt="image"
            src="/playground_assets/rectangle%206l-600w.png"
            className="work-image06" data-aos="fade-up" data-aos-duration="1000"
          />
          <img
            alt="image"
            src="/playground_assets/rectangle%206l-600w.png"
            className="work-image07" data-aos="fade-up" data-aos-duration="1000"
          />
          <img
            alt="image"
            src="/playground_assets/rectangle%206l-600w.png"
            className="work-image08" data-aos="fade-up" data-aos-duration="1000"
          />
          <img
            alt="image"
            src="/playground_assets/rectangle%206l-600w.png"
            className="work-image09" data-aos="fade-up" data-aos-duration="1000"
          />
          <Component1 rootClassName="component1-root-class-name"></Component1>
          <Component1 rootClassName="component1-root-class-name9"></Component1>
          <Component1 rootClassName="component1-root-class-name8"></Component1>
          <Component1 rootClassName="component1-root-class-name7"></Component1>
          <Component1 rootClassName="component1-root-class-name6"></Component1>
          <Component1 rootClassName="component1-root-class-name1"></Component1>
          <Component1 rootClassName="component1-root-class-name2"></Component1>
          <Component1 rootClassName="component1-root-class-name3"></Component1>
          <Component1 rootClassName="component1-root-class-name4"></Component1>
          <Component1 rootClassName="component1-root-class-name5"></Component1>
        </section>
        <div className="work-container3">
          <section className="work-container4">
            <span className="work-text08">
              <span className="work-text09">Let&apos;s start something </span>
              <br className="work-text10"></br>
              <span className="work-text11">completely new together</span>
              <br></br>
            </span>
            <span className="work-text13">
              <span className="work-text14">
                Drop us a line, and we&apos;ll get in touch.
              </span>
              <br className="work-text15"></br>
              <span className="work-text16">
                We&apos;ll see if we&apos;re a match and how we can help each
                other
              </span>
              <span>.</span>
            </span>
            <span className="work-text18">E-MAIL</span>
            <span className="work-text19">PHONE NUMBER</span>
            <span className="work-text20">hello@outloud.com</span>
            <span className="work-text21">+421 948 243 101</span>
            <div className="work-separator"></div>
            <Link href="/contactus">
              <a className="work-link button">
                <span className="work-text22">
                  <span className="work-text23">Contact Us </span>
                  <span>            </span>
                </span>
              </a>
            </Link>
            <svg viewBox="0 0 1024 1024" className="work-icon">
              <path d="M567.168 311.168c-16.683 16.683-16.683 43.648 0 60.331l97.835 97.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h323.669l-97.835 97.835c-16.683 16.683-16.683 43.648 0 60.331 8.32 8.32 19.243 12.501 30.165 12.501s21.845-4.181 30.165-12.501l200.832-200.832-200.832-200.832c-16.683-16.683-43.648-16.683-60.331 0z"></path>
            </svg>
          </section>
        </div>
        <div className="work-container5"></div>
        <Footer rootClassName="footer-root-class-name3"></Footer>
      </section>
      <style jsx>
        {`
          .work-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .work-container1 {
            top: 0px;
            left: 0px;
            right: -13px;
            width: 100%;
            height: 682px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #00164e;
          }
          .work-text {
            top: 183px;
            left: 100px;
            position: absolute;
            font-size: 90px;
            font-style: normal;
            font-weight: 400;
          }
          .work-text01 {
            color: #ffdd1a;
          }
          .work-text05 {
            color: #ffffff;
          }
          .work-text06 {
            color: #ffffff;
          }
          .work-text07 {
            color: #ffffff;
          }
          .work-container2 {
            top: 682px;
            flex: 0 0 auto;
            left: 0px;
            right: -52px;
            width: 100%;
            height: 4698px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #f4f8fe;
          }
          .work-image {
            top: 120px;
            left: 100px;
            width: 503px;
            height: 580px;
            position: absolute;
            object-fit: cover;
          }
          .work-image01 {
            top: 256px;
            left: 837px;
            right: 100px;
            width: 503px;
            height: 580px;
            position: absolute;
            object-fit: cover;
          }
          .work-image02 {
            top: 1186px;
            left: 837px;
            right: 100px;
            width: 503px;
            height: 580px;
            position: absolute;
            object-fit: cover;
          }
          .work-image03 {
            top: 2118px;
            left: 837px;
            right: 99px;
            width: 503px;
            height: 580px;
            position: absolute;
            object-fit: cover;
          }
          .work-image04 {
            top: 3010px;
            left: 837px;
            right: 100px;
            width: 503px;
            height: 580px;
            position: absolute;
            object-fit: cover;
          }
          .work-image05 {
            top: 3904px;
            left: 837px;
            right: 100px;
            width: 503px;
            height: 580px;
            position: absolute;
            object-fit: cover;
          }
          .work-image06 {
            top: 3804px;
            left: 100px;
            width: 503px;
            height: 580px;
            position: absolute;
            object-fit: cover;
          }
          .work-image07 {
            top: 2910px;
            left: 100px;
            width: 503px;
            height: 580px;
            position: absolute;
            object-fit: cover;
          }
          .work-image08 {
            top: 1980px;
            left: 112px;
            width: 503px;
            height: 580px;
            position: absolute;
            object-fit: cover;
          }
          .work-image09 {
            top: 1050px;
            left: 100px;
            width: 503px;
            height: 580px;
            position: absolute;
            object-fit: cover;
          }
          .work-container3 {
            top: 5380px;
            left: 0px;
            right: -36px;
            width: 100%;
            bottom: 622px;
            height: 801px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: #d9d9d9;
          }
          .work-container4 {
            top: -7px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 801px;
            display: flex;
            z-index: 100;
            position: absolute;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-style: solid;
            border-width: 1px;
            border-radius: 0px;
            flex-direction: column;
            justify-content: center;
            background-color: #00164e;
          }
          .work-text08 {
            top: 117px;
            left: 100px;
            position: absolute;
            font-size: 80px;
          }
          .work-text09 {
            color: #ffffff;
            top: 0px;
          }
          .work-text11 {
            color: #ffffff;
          }
          .work-text13 {
            top: 352px;
            left: 101px;
            position: absolute;
            font-size: 20px;
          }
          .work-text14 {
            color: #ffffff;
          }
          .work-text15 {
            color: #ffffff;
          }
          .work-text16 {
            color: #ffffff;
          }
          .work-text18 {
            top: 552px;
            left: 101px;
            color: #546488;
            position: absolute;
            font-size: 20px;
          }
          .work-text19 {
            top: 552px;
            left: 730px;
            color: #546488;
            position: absolute;
            font-size: 20px;
          }
          .work-text20 {
            top: 618px;
            left: 100px;
            color: #ffffff;
            position: absolute;
            font-size: 40px;
          }
          .work-text21 {
            top: 618px;
            left: 728px;
            color: rgb(255, 255, 255);
            position: absolute;
            font-size: 40px;
          }
          .work-separator {
            top: 450px;
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
          .work-link {
            top: 340px;
            left: 941px;
            width: 292px;
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
          .work-text22 {
            right: -5px;
            bottom: 20px;
            position: absolute;
          }
          .work-icon {
            top: 364px;
            left: 1179px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .work-container5 {
            top: 6181px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            bottom: 214px;
            height: 504px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          @media (max-width: 769px) {
            .work-text {
              top: 120px;
            }
            .work-text08 {
              top: 55px;
              right: -230px;
              font-size: 50px;
            }
            .work-text09 {
              color: #ffffff;
            }
            .work-text10 {
              color: #ffffff;
            }
            .work-text11 {
              color: #ffffff;
            }
            .work-text13 {
              top: 225px;
              left: 100px;
            }
            .work-text18 {
              top: 473px;
              left: 100px;
            }
            .work-text19 {
              top: 585px;
              left: 100px;
            }
            .work-text20 {
              top: 514px;
              left: 100px;
            }
            .work-text21 {
              left: 100px;
              bottom: 114px;
            }
            .work-separator {
              top: 324px;
              left: 100px;
            }
            .work-link {
              top: 362px;
              left: 100px;
              right: 270px;
            }
            .work-icon {
              top: 386px;
              left: 337px;
            }
          }
          @media (max-width: 767px) {
            .work-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 750px) {
            .work-container2 {
              height: 4692px;
            }
          }
          @media (max-width: 479px) {
            .work-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 376px) {
            .work-text {
              top: 130px;
              left: 16px;
              width: 334px;
              bottom: -137px;
              height: 413px;
              font-size: 50px;
              margin-right: 0px;
            }
            .work-container2 {
              height: 5220px;
            }
            .work-image {
              top: 107px;
              left: 16px;
              width: 340px;
              height: 388px;
            }
            .work-image01 {
              top: 600px;
              left: 16px;
              right: -158px;
              width: 340px;
              height: 388px;
            }
            .work-image02 {
              top: 1610px;
              left: 19px;
              width: 340px;
              height: 388px;
            }
            .work-image03 {
              top: 2607px;
              left: 19px;
              width: 340px;
              height: 388px;
            }
            .work-image04 {
              top: 3105px;
              left: 19px;
              width: 340px;
              height: 388px;
            }
            .work-image05 {
              top: 4600px;
              left: 19px;
              right: -66px;
              width: 340px;
              bottom: 187px;
              height: 388px;
            }
            .work-image06 {
              top: 3586px;
              left: 18px;
              right: -64px;
              width: 340px;
              height: 388px;
              position: absolute;
              padding-top: 12px;
            }
            .work-image07 {
              top: 4085px;
              left: 16px;
              width: 340px;
              bottom: 211px;
              height: 388px;
            }
            .work-image08 {
              top: 2114px;
              left: 18px;
              width: 340px;
              height: 388px;
            }
            .work-image09 {
              top: 1108px;
              left: 19px;
              width: 340px;
              height: 388px;
            }
            .work-container3 {
              top: 5900px;
              height: 826px;
            }
            .work-container4 {
              top: 0px;
              left: 0px;
              right: 0px;
              bottom: -6px;
              height: 700px;
              padding-bottom: 13px;
            }
            .work-text08 {
              top: 63px;
              left: 19px;
              right: -17px;
              font-size: 30px;
              text-transform: capitalize;
            }
            .work-text13 {
              top: 189px;
              left: 19px;
              right: 2px;
            }
            .work-text18 {
              top: 489px;
              left: 19px;
            }
            .work-text19 {
              top: 580px;
              left: 17px;
              bottom: 89px;
            }
            .work-text20 {
              top: 528px;
              left: 19px;
              right: -3px;
            }
            .work-text21 {
              left: 19px;
              right: 11px;
              bottom: 20px;
            }
            .work-separator {
              top: 466px;
              left: 19px;
            }
            .work-link {
              top: 314px;
              left: 16px;
              margin-left: 19px;
              padding-left: 20px;
            }
            .work-text22 {
              margin-left: 10px;
            }
            .work-text23 {
              font-size: 20px;
            }
            .work-icon {
              top: 338px;
              left: 274px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Work
