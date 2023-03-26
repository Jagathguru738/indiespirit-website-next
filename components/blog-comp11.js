import React from 'react'

import PropTypes from 'prop-types'

const BlogComp11 = (props) => {
  return (
    <>
      <section className={`blog-comp11-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src="/playground_assets/three-600h.png"
          className="blog-comp11-image"
        />
        <img
          alt={props.image_alt1}
          src="/playground_assets/four-600h.png"
          className="blog-comp11-image1"
        />
        <button type="button" className="blog-comp11-button button">
          <span className="blog-comp11-text">View Case</span>
          <svg viewBox="0 0 1024 1024" className="blog-comp11-icon">
            <path d="M237.254 877.254l530.746-530.744v229.49c0 35.346 28.654 64 64 64s64-28.654 64-64v-384c0-25.884-15.594-49.222-39.508-59.126-7.924-3.284-16.242-4.84-24.492-4.838v-0.036h-384c-35.346 0-64 28.654-64 64 0 35.348 28.654 64 64 64h229.49l-530.744 530.746c-12.498 12.496-18.746 28.876-18.746 45.254s6.248 32.758 18.746 45.254c24.992 24.994 65.516 24.994 90.508 0z"></path>
          </svg>
        </button>
        <button type="button" className="blog-comp11-button1 button">
          <span className="blog-comp11-text01">View Case</span>
          <svg viewBox="0 0 1024 1024" className="blog-comp11-icon2">
            <path d="M237.254 877.254l530.746-530.744v229.49c0 35.346 28.654 64 64 64s64-28.654 64-64v-384c0-25.884-15.594-49.222-39.508-59.126-7.924-3.284-16.242-4.84-24.492-4.838v-0.036h-384c-35.346 0-64 28.654-64 64 0 35.348 28.654 64 64 64h229.49l-530.744 530.746c-12.498 12.496-18.746 28.876-18.746 45.254s6.248 32.758 18.746 45.254c24.992 24.994 65.516 24.994 90.508 0z"></path>
          </svg>
        </button>
        <span className="blog-comp11-text02">{props.text}</span>
        <span className="blog-comp11-text03">{props.text1}</span>
        <img
          alt={props.image_alt2}
          src="/playground_assets/small-200h.png"
          className="blog-comp11-image2"
        />
        <span className="blog-comp11-text04">{props.text2}</span>
        <span className="blog-comp11-text05">{props.text3}</span>
        <span className="blog-comp11-text06">{props.text31}</span>
        <span className="blog-comp11-text07">{props.text4}</span>
        <span className="blog-comp11-text08">{props.text42}</span>
        <span className="blog-comp11-text09">{props.text41}</span>
        <img
          alt={props.image_alt3}
          src="/playground_assets/small-200h.png"
          className="blog-comp11-image3"
        />
        <span className="blog-comp11-text10">{props.text21}</span>
        <span className="blog-comp11-text11">{props.text5}</span>
      </section>
      <style jsx>
        {`
          .blog-comp11-container {
            width: 100%;
            height: 1272;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #00164e;
          }
          .blog-comp11-image {
            top: 215;
            left: 100px;
            width: 503px;
            height: 503px;
            position: absolute;
            object-fit: cover;
          }
          .blog-comp11-image1 {
            top: 350.94;
            left: 837px;
            width: 503px;
            height: 503px;
            position: absolute;
            object-fit: cover;
          }
          .blog-comp11-button {
            top: 224px;
            left: 284px;
            width: 140px;
            height: 140px;
            display: flex;
            opacity: 0%;
            position: absolute;
            transition: 0.3s;
            border-radius: var(--dl-radius-radius-round);
            padding-right: 0px;
            flex-direction: row;
            justify-content: center;
            background-color: #ffdd1a;
          }
          .blog-comp11-button:hover {
            opacity: 100%;
          }
          .blog-comp11-text {
            top: 68px;
            left: 19px;
            position: absolute;
            font-size: 20px;
          }
          .blog-comp11-icon {
            top: 44px;
            left: 55px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .blog-comp11-button1 {
            top: 385px;
            left: 1013px;
            width: 140px;
            height: 140px;
            display: flex;
            opacity: 0%;
            position: absolute;
            transition: 0.3s;
            border-radius: var(--dl-radius-radius-round);
            padding-right: 0px;
            flex-direction: row;
            justify-content: center;
            background-color: #ffdd1a;
          }
          .blog-comp11-button1:hover {
            opacity: 100%;
          }
          .blog-comp11-button1:active {
            opacity: 0%;
          }
          .blog-comp11-text01 {
            top: 68px;
            left: 19px;
            position: absolute;
            font-size: 20px;
          }
          .blog-comp11-icon2 {
            top: 44px;
            left: 55px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .blog-comp11-text02 {
            top: 738;
            left: 100px;
            color: #ffffff;
            width: 439px;
            height: 40px;
            position: absolute;
            font-size: 24px;
          }
          .blog-comp11-text03 {
            top: 873;
            left: 837px;
            color: #ffffff;
            width: 505px;
            height: 80px;
            position: absolute;
            font-size: 24px;
            line-height: 1.8;
          }
          .blog-comp11-image2 {
            top: 790;
            left: 100px;
            width: 48px;
            height: 48px;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-comp11-text04 {
            top: 798;
            left: 160px;
            color: #546488;
            width: 136px;
            height: 32px;
            position: absolute;
            font-size: 18px;
          }
          .blog-comp11-text05 {
            top: 798;
            left: 328px;
            color: #546488;
            position: absolute;
            font-size: 18px;
          }
          .blog-comp11-text06 {
            top: 973.94;
            left: 1063px;
            color: #546488;
            position: absolute;
            font-size: 18px;
          }
          .blog-comp11-text07 {
            top: 793px;
            left: 308px;
            color: #546488;
            position: absolute;
            font-size: 18px;
          }
          .blog-comp11-text08 {
            left: 1046;
            color: #546488;
            bottom: 143px;
            position: absolute;
            font-size: 18px;
          }
          .blog-comp11-text09 {
            left: 1049px;
            color: #546488;
            bottom: 80px;
            position: absolute;
            font-size: 18px;
          }
          .blog-comp11-image3 {
            top: 965.94;
            left: 837px;
            width: 48px;
            height: 48px;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-comp11-text10 {
            top: 973.94;
            left: 897px;
            color: #546488;
            width: 136px;
            height: 32px;
            position: absolute;
            font-size: 18px;
          }
          .blog-comp11-text11 {
            top: 131;
            left: 100;
            color: #546488;
            width: 250px;
            height: 24px;
            position: absolute;
          }
          .blog-comp11-root-class-name {
            top: 3542px;
            left: 0px;
            position: absolute;
          }
          @media (max-width: 769px) {
            .blog-comp11-image {
              width: 300px;
              height: 200px;
            }
            .blog-comp11-image1 {
              top: 778px;
              left: 100px;
              width: 300px;
              height: 200px;
              position: absolute;
            }
            .blog-comp11-text02 {
              top: 439px;
              left: 103px;
              width: 300px;
              height: auto;
            }
            .blog-comp11-text03 {
              top: 1000px;
              left: 100px;
              width: 300px;
              height: auto;
            }
            .blog-comp11-image2 {
              top: 523px;
              left: 98px;
            }
            .blog-comp11-text04 {
              top: 531px;
              left: 158px;
            }
            .blog-comp11-text05 {
              top: 531px;
              left: 326px;
            }
            .blog-comp11-text06 {
              top: 1151px;
              left: 347px;
              bottom: 104px;
              height: 50px;
            }
            .blog-comp11-text07 {
              top: 526px;
              left: 306px;
            }
            .blog-comp11-text08 {
              left: 284px;
              bottom: 154px;
              display: none;
            }
            .blog-comp11-text09 {
              left: 318px;
              bottom: 104px;
            }
            .blog-comp11-image3 {
              top: 1140px;
              left: 100px;
              bottom: 155px;
              padding-bottom: 0px;
            }
            .blog-comp11-text10 {
              top: 1151px;
              left: 160px;
              bottom: 122px;
            }
            .blog-comp11-root-class-name {
              top: 4000px;
            }
          }
          @media (max-width: 376px) {
            .blog-comp11-image {
              top: 132px;
              left: 16px;
              width: 344px;
              height: 344px;
            }
            .blog-comp11-image1 {
              top: 682px;
              left: 16px;
              width: 344px;
              height: 344px;
            }
            .blog-comp11-text02 {
              top: 496px;
              left: 16px;
              width: 314px;
              height: 80px;
              line-height: 1.8;
            }
            .blog-comp11-text03 {
              top: 1046px;
              left: 16px;
              width: 314px;
              height: 120px;
            }
            .blog-comp11-image2 {
              top: 588px;
              left: 16px;
              width: 32px;
              height: 32px;
            }
            .blog-comp11-text04 {
              top: 596px;
              left: 56px;
            }
            .blog-comp11-text05 {
              top: 596px;
              left: 245px;
            }
            .blog-comp11-text06 {
              top: 1178px;
              left: 250px;
            }
            .blog-comp11-text07 {
              top: 592px;
              left: 221px;
            }
            .blog-comp11-text08 {
              display: none;
            }
            .blog-comp11-text09 {
              left: 226px;
              bottom: 78px;
            }
            .blog-comp11-image3 {
              top: 1178px;
              left: 16px;
              width: 32px;
              height: 32px;
            }
            .blog-comp11-text10 {
              top: 1178px;
              left: 56px;
            }
            .blog-comp11-text11 {
              top: 66px;
              left: 16px;
            }
            .blog-comp11-root-class-name {
              top: 4557px;
            }
          }
        `}
      </style>
    </>
  )
}

BlogComp11.defaultProps = {
  text2: 'Kimberly Huang',
  text31: '2 min',
  image_alt3: 'image',
  image_alt: 'image',
  text: 'The JAMstack is a Leading Tech stack',
  text5: 'MORE ARTICLES BY INDIESPIRIT',
  rootClassName: '',
  text1: '5 reasons why startups should hire a digital  design agency',
  text4: '.',
  text41: '.',
  text21: 'Kimberly Huang',
  text42: '.',
  image_alt2: 'image',
  image_alt1: 'image',
  text3: '2 min',
}

BlogComp11.propTypes = {
  text2: PropTypes.string,
  text31: PropTypes.string,
  image_alt3: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  text5: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
  text41: PropTypes.string,
  text21: PropTypes.string,
  text42: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt1: PropTypes.string,
  text3: PropTypes.string,
}

export default BlogComp11
