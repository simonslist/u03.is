import React from "react";
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import Image from "next/image";
import logo from "./public/logo/logo.svg"

export default {
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – u03.is'
      }
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://u03.is' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
      
    return <>
      <meta property="og:url" content={url} />
      <meta property="og:title" content={frontMatter.title || 'u03.is'} />
      <meta property="og:description" content={frontMatter.description || 'The next site builder'} />
    </>
  },
  logo: (
    <Image className="w-16 fill-green-400 m-0" src={logo} alt="flyer" />
  ),
  navbar:{
  //  extraContent: <SwitchTheme/>
  },
  docsRepositoryBase: "https://github.com/u03is/u03.is/tree/main/",
  footer: {
    text: "u03.is",
},
search:{
  placeholder: "Search u03.is"
},
sidebar: {
  defaultMenuCollapseLevel:0
},
primaryHue:{ dark: 360, light: 240 },
// darkMode: false,
nextThemes: {
  // enableSystem: false,
},
feedback:{
  content:null
}

}





