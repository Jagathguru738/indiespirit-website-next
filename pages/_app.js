import "./style.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

import React from "react";
export default function MyApp({
  Component: Component,
  pageProps: pageProps
}) {useEffect(() =>{
  Aos.init();},[])

  React.useEffect(() => import("@lottiefiles/lottie-player"));
  return <Component {...pageProps} />;
}
