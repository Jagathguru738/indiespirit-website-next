import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Footer from '../components/footer'
import Header1 from '../components/header1'
import BlogComp from '../components/blog-comp'
import BlogComp1 from '../components/blog-comp1'

const Blog = (props) => {
  return (
    <>
      <div className="blog-container">
        <Head >
          <title >Blog - Indiespirit-Website</title>
          <meta property="og:title" content="Blog - Indiespirit-Website" />
        </Head>
        <Footer rootClassName="footer-root-class-name4"></Footer>
        <Header1 rootClassName="header1-root-class-name3"></Header1>
        <section className="blog-container1" >
          <span className="blog-text"  data-aos="fade-down-right" data-aos-duration="1000">
            <span className="blog-text1"  data-aos="fade-down" data-aos-duration="1000">Stay inspired.</span>
            <br></br>
            <br></br>
            <span className="blog-text4">Indiespirit Blog</span>
          </span>
        </section>
        <BlogComp rootClassName="blog-comp-root-class-name"></BlogComp>
        <BlogComp1 rootClassName="blog-comp1-root-class-name"></BlogComp1>
        <BlogComp1 rootClassName="blog-comp1-root-class-name1"></BlogComp1>
        <BlogComp1 rootClassName="blog-comp1-root-class-name2"></BlogComp1>
        <BlogComp1 rootClassName="blog-comp1-root-class-name3"></BlogComp1>
        <Link href="/blog">
          <a className="blog-link button">
            <svg viewBox="0 0 1024 1024" className="blog-icon">
              <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
            </svg>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .blog-container {
            width: 100%;
            height: 5500;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .blog-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 580px;
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: var(--dl-color-gray-black);
            border-width: 0px;
            flex-direction: column;
            background-color: #00164e;
          }
          .blog-text {
            top: 138px;
            left: 100px;
            position: absolute;
            font-size: 90px;
            line-height: 0.6;
          }
          .blog-text1 {
            color: #ffdd1a;
          }
          .blog-text4 {
            color: #ffffff;
          }
          .blog-link {
            top: 4818px;
            left: 1194.33px;
            color: #f4f8fe;
            width: 120px;
            bottom: 633px;
            height: 120px;
            display: flex;
            position: absolute;
            border-color: #f4f8fe;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            text-decoration: none;
            background-color: #f4f8fe;
          }
          .blog-icon {
            top: 45px;
            fill: #00164e;
            left: 45px;
            width: 30px;
            height: 30px;
            position: absolute;
          }
          @media (max-width: 769px) {
            .blog-link {
              top: 4900px;
              left: 480px;
            }
          }
          @media (max-width: 376px) {
            .blog-container {
              height: 2919;
            }
            .blog-container1 {
              height: 320px;
            }
            .blog-text {
              top: 67px;
              left: 16px;
              right: -12px;
              width: 343px;
              height: 128px;
              font-size: 40px;
              line-height: 1.15;
            }
            .blog-link {
              top: 1900px;
              left: 239px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Blog
