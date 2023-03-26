import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <div className={`footer-container ${props.rootClassName} `}>
        <Link href="/">
          <a className="footer-link">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="footer-image"
            />
          </a>
        </Link>
        <span className="footer-text">{props.text}</span>
        <ul className="list"></ul>
        <Link href="/">
          <a className="footer-link01">{props.text1}</a>
        </Link>
        <Link href="/work">
          <a className="footer-link02">{props.text2}</a>
        </Link>
        <Link href="/services">
          <a className="footer-link03">{props.text3}</a>
        </Link>
        <Link href="/about-us">
          <a className="footer-link04">{props.text4}</a>
        </Link>
        <Link href="/contactus">
          <a className="footer-link05">{props.text5}</a>
        </Link>
        <Link href="/career">
          <a className="footer-link06">{props.text6}</a>
        </Link>
        <Link href="/blog">
          <a className="footer-link07">{props.text7}</a>
        </Link>
        <span className="footer-text1">{props.text8}</span>
        <span className="footer-text2">{props.text9}</span>
        <span className="footer-text3">{props.text10}</span>
        <span className="footer-text4">{props.text11}</span>
        <span className="footer-text5">{props.text12}</span>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-link08"
        >
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="footer-image1"
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-link09"
        >
          <img
            alt={props.image_alt2}
            src={props.image_src2}
            className="footer-image2"
          />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-link10"
        >
          <img
            alt={props.image_alt3}
            src={props.image_src3}
            className="footer-image3"
          />
        </a>
        <a
          href="https://dribble.com"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-link11"
        >
          <img
            alt={props.image_alt4}
            src={props.image_src4}
            className="footer-image4"
          />
        </a>
      </div>
      <style jsx>
        {`
          .footer-container {
            width: 100%;
            height: 504px;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #f4f8fe;
          }

          .footer-link {
            display: contents;
          }
          .footer-image {
            top: 120px;
            left: 100px;
            width: 179px;
            height: 32px;
            position: absolute;
            object-fit: cover;
            text-decoration: none;
          }
          .footer-text {
            top: 184px;
            left: 101px;
            color: #313659;
            width: 300px;
            position: absolute;
            font-size: 20px;
            line-height: 1.5;
          }
          .footer-link01 {
            top: 120px;
            left: 521px;
            color: #313659;
            position: absolute;
            font-size: 20px;
            text-decoration: none;
          }
          .footer-link02 {
            top: 168px;
            left: 521px;
            color: #313659;
            position: absolute;
            font-size: 20px;
            text-decoration: none;
          }
          .footer-link03 {
            top: 216px;
            left: 521px;
            color: #313659;
            position: absolute;
            font-size: 20px;
            text-decoration: none;
          }
          .footer-link04 {
            top: 264px;
            left: 521px;
            color: #313659;
            position: absolute;
            font-size: 20px;
            text-decoration: none;
          }
          .footer-link05 {
            top: 312px;
            left: 521px;
            color: #313659;
            position: absolute;
            font-size: 20px;
            text-decoration: none;
          }
          .footer-link06 {
            top: 120px;
            left: 731px;
            color: #313659;
            position: absolute;
            font-size: 20px;
            text-decoration: none;
          }
          .footer-link07 {
            top: 168px;
            left: 731px;
            color: #313659;
            position: absolute;
            font-size: 20px;
            text-decoration: none;
          }
          .footer-text1 {
            top: 120px;
            left: 941px;
            color: #313659;
            position: absolute;
          }
          .footer-text2 {
            top: 152px;
            left: 941px;
            color: #313659;
            position: absolute;
            font-size: 20px;
          }
          .footer-text3 {
            top: 216px;
            left: 941px;
            color: #313659;
            position: absolute;
          }
          .footer-text4 {
            top: 248px;
            left: 941px;
            color: #313659;
            position: absolute;
            font-size: 20px;
          }
          .footer-text5 {
            top: 312px;
            left: 941px;
            color: #313659;
            position: absolute;
          }
          .footer-link08 {
            display: contents;
          }
          .footer-image1 {
            top: 346.67px;
            left: 943.67px;
            width: 27px;
            height: 27px;
            position: absolute;
            object-fit: cover;
            text-decoration: none;
          }
          .footer-link09 {
            display: contents;
          }
          .footer-image2 {
            top: 346.67px;
            left: 993px;
            width: 27px;
            height: 27px;
            position: absolute;
            object-fit: cover;
            text-decoration: none;
          }
          .footer-link10 {
            display: contents;
          }
          .footer-image3 {
            top: 346.67px;
            left: 1039.67px;
            width: 27px;
            height: 27px;
            position: absolute;
            object-fit: cover;
            text-decoration: none;
          }
          .footer-link11 {
            display: contents;
          }
          .footer-image4 {
            top: 346.67px;
            left: 1089px;
            width: 27px;
            height: 27px;
            position: absolute;
            object-fit: cover;
            text-decoration: none;
          }

          .footer-root-class-name1 {
            top: 7649px;
            right: 0px;
            bottom: -2px;
            position: absolute;
          }
          .footer-root-class-name2 {
            top: 8479px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            position: absolute;
          }
          .footer-root-class-name3 {
            top: 6181px;
            left: 0px;
            right: -16px;
            bottom: -18px;
            position: absolute;
          }
          .footer-root-class-name4 {
            top: 5000px;
            left: 0px;
            position: absolute;
          }

          .footer-root-class-name6 {
            top: 9443px;
            left: 0px;
            bottom: 0px;
            position: absolute;
          }
          .footer-root-class-name7 {
            left: -3px;
            bottom: 3px;
            position: absolute;
          }
          .footer-root-class-name8 {
            top: 8479px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            position: absolute;
          }
          .footer-root-class-name9 {
            top: 8480px;
            left: 0px;
            right: -10px;
            bottom: 1017px;
            position: absolute;
          }

          .footer-root-class-name11 {
            top: 952px;
            right: 0px;
            position: absolute;
          }
          .footer-root-class-name12 {
            top: 952px;
            right: 0px;
            position: absolute;
          }
          .footer-root-class-name13 {
            top: 952px;
            right: 0px;
            position: absolute;
          }
          .footer-root-class-name14 {
            left: 0px;
            bottom: 0px;
            position: absolute;
          }
          .footer-root-class-name15 {
            left: -97px;
            width: 1440px;
            bottom: -1102px;
            position: absolute;
          }
          @media (max-width: 769px) {
            .footer-image {
              top: 53px;
              left: 70px;
            }
            .footer-text {
              top: 112px;
              left: 70px;
            }
            .footer-link01 {
              top: 53px;
              left: 353px;
            }
            .footer-link02 {
              top: 97px;
              left: 353px;
            }
            .footer-link03 {
              top: 145px;
              left: 353px;
            }
            .footer-link04 {
              top: 193px;
              left: 353px;
            }
            .footer-link05 {
              top: 241px;
              left: 353px;
            }
            .footer-link06 {
              top: 53px;
              left: 482px;
            }
            .footer-link07 {
              top: 97px;
              left: 486px;
            }
            .footer-text1 {
              top: 190px;
              left: 70px;
            }
            .footer-text2 {
              top: 222px;
              left: 70px;
            }
            .footer-text3 {
              top: 264px;
              left: 70px;
            }
            .footer-text4 {
              top: 296px;
              left: 70px;
            }
            .footer-text5 {
              top: 289px;
              left: 353px;
              font-size: 16px;
            }
            .footer-image1 {
              top: 337px;
              left: 353px;
            }
            .footer-image2 {
              top: 337px;
              left: 390px;
            }
            .footer-image3 {
              top: 337px;
              left: 427px;
            }
            .footer-image4 {
              top: 337px;
              left: 464px;
            }
            .footer-root-class-name4 {
              top: 5039px;
              bottom: 0px;
            }
            .footer-root-class-name6 {
              top: 8150px;
              right: -4px;
              bottom: 160px;
            }
            .footer-root-class-name9 {
              top: 7834px;
              right: -1px;
            }
          }
          @media (max-width: 376px) {
            .footer-container {
              height: 876px;
            }
            .footer-image {
              top: 60px;
              left: 17px;
            }
            .footer-text {
              top: 124px;
              left: 18px;
            }
            .footer-link01 {
              top: 258px;
              left: 17px;
            }
            .footer-link02 {
              top: 306px;
              left: 17px;
            }
            .footer-link03 {
              top: 354px;
              left: 17px;
            }
            .footer-link04 {
              top: 402px;
              left: 17px;
            }
            .footer-link05 {
              top: 450px;
              left: 17px;
            }
            .footer-link06 {
              top: 258px;
              left: 199px;
            }
            .footer-link07 {
              top: 306px;
              left: 199px;
            }
            .footer-text1 {
              top: 544px;
              left: 17px;
            }
            .footer-text2 {
              top: 576px;
              left: 17px;
            }
            .footer-text3 {
              top: 640px;
              left: 17px;
            }
            .footer-text4 {
              top: 672px;
              left: 17px;
            }
            .footer-text5 {
              top: 736px;
              left: 17px;
            }
            .footer-image1 {
              top: 770.67px;
              left: 19.67px;
            }
            .footer-image2 {
              top: 770.67px;
              left: 69px;
            }
            .footer-image3 {
              top: 770.67px;
              left: 115.67px;
            }
            .footer-image4 {
              top: 770.67px;
              left: 165px;
            }
            .footer-root-class-name1 {
              top: 7520px;
            }
            .footer-root-class-name3 {
              top: 6600px;
              right: 0px;
              bottom: -261px;
            }
            .footer-root-class-name4 {
              top: 2043px;
              left: 0px;
              bottom: 0px;
            }
            .footer-root-class-name6 {
              top: 9440px;
            }
            .footer-root-class-name7 {
              right: -3px;
              bottom: 0px;
            }
            .footer-root-class-name9 {
              top: 7650px;
              right: -2px;
            }
            .footer-root-class-name11 {
              top: 450px;
              right: 0px;
              bottom: -376px;
              position: absolute;
            }
            .footer-root-class-name12 {
              top: 450px;
              right: 0px;
              bottom: -376px;
              position: absolute;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  image_alt: 'image',
  image_src2: '/playground_assets/4406253-8ee28207-200h.png',
  image_src3: '/playground_assets/408805-2dc51ddf-200h.png',
  text6: 'Career',
  text: '© Indiespirit 2021. All rights  reserved.',
  text1: 'Home',
  image_alt4: 'image',
  text10: 'PHONE NO',
  text3: 'Services',
  text5: 'Contact Us',
  text8: 'E-MAIL',
  image_src: '/playground_assets/image4-200h.png',
  image_alt2: 'image',
  text9: 'hello@Indiespirit.in',
  text2: 'Work',
  image_alt3: 'image',
  text12: 'FOLLOW',
  text4: 'About Us',
  image_src1: '/playground_assets/4406234-da9c04f6-200h.png',
  rootClassName: '',
  image_alt1: 'image',
  text7: 'Blog',
  image_src4: '/playground_assets/794336-d5eb1dd5-200h.png',
  text11: '+91-7358638156',
}

Footer.propTypes = {
  image_alt: PropTypes.string,
  image_src2: PropTypes.string,
  image_src3: PropTypes.string,
  text6: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  image_alt4: PropTypes.string,
  text10: PropTypes.string,
  text3: PropTypes.string,
  text5: PropTypes.string,
  text8: PropTypes.string,
  image_src: PropTypes.string,
  image_alt2: PropTypes.string,
  text9: PropTypes.string,
  text2: PropTypes.string,
  image_alt3: PropTypes.string,
  text12: PropTypes.string,
  text4: PropTypes.string,
  image_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt1: PropTypes.string,
  text7: PropTypes.string,
  image_src4: PropTypes.string,
  text11: PropTypes.string,
}

export default Footer
