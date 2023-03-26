import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header1 from '../components/header1'
import Footer from '../components/footer'

const Startaproject = (props) => {
  return (
    <>
      <div className="startaproject-container">
        <Head>
          <title>startaproject - Indiespirit-Website</title>
          <meta
            property="og:title"
            content="startaproject - Indiespirit-Website"
          />
        </Head>
        <div className="startaproject-container1">
          <input
            type="text"
            placeholder="Your Name"
            className="startaproject-textinput input"
          />
          <Link href="/email">
            <a className="startaproject-link button">Continue</a>
          </Link>
          <svg viewBox="0 0 1024 1024" className="startaproject-icon">
            <path d="M567.168 311.168c-16.683 16.683-16.683 43.648 0 60.331l97.835 97.835h-323.669c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h323.669l-97.835 97.835c-16.683 16.683-16.683 43.648 0 60.331 8.32 8.32 19.243 12.501 30.165 12.501s21.845-4.181 30.165-12.501l200.832-200.832-200.832-200.832c-16.683-16.683-43.648-16.683-60.331 0z"></path>
          </svg>
          <Link href="/contactus">
            <a className="startaproject-link1">
              <svg viewBox="0 0 1024 1024" className="startaproject-icon2">
                <path d="M768 469.333h-309.077l67.669-67.669c33.323-33.323 33.323-87.424 0-120.661-33.323-33.323-87.339-33.323-120.661 0l-273.664 273.664 273.664 273.664c16.64 16.683 38.485 25.003 60.331 25.003s43.648-8.32 60.331-25.003c33.323-33.323 33.323-87.424 0-120.661l-67.669-67.669h309.077c47.104 0 85.333-38.229 85.333-85.333 0-47.147-38.229-85.333-85.333-85.333z"></path>
              </svg>
            </a>
          </Link>
          <span className="startaproject-text">
            <span className="startaproject-text1">1</span>
            <span className="startaproject-text2">/4</span>
          </span>
          <img
            alt="image"
            src="/playground_assets/ellipse%205%20%5B1%5D-200h.png"
            className="startaproject-image"
          />
          <Link href="/email">
            <a className="startaproject-link2">
              <svg viewBox="0 0 1024 1024" className="startaproject-icon4">
                <path d="M451.669 281.003c-33.323 33.237-33.323 87.339 0 120.661l67.669 67.669h-309.077c-47.104 0-85.333 38.187-85.333 85.333 0 47.104 38.229 85.333 85.333 85.333h309.077l-67.669 67.669c-33.323 33.237-33.323 87.339 0 120.661 16.683 16.683 38.485 25.003 60.331 25.003s43.648-8.32 60.331-25.003l273.664-273.664-273.664-273.664c-33.323-33.323-87.339-33.323-120.661 0z"></path>
              </svg>
            </a>
          </Link>
          <Link href="/contactus">
            <a className="startaproject-link3">
              <svg viewBox="0 0 1024 1024" className="startaproject-icon6">
                <path d="M742.997 281.003c-33.28-33.323-87.381-33.323-120.661 0l-110.336 110.336-110.336-110.336c-33.28-33.323-87.381-33.323-120.661 0-33.323 33.323-33.323 87.339 0 120.661l110.293 110.336-110.293 110.336c-33.323 33.323-33.323 87.339 0 120.661 16.64 16.683 38.485 25.003 60.331 25.003s43.691-8.32 60.331-25.003l110.336-110.336 110.336 110.336c16.64 16.683 38.485 25.003 60.331 25.003s43.691-8.32 60.331-25.003c33.323-33.323 33.323-87.339 0-120.661l-110.293-110.336 110.293-110.336c33.323-33.323 33.323-87.339 0-120.661z"></path>
              </svg>
            </a>
          </Link>
          <Header1 rootClassName="header1-root-class-name6"></Header1>
          <Footer rootClassName="footer-root-class-name11"></Footer>
        </div>
        <img
          alt="image"
          src="/playground_assets/ellipse%206%20%5B3%5D-200h.png"
          className="startaproject-image1"
        />
      </div>
      <style jsx>
        {`
          .startaproject-container {
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
          .startaproject-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 1456px;
            display: flex;
            position: relative;
            align-items: flex-start;
            background-color: #00164e;
          }
          .startaproject-textinput {
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
          .startaproject-link {
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
          .startaproject-icon {
            top: 699px;
            left: 324px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .startaproject-link1 {
            display: contents;
          }
          .startaproject-icon2 {
            top: 595px;
            fill: #546488;
            right: 218px;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            position: absolute;
            text-decoration: none;
          }
          .startaproject-text {
            top: 695px;
            left: 1220px;
            position: absolute;
            font-size: 20px;
          }
          .startaproject-text1 {
            color: var(--dl-color-gray-white);
          }
          .startaproject-text2 {
            color: #546488;
          }
          .startaproject-image {
            top: 660px;
            right: 184px;
            width: 100px;
            height: 100px;
            position: absolute;
            object-fit: cover;
          }
          .startaproject-link2 {
            display: contents;
          }
          .startaproject-icon4 {
            top: 540px;
            fill: #546488;
            right: 218px;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            position: absolute;
            text-decoration: none;
          }
          .startaproject-link3 {
            display: contents;
          }
          .startaproject-icon6 {
            top: 100px;
            fill: #546488;
            right: 201px;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            position: absolute;
            text-decoration: none;
          }
          .startaproject-image1 {
            top: 661px;
            right: 186px;
            width: auto;
            height: auto;
            position: absolute;
            object-fit: cover;
          }
          @media (max-width: 769px) {
            .startaproject-textinput {
              top: 0px5;
              left: 50px;
              font-size: 40px;
            }
            .startaproject-link {
              top: 550px;
              left: 50px;
            }
            .startaproject-icon2 {
              right: 90px;
            }
            .startaproject-text {
              top: 700px;
              left: 615px;
            }
            .startaproject-image {
              right: 90px;
            }
            .startaproject-icon4 {
              right: 90px;
            }
            .startaproject-icon6 {
              top: 120px;
              right: 90px;
            }
            .startaproject-image1 {
              right: 90px;
            }
          }
          @media (max-width: 750px) {
            .startaproject-text {
              left: 595px;
            }
          }
          @media (max-width: 376px) {
            .startaproject-container1 {
              height: 500px;
            }
            .startaproject-textinput {
              top: 200px;
              left: 16px;
              width: 337px;
              font-size: 24px;
            }
            .startaproject-link {
              top: 306px;
              left: 24px;
              width: 201px;
              height: 35px;
              font-size: 16px;
              padding-top: 10px;
              padding-bottom: 10px;
            }
            .startaproject-icon {
              top: 313px;
              left: 172px;
            }
            .startaproject-icon2 {
              top: 330px;
              right: 30px;
              width: var(--dl-size-size-xsmall);
              height: var(--dl-size-size-xsmall);
            }
            .startaproject-text {
              top: 387px;
              left: 305px;
              right: 36px;
              font-size: 12px;
            }
            .startaproject-image {
              top: 370px;
              right: 20px;
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .startaproject-icon4 {
              top: 300px;
              right: 30px;
              width: var(--dl-size-size-xsmall);
              height: var(--dl-size-size-xsmall);
            }
            .startaproject-icon6 {
              top: 100px;
              right: 30px;
              width: var(--dl-size-size-xsmall);
              height: var(--dl-size-size-xsmall);
            }
            .startaproject-image1 {
              top: 371px;
              right: 35px;
              width: 25px;
              height: 25px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Startaproject
