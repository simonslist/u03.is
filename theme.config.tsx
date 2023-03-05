import React from "react";
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import Image from "next/image";
import logo from "./public/logo/logo.svg"
import SwitchTheme from "./components/SwitchTheme";

export default {
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://my-app.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
      
    return <>
      <meta property="og:url" content={url} />
      <meta property="og:title" content={frontMatter.title || 'Nextra'} />
      <meta property="og:description" content={frontMatter.description || 'The next site builder'} />
    </>
  },
  logo: (
    <Image className="w-16 fill-red-400 m-0" src={logo} alt="flyer" />
  ),
  navbar:{
  //  extraContent: <SwitchTheme/>
  },
  banner: {
    key: '0.2-release',
    text: <a href="/about" className="py-5" target="_blank">
      One website for all my projects. Under heavy construction!
    </a>,
  },
  
  docsRepositoryBase: "https://github.com/u03is/u03.is/tree/main/",
  footer: {
    text: "u03.is",
},
search:{
  placeholder: "Search u03.is"
},
primaryHue:360,
// darkMode: false,
nextThemes: {
  // enableSystem: false,
},
feedback:{
  content:null
}

}