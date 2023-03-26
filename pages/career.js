import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Footer from '../components/footer'
import Header from '../components/header'

const Career = (props) => {
  return (
    <>
      <div className="career-container">
        <Head>
          <title>Career - Indiespirit-Website</title>
          <meta property="og:title" content="Career - Indiespirit-Website" />
        </Head>
        <div className="career-container1">
          <h1 className="career-text">
            <span><div data-aos="fade-down">
              Hey. Do you want</div>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span><div data-aos="fade-down">
             
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </div></span>
            <span className="career-text03">
            <div data-aos="fade-down">to join the team
            </div></span>
          </h1>
          <Link href="/current-opening">
            <a className="career-link button">
            <div data-aos="fade-down">Current Opening</div></a>
          </Link>
          <svg viewBox="0 0 1024 1024" className="career-icon">
            <path d="M567.168 311.168c-16.683 16.683-16.683 43.648 0 60.331l97.835 97.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h323.669l-97.835 97.835c-16.683 16.683-16.683 43.648 0 60.331 8.32 8.32 19.243 12.501 30.165 12.501s21.845-4.181 30.165-12.501l200.832-200.832-200.832-200.832c-16.683-16.683-43.648-16.683-60.331 0z"></path>
          </svg>
        </div>
        <div className="career-container2">
          <span className="career-text04"><div data-aos="fade-right">What we offer</div></span>
          <span className="career-text05"><div data-aos="fade-right">Team over hierarchy</div></span>
          <span className="career-text06"><div data-aos="fade-right">Flexibility at work</div></span>
          <span className="career-text07"><div data-aos="fade-right">Personal growth</div></span>
          <span className="career-text08"><div data-aos="fade-left">
            We propose the best solutions in every way – strategical,
            contentual, visual.</div>
          </span>
          <span className="career-text09"> <div data-aos="fade-left">
            First, we get to know your status, needs and expectations.</div>
          </span>
          <span className="career-text10"> <div data-aos="fade-left">
            <span>
              An inspirational workplace occupied by
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span> <div data-aos="fade-left">
              like-minded colleagues whose vision change the
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </div></span>
            <span>world</span></div>
          </span>
          <span className="career-text14">
          <div data-aos="fade-left">
            We study your competition, market position and customers.</div>
          </span>
          <span className="career-text15"><div data-aos="fade-right">Competitive salary</div></span>
          <span className="career-text16">
            <span><div data-aos="fade-left">
              We prepare everything from the first line of copy to the last line
              of code. We work
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </div></span>
            <span><div data-aos="fade-left">in sprints and favour evolution over revolution.</div></span>
          </span>
          <div className="career-separator" data-aos="fade-right"></div>
          <div className="career-separator1"data-aos="fade-left"></div>
          <div className="career-separator2"data-aos="fade-right"></div>
          <div className="career-separator3" data-aos="fade-left"></div>
          <span className="career-text19"data-aos="fade-right">01</span>
          <span className="career-text20"data-aos="fade-right">04</span>
          <span className="career-text21"data-aos="fade-right">03</span>
          <span className="career-text22"data-aos="fade-right">02</span>
        </div>
        <Footer rootClassName="footer-root-class-name5"></Footer>
        <Header rootClassName="header-root-class-name4"></Header>
      </div>
      <style jsx>
        {`
          .career-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #d9d9d9;
          }
          .career-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 694px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .career-text {
            top: 201px;
            left: 100px;
            color: rgb(0, 22, 78);
            position: absolute;
            font-size: 90px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 500;
          }
          .career-link {
            top: 518px;
            left: 100px;
            color: rgb(0, 0, 0);
            width: 268px;
            position: absolute;
            font-size: 20px;
            font-weight: 500;
            padding-top: 20px;
            border-width: 0px;
            padding-left: 40px;
            border-radius: 50px;
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: 20px;
            text-decoration: none;
            background-color: rgb(255, 221, 26);
          }
          .career-icon {
            top: 543px;
            left: 324px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .career-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 1087px;
            display: flex;
            position: relative;
            align-items: flex-start;
            background-color: #00164e;
          }
          .career-text04 {
            top: 132px;
            left: 100px;
            color: rgb(84, 100, 136);
            width: 148px;
            height: 24px;
            position: absolute;
          }
          .career-text05 {
            top: 418px;
            left: 132px;
            color: var(--dl-color-gray-white);
            position: absolute;
            font-size: 40px;
            align-self: flex-start;
            font-style: normal;
            font-weight: 500;
          }
          .career-text06 {
            top: 578px;
            left: 132px;
            color: var(--dl-color-gray-white);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
          }
          .career-text07 {
            top: 738px;
            left: 132px;
            color: var(--dl-color-gray-white);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
          }
          .career-text08 {
            top: 759px;
            left: 627px;
            color: var(--dl-color-gray-white);
            position: absolute;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
          }
          .career-text09 {
            top: 439px;
            left: 627px;
            color: var(--dl-color-gray-white);
            position: absolute;
            font-size: 18px;
          }
          .career-text10 {
            top: 120px;
            left: 418px;
            color: var(--dl-color-gray-white);
            right: 100px;
            width: 918px;
            height: 192px;
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
            line-height: 1.5;
          }
          .career-text14 {
            top: 596px;
            left: 627px;
            color: var(--dl-color-gray-white);
            right: 807px;
            width: 506px;
            bottom: 472px;
            height: auto;
            position: absolute;
            font-size: 18px;
          }
          .career-text15 {
            top: 898px;
            left: 132px;
            color: var(--dl-color-gray-white);
            bottom: 122px;
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
          }
          .career-text16 {
            top: 903px;
            left: 627px;
            color: var(--dl-color-gray-white);
            right: 117px;
            position: absolute;
            font-size: 18px;
          }
          .career-separator {
            top: 382px;
            flex: 0 0 auto;
            left: 100px;
            right: 100px;
            width: auto;
            height: auto;
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
          .career-separator1 {
            top: 862px;
            flex: 0 0 auto;
            left: 100px;
            right: 100px;
            width: auto;
            height: auto;
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
          .career-separator2 {
            top: 702px;
            flex: 0 0 auto;
            left: 100px;
            right: 100px;
            width: auto;
            height: auto;
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
          .career-separator3 {
            top: 542px;
            flex: 0 0 auto;
            left: 100px;
            right: 100px;
            width: auto;
            height: auto;
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
          .career-text19 {
            top: 418px;
            left: 100px;
            color: #ffdd1a;
            position: absolute;
            font-size: 100%;
            font-style: normal;
            font-weight: 500;
          }
          .career-text20 {
            top: 898px;
            left: 100px;
            color: rgb(255, 221, 26);
            position: absolute;
            font-size: 100%;
            font-style: normal;
            font-weight: 500;
          }
          .career-text21 {
            top: 738px;
            left: 100px;
            color: rgb(255, 221, 26);
            position: absolute;
            font-size: 100%;
            font-style: normal;
            font-weight: 500;
          }
          .career-text22 {
            top: 578px;
            left: 100px;
            color: rgb(255, 221, 26);
            position: absolute;
            font-size: 100%;
            font-style: normal;
            font-weight: 500;
          }
          @media (max-width: 769px) {
            .career-text {
              width: 619px;
              height: 201px;
              font-size: 70px;
              line-height: 1.5;
            }
            .career-text05 {
              font-size: 20px;
            }
            .career-text06 {
              font-size: 20px;
            }
            .career-text07 {
              font-size: 20px;
            }
            .career-text08 {
              top: 738px;
              left: 400px;
              right: 100px;
              width: auto;
              height: var(--dl-size-size-small);
            }
            .career-text09 {
              top: 418px;
              left: 400px;
              color: var(--dl-color-gray-white);
              right: 100px;
              width: auto;
              height: auto;
              font-size: 18px;
            }
            .career-text10 {
              top: 120px;
              left: 250px;
              right: var(--dl-space-space-oneandhalfunits);
              width: 500px;
              height: 250px;
              font-size: 32px;
            }
            .career-text14 {
              top: 578px;
              left: 400px;
              right: 100px;
              width: auto;
              height: var(--dl-size-size-small);
            }
            .career-text15 {
              font-size: 20px;
            }
            .career-text16 {
              top: 898px;
              left: 400px;
              color: var(--dl-color-gray-white);
              right: 100px;
              width: auto;
              height: var(--dl-size-size-medium);
              font-size: 18px;
            }
          }
          @media (max-width: 767px) {
            .career-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .career-separator1 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .career-separator2 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .career-separator3 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .career-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .career-separator1 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .career-separator2 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .career-separator3 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 376px) {
            .career-container1 {
              height: 520px;
            }
            .career-text {
              top: 120px;
              left: 16px;
              color: rgb(0, 22, 78);
              width: auto;
              height: auto;
              font-size: 40px;
              font-style: normal;
              font-weight: 500;
            }
            .career-text03 {
              color: #ffdd1a;
            }
            .career-link {
              top: 300px;
              left: 16px;
              right: 60px;
              bottom: 62px;
              height: 63px;
              position: absolute;
            }
            .career-icon {
              top: 320px;
              left: 219px;
            }
            .career-container2 {
              height: 1346px;
            }
            .career-text04 {
              top: 64px;
              left: 16px;
            }
            .career-text05 {
              top: 414px;
              left: 47px;
              font-size: 24px;
            }
            .career-text06 {
              top: 632px;
              left: 47px;
              width: 201px;
              height: 40px;
              font-size: 24px;
            }
            .career-text07 {
              top: 850px;
              left: 47px;
              right: 22px;
              width: 188px;
              height: 40px;
              font-size: 24px;
            }
            .career-text08 {
              top: 904px;
              left: 38px;
              width: 306px;
              height: 96px;
              line-height: 1.5;
            }
            .career-text09 {
              top: 470px;
              left: 38px;
              width: 289px;
              height: 64px;
              line-height: 1.5;
            }
            .career-text10 {
              top: 115px;
              left: 17px;
              color: var(--dl-color-gray-white);
              width: 343px;
              height: 200px;
              font-size: 24px;
              font-style: normal;
              font-weight: 500;
              line-height: 1.75;
            }
            .career-text14 {
              top: 686px;
              left: 38px;
              color: var(--dl-color-gray-white);
              width: 302px;
              height: 64px;
              font-size: 18px;
              line-height: 1.5;
            }
            .career-text15 {
              top: 1100px;
              left: 47px;
              width: 215px;
              height: 40px;
              font-size: 24px;
            }
            .career-text16 {
              top: 1156px;
              left: 38px;
              color: var(--dl-color-gray-white);
              right: -291px;
              width: 300px;
              font-size: 18px;
              line-height: 1.5;
            }
            .career-separator {
              top: 378px;
              left: 16px;
              right: 16px;
            }
            .career-separator1 {
              top: 1064px;
              left: 16px;
              right: 16px;
            }
            .career-separator2 {
              top: 814px;
              left: 16px;
              right: 16px;
            }
            .career-separator3 {
              top: 596px;
              left: 16px;
              right: 16px;
            }
            .career-text19 {
              top: 414px;
              left: 17px;
              color: rgb(255, 221, 26);
              font-size: 100%;
              font-style: normal;
              font-weight: 500;
            }
            .career-text20 {
              top: 1100px;
              left: 16px;
            }
            .career-text21 {
              top: 850px;
              left: 16px;
            }
            .career-text22 {
              top: 632px;
              left: 16px;
              width: 22px;
              height: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Career
