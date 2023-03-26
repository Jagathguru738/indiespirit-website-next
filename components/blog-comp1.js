import React from 'react'

import PropTypes from 'prop-types'

const BlogComp1 = (props) => {
  return (
    <>
      <section  data-aos="fade-up" data-aos-duration="1000" className={`blog-comp1-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src="/playground_assets/jamstack-600w.jpg"
          className="blog-comp1-image"
        />
        <img
          alt={props.image_alt1}
          src="/playground_assets/tail-600w.png"
          className="blog-comp1-image1"
        />
        <button type="button" className="blog-comp1-button button">
          <span className="blog-comp1-text">View Case</span>
          <svg viewBox="0 0 1024 1024" className="blog-comp1-icon">
            <path d="M237.254 877.254l530.746-530.744v229.49c0 35.346 28.654 64 64 64s64-28.654 64-64v-384c0-25.884-15.594-49.222-39.508-59.126-7.924-3.284-16.242-4.84-24.492-4.838v-0.036h-384c-35.346 0-64 28.654-64 64 0 35.348 28.654 64 64 64h229.49l-530.744 530.746c-12.498 12.496-18.746 28.876-18.746 45.254s6.248 32.758 18.746 45.254c24.992 24.994 65.516 24.994 90.508 0z"></path>
          </svg>
        </button>
        <button type="button" className="blog-comp1-button1 button">
          <span className="blog-comp1-text01">View Case</span>
          <svg viewBox="0 0 1024 1024" className="blog-comp1-icon2">
            <path d="M237.254 877.254l530.746-530.744v229.49c0 35.346 28.654 64 64 64s64-28.654 64-64v-384c0-25.884-15.594-49.222-39.508-59.126-7.924-3.284-16.242-4.84-24.492-4.838v-0.036h-384c-35.346 0-64 28.654-64 64 0 35.348 28.654 64 64 64h229.49l-530.744 530.746c-12.498 12.496-18.746 28.876-18.746 45.254s6.248 32.758 18.746 45.254c24.992 24.994 65.516 24.994 90.508 0z"></path>
          </svg>
        </button>
        <span className="blog-comp1-text02">{props.text}</span>
        <span className="blog-comp1-text03">{props.text1}</span>
        <img
          alt={props.image_alt2}
          src="/playground_assets/small-200h.png"
          className="blog-comp1-image2"
        />
        <span className="blog-comp1-text04">{props.text2}</span>
        <span className="blog-comp1-text05">{props.text3}</span>
        <span className="blog-comp1-text06">{props.text31}</span>
        <span className="blog-comp1-text07">{props.text4}</span>
        <span className="blog-comp1-text08">{props.text42}</span>
        <span className="blog-comp1-text09">{props.text41}</span>
        <img
          alt={props.image_alt3}
          src="/playground_assets/small-200h.png"
          className="blog-comp1-image3"
        />
        <span className="blog-comp1-text10">{props.text21}</span>
      </section>
      <style jsx>
        {`
          .blog-comp1-container {
            width: 100%;
            height: 824px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .blog-comp1-image {
            top: 62px;
            left: 100px;
            width: 503px;
            height: 503px;
            position: absolute;
            object-fit: cover;
          }
          .blog-comp1-image1 {
            top: 198px;
            left: 837px;
            width: 503px;
            height: 503px;
            position: absolute;
            object-fit: cover;
          }
          .blog-comp1-button {
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
          .blog-comp1-button:hover {
            opacity: 100%;
          }
          .blog-comp1-text {
            top: 68px;
            left: 19px;
            position: absolute;
            font-size: 20px;
          }
          .blog-comp1-icon {
            top: 44px;
            left: 55px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .blog-comp1-button1 {
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
          .blog-comp1-button1:hover {
            opacity: 100%;
          }
          .blog-comp1-button1:active {
            opacity: 0%;
          }
          .blog-comp1-text01 {
            top: 68px;
            left: 19px;
            position: absolute;
            font-size: 20px;
          }
          .blog-comp1-icon2 {
            top: 44px;
            left: 55px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .blog-comp1-text02 {
            top: 585px;
            left: 100px;
            color: #313659;
            width: 439px;
            height: 40px;
            position: absolute;
            font-size: 24px;
          }
          .blog-comp1-text03 {
            top: 721px;
            left: 837px;
            color: #313659;
            width: 475px;
            height: 40px;
            position: absolute;
            font-size: 24px;
          }
          .blog-comp1-image2 {
            top: 637px;
            left: 100px;
            width: 48px;
            height: 48px;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-comp1-text04 {
            top: 645px;
            left: 160px;
            color: #546488;
            width: 136px;
            height: 32px;
            position: absolute;
            font-size: 18px;
          }
          .blog-comp1-text05 {
            top: 645px;
            left: 328px;
            color: #546488;
            position: absolute;
            font-size: 18px;
          }
          .blog-comp1-text06 {
            top: 779px;
            left: 1063px;
            color: #546488;
            position: absolute;
            font-size: 18px;
          }
          .blog-comp1-text07 {
            top: 642px;
            left: 308px;
            color: #546488;
            position: absolute;
            font-size: 18px;
          }
          .blog-comp1-text08 {
            left: 1047px;
            color: #546488;
            bottom: 27px;
            position: absolute;
            font-size: 18px;
          }
          .blog-comp1-text09 {
            left: 1049px;
            color: #546488;
            bottom: 80px;
            position: absolute;
            font-size: 18px;
          }
          .blog-comp1-image3 {
            top: 771px;
            left: 837px;
            width: 48px;
            height: 48px;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-comp1-text10 {
            top: 779px;
            left: 897px;
            color: #546488;
            width: 136px;
            height: 32px;
            position: absolute;
            font-size: 18px;
          }

          @media (max-width: 769px) {
            .blog-comp1-image {
              top: 63px;
              left: 107px;
              width: 300px;
              height: 200px;
            }
            .blog-comp1-image1 {
              top: 499px;
              left: 100px;
              width: 300px;
              height: 200px;
            }
            .blog-comp1-button {
              top: 180px;
              left: 295px;
            }
            .blog-comp1-text02 {
              top: 295px;
              left: 111px;
              width: 300px;
              height: auto;
            }
            .blog-comp1-text03 {
              top: 710px;
              left: 108px;
              width: 300px;
              bottom: 59px;
              height: auto;
            }
            .blog-comp1-image2 {
              top: 357px;
              left: 105px;
            }
            .blog-comp1-text04 {
              top: 365px;
              left: 165px;
            }
            .blog-comp1-text05 {
              top: 365px;
              left: 333px;
            }
            .blog-comp1-text06 {
              left: 329px;
              right: 381px;
              bottom: 20px;
            }
            .blog-comp1-text07 {
              top: 362px;
              left: 313px;
            }
            .blog-comp1-text08 {
              right: 439px;
              bottom: 144px;
            }
            .blog-comp1-text09 {
              left: 316px;
              bottom: 26px;
            }
            .blog-comp1-image3 {
              left: 100px;
              right: 606px;
              bottom: 1px;
            }
            .blog-comp1-text10 {
              left: 161px;
              right: 458px;
              bottom: 9px;
            }
          }
          @media (max-width: 376px) {
            .blog-comp1-container {
              height: 279px;
            }
            .blog-comp1-image {
              top: 56px;
              left: 275px;
              width: 84px;
              height: 84px;
            }
            .blog-comp1-image1 {
              top: 194px;
              left: 275px;
              width: 84px;
              height: 84px;
            }
            .blog-comp1-button {
              top: 150px;
              left: 100px;
              right: -20px;
              bottom: -113px;
            }
            .blog-comp1-text02 {
              top: 56px;
              left: 16px;
              width: 228px;
              height: 48px;
              font-size: 20px;
            }
            .blog-comp1-text03 {
              top: 194px;
              left: 16px;
              width: 220px;
              height: 48px;
              font-size: 20px;
            }
            .blog-comp1-image2 {
              top: 116px;
              left: 16px;
              width: 24px;
              height: 24px;
            }
            .blog-comp1-text04 {
              top: 120px;
              left: 48px;
              width: 106px;
              height: 16px;
              font-size: 14px;
            }
            .blog-comp1-text05 {
              top: 121px;
              left: 176px;
              font-size: 14px;
            }
            .blog-comp1-text06 {
              top: 258px;
              left: 176px;
              width: 100px;
              bottom: 2px;
              font-size: 14px;
            }
            .blog-comp1-text07 {
              top: 114px;
              left: 164px;
            }
            .blog-comp1-text08 {
              bottom: 6px;
            }
            .blog-comp1-text09 {
              left: 164px;
              bottom: 5px;
            }
            .blog-comp1-image3 {
              top: 254px;
              left: 16px;
              width: 24px;
              height: 24px;
            }
            .blog-comp1-text10 {
              top: 258px;
              left: 48px;
              width: 106px;
              height: 16px;
              font-size: 14px;
            }
          }
        `}
      </style>
    </>
  )
}

BlogComp1.defaultProps = {
  text2: 'Kimberly Huang',
  image_alt2: 'image',
  text3: '2 min',
  text21: 'Kimberly Huang',
  text31: '2 min',
  text1: 'The Pros and Cons of Using Tailwind CSS',
  text42: '.',
  text41: '.',
  image_alt3: 'image',
  rootClassName: '',
  text: 'The JAMstack is a Leading Tech stack',
  image_alt: 'image',
  image_alt1: 'image',
  text4: '.',
}

BlogComp1.propTypes = {
  text2: PropTypes.string,
  image_alt2: PropTypes.string,
  text3: PropTypes.string,
  text21: PropTypes.string,
  text31: PropTypes.string,
  text1: PropTypes.string,
  text42: PropTypes.string,
  text41: PropTypes.string,
  image_alt3: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt1: PropTypes.string,
  text4: PropTypes.string,
}

export default BlogComp1
