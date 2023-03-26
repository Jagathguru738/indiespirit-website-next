import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header1 from '../components/header1'
import Footer from '../components/footer'

const Message = (props) => {
  return (
    <>
      <div className="message-container">
        <Head>
          <title>message - Indiespirit-Website</title>
          <meta property="og:title" content="message - Indiespirit-Website" />
        </Head>
        <div className="message-container1">
          <input
            type="text"
            placeholder="Message"
            className="message-textinput input"
          />
          <Link href="/contactus">
            <a className="message-link button">submit</a>
          </Link>
          <svg viewBox="0 0 1024 1024" className="message-icon">
            <path d="M567.168 311.168c-16.683 16.683-16.683 43.648 0 60.331l97.835 97.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h323.669l-97.835 97.835c-16.683 16.683-16.683 43.648 0 60.331 8.32 8.32 19.243 12.501 30.165 12.501s21.845-4.181 30.165-12.501l200.832-200.832-200.832-200.832c-16.683-16.683-43.648-16.683-60.331 0z"></path>
          </svg>
          <Link href="/mobileno">
            <a className="message-link1">
              <svg viewBox="0 0 1024 1024" className="message-icon2">
                <path d="M768 469.333h-309.077l67.669-67.669c33.323-33.323 33.323-87.424 0-120.661-33.323-33.323-87.339-33.323-120.661 0l-273.664 273.664 273.664 273.664c16.64 16.683 38.485 25.003 60.331 25.003s43.648-8.32 60.331-25.003c33.323-33.323 33.323-87.424 0-120.661l-67.669-67.669h309.077c47.104 0 85.333-38.229 85.333-85.333 0-47.147-38.229-85.333-85.333-85.333z"></path>
              </svg>
            </a>
          </Link>
          <span className="message-text">
            <span className="message-text1">4</span>
            <span className="message-text2">/4</span>
          </span>
          <img
            alt="image"
            src="/playground_assets/ellipse%206%20%5B1%5D-200h.png"
            className="message-image"
          />
          <Link href="/contactus">
            <a className="message-link2">
              <svg viewBox="0 0 1024 1024" className="message-icon4">
                <path d="M451.669 281.003c-33.323 33.237-33.323 87.339 0 120.661l67.669 67.669h-309.077c-47.104 0-85.333 38.187-85.333 85.333 0 47.104 38.229 85.333 85.333 85.333h309.077l-67.669 67.669c-33.323 33.237-33.323 87.339 0 120.661 16.683 16.683 38.485 25.003 60.331 25.003s43.648-8.32 60.331-25.003l273.664-273.664-273.664-273.664c-33.323-33.323-87.339-33.323-120.661 0z"></path>
              </svg>
            </a>
          </Link>
          <Link href="/contactus">
            <a className="message-link3">
              <svg viewBox="0 0 1024 1024" className="message-icon6">
                <path d="M742.997 281.003c-33.28-33.323-87.381-33.323-120.661 0l-110.336 110.336-110.336-110.336c-33.28-33.323-87.381-33.323-120.661 0-33.323 33.323-33.323 87.339 0 120.661l110.293 110.336-110.293 110.336c-33.323 33.323-33.323 87.339 0 120.661 16.64 16.683 38.485 25.003 60.331 25.003s43.691-8.32 60.331-25.003l110.336-110.336 110.336 110.336c16.64 16.683 38.485 25.003 60.331 25.003s43.691-8.32 60.331-25.003c33.323-33.323 33.323-87.339 0-120.661l-110.293-110.336 110.293-110.336c33.323-33.323 33.323-87.339 0-120.661z"></path>
              </svg>
            </a>
          </Link>
          <Header1 rootClassName="header1-root-class-name8"></Header1>
          <Footer rootClassName="footer-root-class-name13"></Footer>
        </div>
      </div>
      <style jsx>
        {`
          .message-container {
            width: 100%;
            display: flex;
            overflow: auto;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            min-height: 100vh;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: column;
          }
          .message-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 1456px;
            display: flex;
            position: relative;
            align-items: flex-start;
            background-color: #00164e;
          }
          .message-textinput {
            top: 273px;
            left: 100px;
            color: #546488;
            width: 434px;
            height: 88px;
            position: absolute;
            font-size: 70px;
            border-color: transparent;
            background-color: transparent;
          }
          .message-link {
            top: 675px;
            left: 100px;
            width: 271px;
            bottom: 305px;
            height: 72px;
            position: absolute;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            padding-top: 25px;
            border-color: #ffdd1a;
            padding-left: 40px;
            border-radius: 50px;
            padding-right: 40px;
            padding-bottom: 25px;
            text-transform: uppercase;
            text-decoration: none;
            background-color: rgb(255, 221, 26);
          }
          .message-icon {
            top: 700px;
            left: 325px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .message-link1 {
            display: contents;
          }
          .message-icon2 {
            top: 595px;
            fill: #546488;
            right: 206px;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            position: absolute;
            text-decoration: none;
          }
          .message-text {
            top: 695px;
            left: 1228px;
            position: absolute;
            font-size: 20px;
          }
          .message-text1 {
            color: var(--dl-color-gray-white);
          }
          .message-text2 {
            color: #546488;
          }
          .message-image {
            top: 662px;
            right: 178px;
            width: 100px;
            height: 100px;
            position: absolute;
            object-fit: cover;
          }
          .message-link2 {
            display: contents;
          }
          .message-icon4 {
            top: 541px;
            fill: #546488;
            right: 203px;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            position: absolute;
            text-decoration: none;
          }
          .message-link3 {
            display: contents;
          }
          .message-icon6 {
            top: 100px;
            fill: #546488;
            right: 201px;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            position: absolute;
            text-decoration: none;
          }
          @media (max-width: 769px) {
            .message-textinput {
              left: 50px;
              font-size: 40px;
            }
            .message-link {
              top: 550px;
              left: 50px;
            }
            .message-icon2 {
              right: 90px;
            }
            .message-text {
              top: 700px;
              left: 615px;
            }
            .message-image {
              right: 90px;
            }
            .message-icon4 {
              top: 540px;
              right: 90px;
            }
            .message-icon6 {
              top: 120px;
              right: 90px;
            }
          }
          @media (max-width: 750px) {
            .message-text {
              left: 595px;
            }
          }
          @media (max-width: 376px) {
            .message-container1 {
              height: 500px;
            }
            .message-textinput {
              top: 200px;
              left: 16px;
              width: 331px;
              font-size: 24px;
            }
            .message-link {
              top: 306px;
              left: 24px;
              width: 201px;
              height: 35px;
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
              padding-top: 10px;
              padding-bottom: 10px;
              text-transform: uppercase;
              background-color: rgb(255, 221, 26);
            }
            .message-icon {
              top: 313px;
              left: 144px;
            }
            .message-icon2 {
              top: 330px;
              right: 30px;
              width: var(--dl-size-size-xsmall);
              height: var(--dl-size-size-xsmall);
            }
            .message-text {
              top: 387px;
              left: 305px;
              right: 34px;
              font-size: 12px;
            }
            .message-image {
              top: 370px;
              right: 20px;
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .message-icon4 {
              top: 300px;
              right: 30px;
              width: var(--dl-size-size-xsmall);
              height: var(--dl-size-size-xsmall);
            }
            .message-icon6 {
              top: 100px;
              right: 30px;
              width: var(--dl-size-size-xsmall);
              height: var(--dl-size-size-xsmall);
            }
          }
        `}
      </style>
    </>
  )
}

export default Message
