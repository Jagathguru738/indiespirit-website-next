import React from 'react'

import PropTypes from 'prop-types'

const Footer1 = (props) => {
  return (
    <>
      <div className={`footer1-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="footer1-image"
        />
        <span className="footer1-text">{props.text}</span>
        <ul className="list"></ul>
        <span className="footer1-text01">{props.text1}</span>
        <span className="footer1-text02">{props.text2}</span>
        <span className="footer1-text03">{props.text3}</span>
        <span className="footer1-text04">{props.text4}</span>
        <span className="footer1-text05">{props.text5}</span>
        <span className="footer1-text06">{props.text6}</span>
        <span className="footer1-text07">{props.text7}</span>
        <span className="footer1-text08">{props.text8}</span>
        <span className="footer1-text09">{props.text9}</span>
        <span className="footer1-text10">{props.text10}</span>
        <span className="footer1-text11">{props.text11}</span>
        <span className="footer1-text12">{props.text12}</span>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer noopener"
          className="footer1-link"
        >
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="footer1-image1"
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer noopener"
          className="footer1-link1"
        >
          <img
            alt={props.image_alt2}
            src={props.image_src2}
            className="footer1-image2"
          />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer noopener"
          className="footer1-link2"
        >
          <img
            alt={props.image_alt3}
            src={props.image_src3}
            className="footer1-image3"
          />
        </a>
        <a
          href="https://dribble.com"
          target="_blank"
          rel="noreferrer noopener"
          className="footer1-link3"
        >
          <img
            alt={props.image_alt4}
            src={props.image_src4}
            className="footer1-image4"
          />
        </a>
      </div>
      <style jsx>
        {`
          .footer1-container {
            width: 100%;
            height: 504px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #f4f8fe;
          }
          .footer1-image {
            top: 120px;
            left: 100px;
            width: 179px;
            height: 32px;
            position: absolute;
            object-fit: cover;
            text-decoration: none;
          }
          .footer1-text {
            top: 184px;
            left: 101px;
            color: #313659;
            width: 300px;
            position: absolute;
            font-size: 20px;
            line-height: 1.5;
          }
          .footer1-text01 {
            top: 120px;
            left: 521px;
            color: #313659;
            position: absolute;
            font-size: 20px;
            text-decoration: none;
          }
          .footer1-text02 {
            top: 168px;
            left: 521px;
            color: #313659;
            position: absolute;
            font-size: 20px;
            text-decoration: none;
          }
          .footer1-text03 {
            top: 216px;
            left: 521px;
            color: #313659;
            position: absolute;
            font-size: 20px;
            text-decoration: none;
          }
          .footer1-text04 {
            top: 264px;
            left: 521px;
            color: #313659;
            position: absolute;
            font-size: 20px;
            text-decoration: none;
          }
          .footer1-text05 {
            top: 312px;
            left: 521px;
            color: #313659;
            position: absolute;
            font-size: 20px;
            text-decoration: none;
          }
          .footer1-text06 {
            top: 120px;
            left: 731px;
            color: #313659;
            position: absolute;
            font-size: 20px;
            text-decoration: none;
          }
          .footer1-text07 {
            top: 168px;
            left: 731px;
            color: #313659;
            position: absolute;
            font-size: 20px;
            text-decoration: none;
          }
          .footer1-text08 {
            top: 120px;
            left: 941px;
            color: #313659;
            position: absolute;
          }
          .footer1-text09 {
            top: 152px;
            left: 941px;
            color: #313659;
            position: absolute;
            font-size: 20px;
          }
          .footer1-text10 {
            top: 216px;
            left: 941px;
            color: #313659;
            position: absolute;
          }
          .footer1-text11 {
            top: 248px;
            left: 941px;
            color: #313659;
            position: absolute;
            font-size: 20px;
          }
          .footer1-text12 {
            top: 312px;
            left: 941px;
            color: #313659;
            position: absolute;
          }
          .footer1-link {
            display: contents;
          }
          .footer1-image1 {
            top: 346.67px;
            left: 943.67px;
            width: 27px;
            height: 27px;
            position: absolute;
            object-fit: cover;
            text-decoration: none;
          }
          .footer1-link1 {
            display: contents;
          }
          .footer1-image2 {
            top: 346.67px;
            left: 993px;
            width: 27px;
            height: 27px;
            position: absolute;
            object-fit: cover;
            text-decoration: none;
          }
          .footer1-link2 {
            display: contents;
          }
          .footer1-image3 {
            top: 346.67px;
            left: 1039.67px;
            width: 27px;
            height: 27px;
            position: absolute;
            object-fit: cover;
            text-decoration: none;
          }
          .footer1-link3 {
            display: contents;
          }
          .footer1-image4 {
            top: 346.67px;
            left: 1089px;
            width: 27px;
            height: 27px;
            position: absolute;
            object-fit: cover;
            text-decoration: none;
          }

          .footer1-root-class-name1 {
            top: 7649px;
            right: 0px;
            bottom: -2px;
            position: absolute;
          }
          .footer1-root-class-name2 {
            top: 8479px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            position: absolute;
          }
          .footer1-root-class-name3 {
            top: 6181px;
            left: 0px;
            right: -16px;
            bottom: -18px;
            position: absolute;
          }
          .footer1-root-class-name4 {
            top: 5164px;
            left: 0px;
            position: absolute;
          }

          .footer1-root-class-name6 {
            top: 9443px;
            left: 0px;
            bottom: 0px;
            position: absolute;
          }
          .footer1-root-class-name7 {
            left: -3px;
            bottom: 3px;
            position: absolute;
          }
          .footer1-root-class-name8 {
            top: 8479px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            position: absolute;
          }
          .footer1-root-class-name9 {
            top: 8479px;
            left: 0px;
            bottom: 0px;
            position: absolute;
          }

          .footer1-root-class-name11 {
            top: 952px;
            right: 0px;
            position: absolute;
          }
          .footer1-root-class-name12 {
            top: 952px;
            right: 0px;
            position: absolute;
          }
          .footer1-root-class-name13 {
            top: 952px;
            right: 0px;
            position: absolute;
          }
          .footer1-root-class-name14 {
            left: 0px;
            bottom: 0px;
            position: absolute;
          }
          .footer1-root-class-name15 {
            top: 1500px;
            right: 2px;
            bottom: 0px;
            position: absolute;
          }
          @media (max-width: 769px) {
            .footer1-image {
              top: 53px;
              left: 70px;
            }
            .footer1-text {
              top: 112px;
              left: 70px;
            }
            .footer1-text01 {
              top: 53px;
              left: 353px;
            }
            .footer1-text02 {
              top: 97px;
              left: 353px;
            }
            .footer1-text03 {
              top: 145px;
              left: 353px;
            }
            .footer1-text04 {
              top: 193px;
              left: 353px;
            }
            .footer1-text05 {
              top: 241px;
              left: 353px;
            }
            .footer1-text06 {
              top: 53px;
              left: 482px;
            }
            .footer1-text07 {
              top: 97px;
              left: 486px;
            }
            .footer1-text08 {
              top: 190px;
              left: 70px;
            }
            .footer1-text09 {
              top: 222px;
              left: 70px;
            }
            .footer1-text10 {
              top: 264px;
              left: 70px;
            }
            .footer1-text11 {
              top: 296px;
              left: 70px;
            }
            .footer1-text12 {
              top: 289px;
              left: 353px;
              font-size: 16px;
            }
            .footer1-image1 {
              top: 337px;
              left: 353px;
            }
            .footer1-image2 {
              top: 337px;
              left: 390px;
            }
            .footer1-image3 {
              top: 337px;
              left: 427px;
            }
            .footer1-image4 {
              top: 337px;
              left: 464px;
            }
          }
          @media (max-width: 376px) {
            .footer1-container {
              height: 876px;
            }
            .footer1-image {
              top: 60px;
              left: 17px;
            }
            .footer1-text {
              top: 124px;
              left: 18px;
            }
            .footer1-text01 {
              top: 258px;
              left: 17px;
            }
            .footer1-text02 {
              top: 306px;
              left: 17px;
            }
            .footer1-text03 {
              top: 354px;
              left: 17px;
            }
            .footer1-text04 {
              top: 402px;
              left: 17px;
            }
            .footer1-text05 {
              top: 450px;
              left: 17px;
            }
            .footer1-text06 {
              top: 258px;
              left: 199px;
            }
            .footer1-text07 {
              top: 306px;
              left: 199px;
            }
            .footer1-text08 {
              top: 544px;
              left: 17px;
            }
            .footer1-text09 {
              top: 576px;
              left: 17px;
            }
            .footer1-text10 {
              top: 640px;
              left: 17px;
            }
            .footer1-text11 {
              top: 672px;
              left: 17px;
            }
            .footer1-text12 {
              top: 736px;
              left: 17px;
            }
            .footer1-image1 {
              top: 770.67px;
              left: 19.67px;
            }
            .footer1-image2 {
              top: 770.67px;
              left: 69px;
            }
            .footer1-image3 {
              top: 770.67px;
              left: 115.67px;
            }
            .footer1-image4 {
              top: 770.67px;
              left: 165px;
            }
          }
        `}
      </style>
    </>
  )
}

Footer1.defaultProps = {
  text4: 'About Us',
  rootClassName: '',
  text: '© Indiespirit 2021. All rights  reserved.',
  image_alt2: 'image',
  image_alt3: 'image',
  image_alt4: 'image',
  image_alt: 'image',
  text11: '+91-7358638156',
  text9: 'hello@Indiespirit.in',
  text1: 'Home',
  text10: 'PHONE NO',
  text8: 'E-MAIL',
  image_src2: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text2: 'Work',
  text12: 'FOLLOW',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src4: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt1: 'image',
  image_src3: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text7: 'Blog',
  text6: 'Career',
  text3: 'Services',
  text5: 'Contact Us',
}

Footer1.propTypes = {
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt3: PropTypes.string,
  image_alt4: PropTypes.string,
  image_alt: PropTypes.string,
  text11: PropTypes.string,
  text9: PropTypes.string,
  text1: PropTypes.string,
  text10: PropTypes.string,
  text8: PropTypes.string,
  image_src2: PropTypes.string,
  text2: PropTypes.string,
  text12: PropTypes.string,
  image_src: PropTypes.string,
  image_src4: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src3: PropTypes.string,
  image_src1: PropTypes.string,
  text7: PropTypes.string,
  text6: PropTypes.string,
  text3: PropTypes.string,
  text5: PropTypes.string,
}

export default Footer1
