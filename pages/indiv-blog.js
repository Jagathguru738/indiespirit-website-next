import React from 'react'
import Head from 'next/head'

import Header1 from '../components/header1'
import Footer from '../components/footer'
import BlogComp11 from '../components/blog-comp11'

const IndivBlog = (props) => {
  return (
    <>
      <section className="indiv-blog-container">
        <Head>
          <title>indiv-blog - Indiespirit-Website</title>
          <meta
            property="og:title"
            content="indiv-blog - Indiespirit-Website"
          />
        </Head>
        <Header1 rootClassName="header1-root-class-name4"></Header1>
        <section className="indiv-blog-container1">
          <span className="indiv-blog-text">
            <span>
              The JAMstack is a Leading
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Tech stack</span>
          </span>
        </section>
        
        <section className="indiv-blog-container2">
          <img
            alt="image"
            src="/playground_assets/jamstack-1300w.jpg"
            className="indiv-blog-image"
          />
          <div className="indiv-blog-container3">
            <span className="indiv-blog-text04">
              <span>
                If you&apos;re like most people, you&apos;ve probably used
                WordPress at some point in your online journey. It&apos;s the
                most popular website platform in the world, and for good reason
                - it&apos;s easy to use and relatively versatile. But I believe
                that in 2022, JAMstack static-site generators have supplanted
                WordPress as the right fit for most individuals who host their
                business or personal site. In this article, I&apos;ll explain
                what JAMstack is and why I think it&apos;s a better choice than
                WordPress for
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>personal websites.</span>
            </span>
            <span className="indiv-blog-text08">
              JAMstack sites are more secure than WordPress or other traditional
              website platforms for several reasons. First, since your pages are
              static, there is no dynamic content that can be exploited by
              malicious users. Second, you can use a CDN to further secure your
              site. And third, JAMstack sites are built using modern security
              best practices.
            </span>
            <span className="indiv-blog-text09">
              JAMstack sites are inherently more SEO friendly than WordPress or
              other traditional website platforms because they&apos;re built
              with modern technologies like pre-rendering and the use of a CDN.
            </span>
            <span className="indiv-blog-text10">
              JAMstack sites are much easier to maintain than WordPress or other
              traditional website platforms. This is because there is no need to
              worry about server maintenance, security patches, or database
              updates.
            </span>
            <span className="indiv-blog-text11">
              JAMstack is an emerging technology, which means there are lots of
              new and exciting things happening in the JAMstack world. If
              you&apos;re looking for a modern web development platform, then
              JAMstack is the right choice for you.
            </span>
            <span className="indiv-blog-text12">
              <span>
                There are many reasons why I believe JAMstack is the right
                choice. So If you&apos;re thinking about starting a personal
                website or even creating your consulting agency, when I highly
                recommend using a JAMstack static-site generator instead of
                WordPress.
              </span>
              <br className="indiv-blog-text14"></br>
              <br className="indiv-blog-text15"></br>
              <span>
                The biggest reason why I moved on from WordPress is that
                I&apos;ve had nothing but trouble with the past due to my lack
                of experience, and that&apos;s without even getting into how
                horrible it is to have a website. The hosting, maintenance, and
                upgrades were a nightmare, and anything complex was taken care
                of with a hacked-together WordPress plugin. I&apos;m not saying
                WordPress is a bad platform - it&apos;s just not the right fit
                for me, and I think there are better options out there for
                personal websites.
              </span>
              <br className="indiv-blog-text17"></br>
              <br></br>
            </span>
            <span className="indiv-blog-text19">
              JAMstack sites are easily scalable, which means you can handle
              large amounts of traffic without any issues. This is because
              JAMstack sites are built using a CDN, which distributes your
              content across multiple servers around the world.
            </span>
            <span className="indiv-blog-text20">It&apos;s Secure</span>
            <span className="indiv-blog-text21">It&apos;s SEO Friendly</span>
            <span className="indiv-blog-text22">
              It&apos;s Easy to Maintain
            </span>
            <span className="indiv-blog-text23">It&apos;s Modern</span>
            <span className="indiv-blog-text24">Conclution</span>
            <span className="indiv-blog-text25">It&apos;s Scalable</span>
          </div>
          <div className="indiv-blog-container4">
            <span className="indiv-blog-text26">AUTHOR</span>
            <img
              alt="image"
              src="/playground_assets/408805-2dc51ddf-1500h.png"
              className="indiv-blog-image1"
            />
            <img
              alt="image"
              src="/playground_assets/4406234-da9c04f6-1500h.png"
              className="indiv-blog-image2"
            />
            <img
              alt="image"
              src="/playground_assets/small-200h.png"
              className="indiv-blog-image3"
            />
            <span className="indiv-blog-text27">Kimberly Huang</span>
            <span className="indiv-blog-text28">2 min read</span>
            <span className="indiv-blog-text29">PUBLISHED ON</span>
            <span className="indiv-blog-text30">28-11-22</span>
            <span className="indiv-blog-text31">SHARE THIS ARTICLE</span>
          </div>
        </section>
        <section className="indiv-blog-container5">
          <img
            alt="image"
            src="/playground_assets/tail-1500w.png"
            className="indiv-blog-image4"
          />
          <span className="indiv-blog-text32">Next Blog</span>
          <span className="indiv-blog-text33">
            <span>The Pros and Cons </span>
            <span>of Using Tailwind CSS</span>
          </span>
          <button className="indiv-blog-button button">
            <svg viewBox="0 0 1024 1024" className="indiv-blog-icon">
              <path d="M854 512l-342 342-342-342 62-60 238 238v-520h84v520l240-238z"></path>
            </svg>
          </button>
        </section>
        <BlogComp11 rootClassName="blog-comp11-root-class-name"></BlogComp11>
      </section>
      <Footer 
          image_src2="/playground_assets/4406234-da9c04f6-1500h.png"
          RootClassName="footer-root-class-name7"
          
        ></Footer>
      <style jsx>
        {`

           
         
          .indiv-blog-container {
            width: 100%;
            height: 5250;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .indiv-blog-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 504px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            background-color: #00164e;
          }
          .indiv-blog-text {
            top: 100px;
            left: 104px;
            color: #ffffff;
            width: 1178px;
            height: 240px;
            position: absolute;
            font-size: 90px;
            line-height: 1.3;
          }
          .indiv-blog-container2 {
            top: 591px;
            flex: 0 0 auto;
            left: 0px;
            width: 1440px;
            height: 2534;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .indiv-blog-image {
            top: 100px;
            left: 100px;
            width: 1240px;
            height: 696px;
            position: absolute;
            object-fit: cover;
          }
          .indiv-blog-container3 {
            top: 897px;
            flex: 0 0 auto;
            left: 100px;
            width: 819px;
            height: 1517px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .indiv-blog-text04 {
            top: 0px;
            left: 0px;
            color: #00164e;
            width: 819px;
            height: 192px;
            position: absolute;
            font-size: 18px;
            line-height: 1.8;
          }
          .indiv-blog-text08 {
            top: 276px;
            left: 0px;
            color: rgb(0, 22, 78);
            width: 819px;
            height: 126px;
            position: absolute;
            font-size: 18px;
            line-height: 1.8;
          }
          .indiv-blog-text09 {
            top: 493px;
            left: 0px;
            color: rgb(0, 22, 78);
            width: 819px;
            height: 94px;
            position: absolute;
            font-size: 18px;
            line-height: 1.8;
          }
          .indiv-blog-text10 {
            top: 664px;
            left: 0px;
            color: rgb(0, 22, 78);
            width: 819px;
            height: 94px;
            position: absolute;
            font-size: 18px;
            line-height: 1.8;
          }
          .indiv-blog-text11 {
            top: 1020;
            color: rgb(0, 22, 78);
            right: -2px;
            width: 819px;
            height: 94px;
            position: absolute;
            font-size: 18px;
            line-height: 1.8;
          }
          .indiv-blog-text12 {
            top: 1200px;
            left: 0;
            color: rgb(0, 22, 78);
            width: 819px;
            height: auto;
            position: absolute;
            font-size: 18px;
            line-height: 1.8;
          }
          .indiv-blog-text19 {
            top: 842px;
            color: rgb(0, 22, 78);
            right: 0px;
            width: 819px;
            height: 94px;
            position: absolute;
            font-size: 18px;
            line-height: 1.8;
          }
          .indiv-blog-text20 {
            top: 224px;
            left: 0px;
            color: rgb(0, 22, 78);
            width: 159px;
            height: 40px;
            position: absolute;
            font-size: 24px;
            line-height: 1.8;
          }
          .indiv-blog-text21 {
            top: 434px;
            left: 0px;
            color: rgb(0, 22, 78);
            width: 240px;
            height: 40px;
            position: absolute;
            font-size: 24px;
            line-height: 1.8;
          }
          .indiv-blog-text22 {
            top: 612px;
            left: 0px;
            color: rgb(0, 22, 78);
            width: 306px;
            height: 40px;
            position: absolute;
            font-size: 24px;
            line-height: 1.8;
          }
          .indiv-blog-text23 {
            top: 968px;
            left: 0;
            color: rgb(0, 22, 78);
            width: 187px;
            height: 40px;
            position: absolute;
            font-size: 24px;
            line-height: 1.8;
          }
          .indiv-blog-text24 {
            top: 1148px;
            left: 0px;
            color: rgb(0, 22, 78);
            width: 187px;
            height: 40px;
            position: absolute;
            font-size: 24px;
            line-height: 1.8;
          }
          .indiv-blog-text25 {
            top: 790px;
            left: 0;
            color: rgb(0, 22, 78);
            width: 187px;
            height: 40px;
            position: absolute;
            font-size: 24px;
            line-height: 1.8;
          }
          .indiv-blog-container4 {
            top: 891px;
            flex: 0 0 auto;
            right: 86px;
            width: 292px;
            height: 512px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .indiv-blog-text26 {
            color: #546488;
          }
          .indiv-blog-image1 {
            top: 484.67px;
            left: 134.67px;
            width: 26.67px;
            height: 26.67px;
            position: absolute;
            object-fit: cover;
          }
          .indiv-blog-image2 {
            top: 484.67;
            left: 46.67;
            width: 26.67px;
            height: 26.67px;
            position: absolute;
            object-fit: cover;
          }
          .indiv-blog-image3 {
            top: 48px;
            left: 0px;
            width: 92px;
            height: 92px;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .indiv-blog-text27 {
            top: 152;
            left: 0px;
            color: #00164e;
            width: 184px;
            height: 40px;
            position: absolute;
            line-height: 1.8;
          }
          .indiv-blog-text28 {
            top: 194;
            left: 0px;
            color: #546488;
            width: 121px;
            height: 40px;
            position: absolute;
            line-height: 2;
          }
          .indiv-blog-text29 {
            top: 294;
            left: 0px;
            color: #546488;
            position: absolute;
          }
          .indiv-blog-text30 {
            top: 334;
            left: 0px;
            color: #00164e;
            position: absolute;
          }
          .indiv-blog-text31 {
            top: 434px;
            left: 0px;
            color: #546488;
            position: absolute;
          }
          .indiv-blog-container5 {
            top: 3124px;
            flex: 0 0 auto;
            left: 0px;
            width: 1440px;
            height: 418px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .indiv-blog-image4 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            opacity: 0.1;
            position: absolute;
            object-fit: cover;
          }
          .indiv-blog-text32 {
            top: 120px;
            left: 205px;
            color: #546488;
            position: absolute;
            font-size: 18px;
          }
          .indiv-blog-text33 {
            top: 178px;
            left: 205px;
            color: #313659;
            width: 419px;
            height: 128px;
            position: absolute;
            font-size: 40px;
            line-height: 1;
          }
          .indiv-blog-button {
            top: 149px;
            left: 765px;
            width: 120px;
            height: 120px;
            display: flex;
            position: absolute;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            background-color: #ffdd1a;
          }
          .indiv-blog-icon {
            top: 48px;
            left: 41px;
            width: 35px;
            height: 35px;
            position: absolute;
          }
          @media (max-width: 769px) {
            .indiv-blog-text {
              width: 669px;
              font-size: 70px;
            }
            .indiv-blog-container2 {
              width: 769px;
              height: 2990px;
            }
            .indiv-blog-image {
              width: 650px;
              height: 561px;
            }
            .indiv-blog-container3 {
              top: 700px;
              left: 90px;
              width: 669px;
              bottom: 321px;
              height: 1700px;
            }
            .indiv-blog-text04 {
              top: 0px;
              left: 0px;
              width: 669px;
              height: auto;
            }
            .indiv-blog-text08 {
              top: 337px;
              left: 0px;
              width: 669px;
              height: auto;
            }
            .indiv-blog-text09 {
              top: 556px;
              left: 0px;
              width: 669px;
              height: auto;
            }
            .indiv-blog-text10 {
              top: 721px;
              left: -1px;
              width: 669px;
              height: auto;
            }
            .indiv-blog-text11 {
              top: 1109px;
              left: -2px;
              width: 669px;
              height: auto;
            }
            .indiv-blog-text12 {
              top: 1300px;
              left: 0px;
              color: rgb(0, 22, 78);
              width: 669px;
              bottom: 14px;
              height: auto;
              font-size: 18px;
              line-height: 1.8;
            }
            .indiv-blog-text14 {
              color: #00164e;
              font-size: 18px;
              line-height: 1.8;
            }
            .indiv-blog-text15 {
              color: #00164e;
              font-size: 18px;
              line-height: 1.8;
            }
            .indiv-blog-text17 {
              color: #00164e;
              font-size: 18px;
              line-height: 1.8;
            }
            .indiv-blog-text19 {
              top: 902px;
              left: -3px;
              width: 669px;
              height: auto;
            }
            .indiv-blog-text20 {
              top: 289px;
              left: -2px;
            }
            .indiv-blog-text21 {
              top: 508px;
              left: 0px;
            }
            .indiv-blog-text22 {
              top: 665px;
              left: -3px;
            }
            .indiv-blog-text23 {
              top: 1053px;
              left: 0px;
            }
            .indiv-blog-text24 {
              top: 1240px;
              left: 4px;
            }
            .indiv-blog-text25 {
              top: 843px;
              left: 0px;
            }
            .indiv-blog-container4 {
              top: 2450px;
              left: 100px;
              bottom: 5px;
            }
            .indiv-blog-container5 {
              width: 770px;
            }
            .indiv-blog-image4 {
              top: 0px;
              left: 0px;
              width: 769px;
              position: absolute;
            }
          }
          @media (max-width: 376px) {
            .indiv-blog-container1 {
              width: 375px;
              height: 367px;
            }
            .indiv-blog-text {
              top: 113px;
              left: 16px;
              color: rgb(255, 255, 255);
              width: 343px;
              height: 192px;
              font-size: 40px;
              line-height: 1.7;
            }
            .indiv-blog-container2 {
              top: 453px;
              height: 3716px;
            }
            .indiv-blog-image {
              top: 90px;
              left: 16px;
              width: 343px;
              height: 192.74px;
            }
            .indiv-blog-container3 {
              top: 345px;
              left: 16px;
              width: 359px;
              height: 2699px;
            }
            .indiv-blog-text04 {
              width: 343px;
              height: auto;
            }
            .indiv-blog-text08 {
              top: 500px;
              width: 343px;
              height: auto;
            }
            .indiv-blog-text09 {
              top: 869px;
              width: 343px;
              height: auto;
            }
            .indiv-blog-text10 {
              top: 1142px;
              width: 343px;
              height: auto;
            }
            .indiv-blog-text11 {
              top: 1721px;
              left: 0px;
              width: 343px;
              height: auto;
            }
            .indiv-blog-text12 {
              top: 2027px;
              width: 343px;
              height: 672px;
            }
            .indiv-blog-text19 {
              top: 1413px;
              left: 0px;
              width: 343px;
              height: auto;
            }
            .indiv-blog-text20 {
              top: 448px;
            }
            .indiv-blog-text21 {
              top: 817px;
            }
            .indiv-blog-text22 {
              top: 1090px;
            }
            .indiv-blog-text23 {
              top: 1669px;
            }
            .indiv-blog-text24 {
              top: 1975px;
            }
            .indiv-blog-text25 {
              top: 1364px;
            }
            .indiv-blog-container4 {
              top: 3105.65px;
              left: 16px;
              right: 0px;
            }
            .indiv-blog-container5 {
              top: 4169px;
              width: 375px;
              height: 388px;
            }
            .indiv-blog-text32 {
              top: 76px;
              left: 16px;
            }
            .indiv-blog-text33 {
              top: 134px;
              left: 16px;
              color: rgb(49, 54, 89);
              width: 279px;
              height: 192px;
              font-size: 40px;
              line-height: 1.8;
            }
          }
        `}
      </style>
    </>
  )
}

export default IndivBlog
