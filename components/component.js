import React from 'react'

import PropTypes from 'prop-types'

import Footer from './footer'

const AppComponent = (props) => {
  return (
    <>
      <div className={`component-container ${props.rootClassName} `}>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .component-container {
            flex: 0 0 auto;
            width: 100%;
            height: 872px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
}

export default AppComponent
