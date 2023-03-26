import React from 'react'

import PropTypes from 'prop-types'

const Component2 = (props) => {
  return (
    <>
      <div className={`component2-container ${props.rootClassName} `}>
        <span className="component2-text">{props.text}</span>
      </div>
      <style jsx>
        {`
          .component2-container {
            display: flex;
            position: relative;
          }
          .component2-text {
            color: var(--dl-color-gray-white);
            position: relative;
            font-size: 40px;
          }
        `}
      </style>
    </>
  )
}

Component2.defaultProps = {
  rootClassName: '',
  text: 'Personal growth',
}

Component2.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Component2
