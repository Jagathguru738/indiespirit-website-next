import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <>
      <div className={`header-container ${props.rootClassName} `}>
        <header data-thq="thq-navbar" className="header-navbar-interactive">
          <Link href="/">
            <a className="header-link">
              <img
                alt="logo"
                src="/playground_assets/image4-1500w.png"
                className="header-logo"
              />
            </a>
          </Link>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="header-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="header-nav"
            >
              <Link href="/work">
                <a className="header-link01">Work</a>
              </Link>
              <Link href="/services">
                <a className="header-link02">Services</a>
              </Link>
              <Link href="/about-us">
                <a className="header-link03">About Us</a>
              </Link>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="header-btn-group">
            <Link href="/contactus">
              <a className="header-link04 button">CONTACT US </a>
            </Link>
            <svg viewBox="0 0 841.1428571428571 1024" className="header-icon">
              <path d="M841.143 548.571c0 19.429-7.429 38.286-21.143 52l-372 372c-13.714 13.143-32.571 21.143-52 21.143s-37.714-8-51.429-21.143l-42.857-42.857c-13.714-13.714-21.714-32.571-21.714-52s8-38.286 21.714-52l167.429-167.429h-402.286c-41.143 0-66.857-34.286-66.857-73.143v-73.143c0-38.857 25.714-73.143 66.857-73.143h402.286l-167.429-168c-13.714-13.143-21.714-32-21.714-51.429s8-38.286 21.714-51.429l42.857-42.857c13.714-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l372 372c13.714 13.143 21.143 32 21.143 51.429z"></path>
            </svg>
          </div>
          <div data-thq="thq-burger-menu" className="header-burger-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon02">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="header-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="header-nav1"
            >
              <div className="header-container1">
                <img
                  alt="image"
                  src="/playground_assets/image4-1500w.png"
                  className="header-image"
                />
                <div data-thq="thq-close-menu" className="header-menu-close">
                  <svg viewBox="0 0 1024 1024" className="header-icon04">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="header-nav2"
              >
                <Link href="/work">
                  <a className="header-link05">Work</a>
                </Link>
                <Link href="/services">
                  <a className="header-link06">Services</a>
                </Link>
                <Link href="/career">
                  <a className="header-link07">Careers</a>
                </Link>
                <Link href="/blog">
                  <a className="header-link08">Blogs</a>
                </Link>
                <Link href="/about-us">
                  <a className="header-link09">About Us</a>
                </Link>
                <Link href="/contactus">
                  <a className="header-link10">Contact Us</a>
                </Link>
              </nav>
              <div className="header-container2"></div>
            </div>
            <div className="header-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="header-icon06"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="header-icon08"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="header-icon10"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="header-icon12"
              >
                <path d="M199.429 357.143v566.286h-188.571v-566.286h188.571zM211.429 182.286c0.571 54.286-40.571 97.714-106.286 97.714v0h-1.143c-63.429 0-104-43.429-104-97.714 0-55.429 42.286-97.714 106.286-97.714 64.571 0 104.571 42.286 105.143 97.714zM877.714 598.857v324.571h-188v-302.857c0-76-27.429-128-95.429-128-52 0-82.857 34.857-96.571 68.571-4.571 12.571-6.286 29.143-6.286 46.286v316h-188c2.286-513.143 0-566.286 0-566.286h188v82.286h-1.143c24.571-38.857 69.143-95.429 170.857-95.429 124 0 216.571 81.143 216.571 254.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .header-container {
            width: 100%;
            height: 86px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-navbar-interactive {
            right: 1px;
            width: 100%;
            bottom: -1px;
            height: 86px;
            display: flex;
            position: absolute;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            border-color: var(--dl-color-gray-black);
            border-width: 0px;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .header-link {
            display: contents;
          }
          .header-logo {
            width: 223.52px;
            height: 40px;
            text-decoration: none;
          }
          .header-desktop-menu {
            display: flex;
            position: relative;
          }
          .header-nav {
            top: -13px;
            flex: 1;
            left: -165px;
            width: var(--dl-size-size-xxlarge);
            height: 24px;
            display: flex;
            position: absolute;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
          }
          .header-link01 {
            color: var(--dl-color-gray-black);
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .header-link02 {
            color: #161515;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .header-link03 {
            color: rgb(22, 21, 21);
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .header-btn-group {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-link04 {
            font-style: normal;
            font-weight: 500;
            border-width: 0px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
            background-color: rgba(255, 255, 255, 0.03);
          }
          .header-icon {
            top: 13.8px;
            right: 28px;
            width: 12px;
            height: 12px;
            position: absolute;
          }
          .header-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .header-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .header-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .header-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .header-image {
            height: 2rem;
          }
          .header-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .header-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-link05 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .header-link06 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .header-link07 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .header-link08 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .header-link09 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .header-link10 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .header-container2 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .header-icon-group {
            display: flex;
          }
          .header-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .header-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .header-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .header-icon12 {
            width: 24px;
            height: 24px;
          }
          .header-root-class-name {
            top: 0px;
            left: 0px;
            position: 0px;
            background-color: #f4f8fe;
          }
          .header-root-class-name1 {
            top: 0px;
            left: 0px;
            position: 0px;
            background-color: #f4f8fe;
          }
          .header-root-class-name2 {
            background-color: #f4f8fe;
          }
          .header-root-class-name3 {
            top: 0px;
            left: 0px;
            bottom: 1px;
            position: absolute;
          }
          .header-root-class-name4 {
            top: 0px;
            left: 0px;
            bottom: 0px;
            position: absolute;
          }
          @media (max-width: 769px) {
            .header-desktop-menu {
              display: none;
            }
            .header-btn-group {
              display: none;
            }
            .header-burger-menu {
              display: flex;
            }
            .header-root-class-name4 {
              top: 0px;
              left: 0px;
              bottom: 1px;
              position: absolute;
            }
          }
          @media (max-width: 768px) {
            .header-desktop-menu {
              display: none;
            }
          }
          @media (max-width: 750px) {
            .header-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .header-link01 {
              margin-left: var(--dl-space-space-unit);
            }
            .header-link02 {
              margin-left: var(--dl-space-space-unit);
            }
            .header-link03 {
              margin-left: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 376px) {
            .header-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .header-icon02 {
              fill: #0c0c0c;
            }
            .header-mobile-menu {
              padding: 16px;
            }
            .header-image {
              width: 179.92px;
              height: 32px;
            }
            .header-nav2 {
              color: #313659;
              background-color: rgba(54, 56, 89, 0.01);
            }
            .header-icon-group {
              position: relative;
            }
            .header-icon12 {
              top: 0px;
              left: 150px;
              width: var(--dl-size-size-xsmall);
              height: var(--dl-size-size-xsmall);
              position: absolute;
            }
            .header-root-class-name2 {
              background-color: #f4f8fe;
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  rootClassName: '',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
}

export default Header
