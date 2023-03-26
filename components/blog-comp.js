import React from 'react'

import PropTypes from 'prop-types'

const BlogComp = (props) => {
  return (
    <>
      <section  data-aos="fade-up" data-aos-duration="1000" className={`blog-comp-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src="/playground_assets/jamstack-600w.jpg"
          className="blog-comp-image"
        />
        <img
          alt={props.image_alt1}
          src="/playground_assets/tail-600w.png"
          className="blog-comp-image1"
        />
        <button type="button" className="blog-comp-button button">
          <span className="blog-comp-text">View Case</span>
          <svg viewBox="0 0 1024 1024" className="blog-comp-icon">
            <path d="M237.254 877.254l530.746-530.744v229.49c0 35.346 28.654 64 64 64s64-28.654 64-64v-384c0-25.884-15.594-49.222-39.508-59.126-7.924-3.284-16.242-4.84-24.492-4.838v-0.036h-384c-35.346 0-64 28.654-64 64 0 35.348 28.654 64 64 64h229.49l-530.744 530.746c-12.498 12.496-18.746 28.876-18.746 45.254s6.248 32.758 18.746 45.254c24.992 24.994 65.516 24.994 90.508 0z"></path>
          </svg>
        </button>
        <button type="button" className="blog-comp-button1 button">
          <span className="blog-comp-text01">View Case</span>
          <svg viewBox="0 0 1024 1024" className="blog-comp-icon2">
            <path d="M237.254 877.254l530.746-530.744v229.49c0 35.346 28.654 64 64 64s64-28.654 64-64v-384c0-25.884-15.594-49.222-39.508-59.126-7.924-3.284-16.242-4.84-24.492-4.838v-0.036h-384c-35.346 0-64 28.654-64 64 0 35.348 28.654 64 64 64h229.49l-530.744 530.746c-12.498 12.496-18.746 28.876-18.746 45.254s6.248 32.758 18.746 45.254c24.992 24.994 65.516 24.994 90.508 0z"></path>
          </svg>
        </button>
        <span className="blog-comp-text02">{props.text}</span>
        <span className="blog-comp-text03">{props.text1}</span>
        <img
          alt={props.image_alt2}
          src="/playground_assets/small-200h.png"
          className="blog-comp-image2"
        />
        <span className="blog-comp-text04">{props.text2}</span>
        <span className="blog-comp-text05">{props.text3}</span>
        <span className="blog-comp-text06">{props.text31}</span>
        <span className="blog-comp-text07">{props.text4}</span>
        <span className="blog-comp-text08">{props.text41}</span>
        <img
          alt={props.image_alt3}
          src="/playground_assets/small-200h.png"
          className="blog-comp-image3"
        />
        <span className="blog-comp-text09">{props.text21}</span>
      </section>
      <style jsx>
        {`
          .blog-comp-container {
            width: 100%;
            height: 877px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .blog-comp-image {
            top: 120px;
            left: 100px;
            width: 503px;
            height: 503px;
            position: absolute;
            object-fit: cover;
          }
          .blog-comp-image1 {
            top: 256px;
            left: 837px;
            width: 503px;
            height: 503px;
            position: absolute;
            object-fit: cover;
          }
          .blog-comp-button {
            top: 282px;
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
          .blog-comp-button:hover {
            opacity: 100%;
          }
          .blog-comp-text {
            top: 68px;
            left: 19px;
            position: absolute;
            font-size: 20px;
          }
          .blog-comp-icon {
            top: 44px;
            left: 55px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .blog-comp-button1 {
            top: 443px;
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
          .blog-comp-button1:hover {
            opacity: 100%;
          }
          .blog-comp-text01 {
            top: 68px;
            left: 19px;
            position: absolute;
            font-size: 20px;
          }
          .blog-comp-icon2 {
            top: 44px;
            left: 55px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .blog-comp-text02 {
            top: 643px;
            left: 100px;
            color: #313659;
            width: 439px;
            height: 40px;
            position: absolute;
            font-size: 24px;
          }
          .blog-comp-text03 {
            top: 779px;
            left: 837px;
            color: #313659;
            width: 475px;
            height: 40px;
            position: absolute;
            font-size: 24px;
          }
          .blog-comp-image2 {
            top: 695px;
            left: 100px;
            width: 48px;
            height: 48px;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-comp-text04 {
            top: 703px;
            left: 160px;
            color: #546488;
            width: 136px;
            height: 32px;
            position: absolute;
            font-size: 18px;
          }
          .blog-comp-text05 {
            top: 703px;
            left: 328px;
            color: #546488;
            position: absolute;
            font-size: 18px;
          }
          .blog-comp-text06 {
            top: 837px;
            left: 1063px;
            color: #546488;
            position: absolute;
            font-size: 18px;
          }
          .blog-comp-text07 {
            top: 700px;
            left: 308px;
            color: #546488;
            position: absolute;
            font-size: 18px;
          }
          .blog-comp-text08 {
            left: 1048px;
            color: #546488;
            bottom: 22px;
            position: absolute;
            font-size: 18px;
          }
          .blog-comp-image3 {
            top: 829px;
            left: 837px;
            width: 48px;
            height: 48px;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-comp-text09 {
            top: 837px;
            left: 897px;
            color: #546488;
            width: 136px;
            height: 32px;
            position: absolute;
            font-size: 18px;
          }

          @media (max-width: 769px) {
            .blog-comp-image {
              width: 300px;
              height: 200px;
            }
            .blog-comp-image1 {
              top: 543px;
              left: 100px;
              width: 300px;
              height: 200px;
            }
            .blog-comp-text02 {
              top: 339px;
              left: 100px;
              width: 300px;
              height: auto;
            }
            .blog-comp-text03 {
              top: 755px;
              left: 102px;
              width: 300px;
              bottom: 58px;
              height: auto;
            }
            .blog-comp-image2 {
              top: 411px;
              left: 100px;
            }
            .blog-comp-text04 {
              top: 426px;
              left: 161px;
            }
            .blog-comp-text05 {
              top: 427px;
              left: 332px;
            }
            .blog-comp-text06 {
              left: 327px;
              bottom: 19px;
            }
            .blog-comp-text07 {
              top: 424px;
              left: 314px;
            }
            .blog-comp-text08 {
              left: 318px;
              bottom: 16px;
            }
            .blog-comp-image3 {
              left: 100px;
            }
            .blog-comp-text09 {
              left: 161px;
            }
          }
          @media (max-width: 376px) {
            .blog-comp-container {
              height: 279px;
            }
            .blog-comp-image {
              top: 50px;
              left: 275px;
              width: 84px;
              height: 84px;
            }
            .blog-comp-image1 {
              top: 194px;
              left: 275px;
              width: 84px;
              height: 84px;
            }
            .blog-comp-button {
              display: none;
              opacity: 0;
            }
            .blog-comp-button1 {
              display: none;
            }
            .blog-comp-text02 {
              top: 50px;
              left: 16px;
              color: #313659;
              width: 228px;
              height: 48px;
              font-size: 20;
            }
            .blog-comp-text03 {
              top: 194px;
              left: 16px;
              width: 220px;
              height: 48px;
              font-size: 20px;
            }
            .blog-comp-image2 {
              top: 116px;
              left: 16px;
              width: 24px;
              height: 24px;
            }
            .blog-comp-text04 {
              top: 120px;
              left: 48px;
              width: 106px;
              height: 16px;
              font-size: 14px;
            }
            .blog-comp-text05 {
              top: 121px;
              left: 176px;
              font-size: 14px;
            }
            .blog-comp-text06 {
              top: 258px;
              left: 182px;
              font-size: 14px;
            }
            .blog-comp-text07 {
              top: 114px;
              left: 164px;
            }
            .blog-comp-text08 {
              left: 169px;
              bottom: 6px;
            }
            .blog-comp-image3 {
              top: 254px;
              left: 16px;
              width: 24px;
              height: 24px;
            }
            .blog-comp-text09 {
              top: 258px;
              left: 47.69px;
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

BlogComp.defaultProps = {
  text4: '.',
  text1: 'The Pros and Cons of Using Tailwind CSS',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src2: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt1: 'image',
  rootClassName: '',
  image_src4: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text2: 'Kimberly Huang',
  image_src3: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
  text: 'The JAMstack is a Leading Tech stack',
  text31: '2 min',
  text41: '.',
  image_alt3: 'image',
  text21: 'Kimberly Huang',
  text3: '2 min',
  image_alt2: 'image',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

BlogComp.propTypes = {
  text4: PropTypes.string,
  text1: PropTypes.string,
  image_src: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src4: PropTypes.string,
  text2: PropTypes.string,
  image_src3: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  text31: PropTypes.string,
  text41: PropTypes.string,
  image_alt3: PropTypes.string,
  text21: PropTypes.string,
  text3: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src1: PropTypes.string,
}

export default BlogComp
