import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header1 from '../components/header1'

const Applicationform = (props) => {
  return (
    <>
      <div className="applicationform-container">
        <Head>
          <title>applicationform - Indiespirit-Website</title>
          <meta
            property="og:title"
            content="applicationform - Indiespirit-Website"
          />
        </Head>
        <div className="applicationform-container1">
          <input
            type="text"
            placeholder="Enter Your Full Name"
            className="applicationform-textinput input"
          />
          <input
            type="text"
            placeholder="example@gmail.com"
            className="applicationform-textinput1 input"
          />
          <input
            type="text"
            placeholder="Upload Your CV Here"
            className="applicationform-textinput2 input"
          />
          <input
            type="text"
            placeholder="Enter Your Mobile Number"
            className="applicationform-textinput3 input"
          />
          <span className="applicationform-text">
            <span>apply for this job</span>
            <br></br>
          </span>
          <span className="applicationform-text03"> <div data-aos="fade-right">Full Name</div></span>
          <span className="applicationform-text04">
            <span> <div data-aos="fade-right">Email Address</div></span>
            <br></br>
          </span>
          <span className="applicationform-text07"><div data-aos="fade-right">Resume / CV</div></span>
          <span className="applicationform-text08">
            <span><div data-aos="fade-right">Mobile</div></span>
            <br></br>
          </span>
          <Link href="/contactus"><div data-aos="fade-right">
            <a className="applicationform-link button">
              <span>
                <span>Submit</span>
                <br></br>
              </span>
            </a></div>
          </Link>
          <svg viewBox="0 0 1024 1024" className="applicationform-icon">
            <path d="M567.168 311.168c-16.683 16.683-16.683 43.648 0 60.331l97.835 97.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h323.669l-97.835 97.835c-16.683 16.683-16.683 43.648 0 60.331 8.32 8.32 19.243 12.501 30.165 12.501s21.845-4.181 30.165-12.501l200.832-200.832-200.832-200.832c-16.683-16.683-43.648-16.683-60.331 0z"></path>
          </svg>
          <div className="applicationform-separator"data-aos="fade-right"></div>
          <div className="applicationform-separator1"data-aos="fade-right"></div>
          <div className="applicationform-separator2"data-aos="fade-right"></div>
          <Header1 rootClassName="header1-root-class-name11"></Header1>
        </div>
      </div>
      <style jsx>
        {`
          .applicationform-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .applicationform-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 1170px;
            display: flex;
            position: relative;
            align-items: flex-start;
            background-color: #00164e;
          }
          .applicationform-textinput {
            top: 258px;
            left: 100px;
            color: #546488;
            position: absolute;
            font-size: 40px;
            border-color: transparent;
            background-color: transparent;
          }
          .applicationform-textinput1 {
            top: 448px;
            left: 100px;
            color: #546488;
            position: absolute;
            font-size: 40px;
            border-color: transparent;
            background-color: transparent;
          }
          .applicationform-textinput2 {
            top: 840px;
            left: 111px;
            color: #546488;
            position: absolute;
            font-size: 40px;
            border-color: transparent;
            background-color: transparent;
          }
          .applicationform-textinput3 {
            top: 638px;
            left: 100px;
            color: #546488;
            position: absolute;
            font-size: 40px;
            border-color: transparent;
            background-color: transparent;
          }
          .applicationform-text {
            top: 120px;
            left: 100px;
            color: rgb(84, 100, 136);
            position: absolute;
            font-style: normal;
            font-weight: 500;
            text-transform: uppercase;
          }
          .applicationform-text03 {
            top: 206px;
            left: 100px;
            color: rgb(255, 255, 255);
            position: absolute;
            font-size: 18px;
          }
          .applicationform-text04 {
            top: 396px;
            left: 100px;
            color: rgb(255, 255, 255);
            position: absolute;
            font-size: 18px;
          }
          .applicationform-text07 {
            top: 776px;
            left: 100px;
            color: rgb(255, 255, 255);
            position: absolute;
            font-size: 18px;
          }
          .applicationform-text08 {
            top: 586px;
            left: 100px;
            color: rgb(255, 255, 255);
            position: absolute;
            font-size: 18px;
          }
          .applicationform-link {
            top: 978px;
            left: 100px;
            color: rgb(0, 0, 0);
            width: 252px;
            height: 72px;
            font-weight: 500;
            position: absolute;
            font-size: 20px;
            padding-top: 20px;
            border-color: #ffdd1a;
            padding-left: 40px;
            border-radius: 50px;
            padding-right: 40px;
            padding-bottom: 20px;
            text-decoration: none;
            background-color: #ffdd1a;
          }
          .applicationform-icon {
            top: 1002px;
            left: 250px;
            width: 24px;
            height: 24px;
            position: absolute;
            color: #00164e;
          }
          .applicationform-separator {
            top: 524px;
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
          .applicationform-separator1 {
            top: 714px;
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
          .applicationform-separator2 {
            top: 334px;
            flex: 0 0 auto;
            left: 100px;
            right: 100px;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
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
          @media (max-width: 767px) {
            .applicationform-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .applicationform-separator1 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .applicationform-separator2 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 750px) {
            .applicationform-container1 {
              top: 0px;
              left: 0px;
              height: 1600px;
              position: absolute;
            }
            .applicationform-icon {
              left: 291px;
              bottom: 150px;
            }
          }
          @media (max-width: 479px) {
            .applicationform-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .applicationform-separator1 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .applicationform-separator2 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 376px) {
            .applicationform-container1 {
              height: 944px;
            }
            .applicationform-textinput {
              top: 194px;
              left: 16px;
              width: 279px;
              height: 44px;
              font-size: 24px;
            }
            .applicationform-textinput1 {
              top: 358px;
              left: 16px;
              width: 278px;
              height: 44px;
              font-size: 24px;
            }
            .applicationform-textinput2 {
              top: 698px;
              left: 16px;
              width: 283px;
              height: 44px;
              font-size: 24px;
            }
            .applicationform-textinput3 {
              top: 522px;
              left: 16px;
              width: 282px;
              height: 44px;
              font-size: 24px;
            }
            .applicationform-text {
              top: 66px;
              left: 16px;
            }
            .applicationform-text03 {
              top: 142px;
              left: 16px;
            }
            .applicationform-text04 {
              top: 306px;
              left: 16px;
            }
            .applicationform-text07 {
              top: 634px;
              left: 16px;
            }
            .applicationform-text08 {
              top: 470px;
              left: 16px;
            }
            .applicationform-link {
              top: 810px;
              left: 16px;
              color: rgb(0, 22, 78);
              width: 288px;
              height: 72px;
              position: absolute;
              font-size: 20px;
              font-style: normal;
              font-weight: 500;
              padding-top: 20px;
              border-color: #ffdd1a;
              padding-left: 40px;
              border-radius: 50px;
              padding-right: 40px;
              padding-bottom: 20px;
              background-color: rgb(255, 221, 26);
            }
            .applicationform-icon {
              top: 830px;
              fill: #00164e;
              left: 238px;
              bottom: 85px;
              position: absolute;
            }
            .applicationform-separator {
              top: 578px;
              left: 16px;
              right: 16px;
            }
            .applicationform-separator1 {
              top: 250px;
              left: 16px;
              right: 16px;
            }
            .applicationform-separator2 {
              top: 414px;
              left: 16px;
              right: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Applicationform
