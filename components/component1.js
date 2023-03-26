import React from 'react'

import PropTypes from 'prop-types'

const Component1 = (props) => {
  return (
    <>
      <div className={`component1-container ${props.rootClassName} `}>
        <span className="component1-text" data-aos="fade-up" data-aos-duration="1000">{props.text}</span>
        <span className="component1-text1" data-aos="fade-up" data-aos-duration="1000">{props.text1}</span>
      </div>
      <style jsx>
        {`
          .component1-container {
            width: 153.59375px;
            height: 62.390625px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .component1-text {
            top: 0px;
            left: 0px;
            color: rgb(49, 54, 89);
            position: absolute;
            font-size: 24px;
          }
          .component1-text1 {
            left: 0px;
            color: rgb(49, 54, 89);
            bottom: 0px;
            position: absolute;
            font-size: 16px;
          }
          .component1-root-class-name {
            top: 739px;
            left: 100px;
            position: absolute;
          }
          .component1-root-class-name1 {
            top: 879px;
            left: 837px;
            position: absolute;
          }
          .component1-root-class-name2 {
            top: 1683px;
            left: 100px;
            position: absolute;
          }
          .component1-root-class-name3 {
            top: 1815px;
            left: 837px;
            position: absolute;
          }
          .component1-root-class-name4 {
            top: 2595px;
            left: 100px;
            position: absolute;
          }
          .component1-root-class-name5 {
            top: 2736px;
            left: 837px;
            position: absolute;
          }
          .component1-root-class-name6 {
            left: 837px;
            bottom: 118px;
            position: absolute;
          }
          .component1-root-class-name7 {
            left: 100px;
            bottom: 218px;
            position: absolute;
          }
          .component1-root-class-name8 {
            top: 3642px;
            left: 837px;
            position: absolute;
          }
          .component1-root-class-name9 {
            top: 3529px;
            left: 100px;
            position: absolute;
          }
          @media (max-width: 376px) {
            .component1-root-class-name {
              top: 518px;
              left: 16px;
            }
            .component1-root-class-name1 {
              top: 1016px;
              left: 19px;
            }
            .component1-root-class-name2 {
              top: 1528px;
              left: 19px;
            }
            .component1-root-class-name3 {
              top: 2024px;
              left: 19px;
            }
            .component1-root-class-name4 {
              top: 2519px;
              left: 18px;
            }
            .component1-root-class-name5 {
              top: 3518px;
              left: 19px;
            }
            .component1-root-class-name6 {
              left: 19px;
              bottom: 127px;
            }
            .component1-root-class-name7 {
              left: 19px;
              bottom: 665px;
            }
            .component1-root-class-name8 {
              top: 3987px;
              left: 19px;
              margin: auto;
            }
            .component1-root-class-name9 {
              top: 3011px;
              left: 19px;
            }
          }
        `}
      </style>
    </>
  )
}

Component1.defaultProps = {
  rootClassName: '',
  text1: 'AhoyConnect',
  text: 'AhoyConnect',
}

Component1.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default Component1
