import * as React from "react"

const seoData = {
  "title": "Vrushali More",
  "name": "Vrushali More",
  "description": "Vrushali More is an expert in analytical techniques, pharmaceutical research, and regulatory compliance.",
  "author": "Vrushali More",
  "url": "https://bchiang7.github.io",
  "logo": "https://bchiang7.github.io/img/emojis/technologist.png",
  "cover": "https://bchiang7.github.io/img/og.png",
}

const Seo = () => (
  <>
    <title>{seoData.title}</title>
    <meta name="description" content={seoData.description} />
    <meta property="og:title" content={seoData.title} />
    <meta property="og:description" content={seoData.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={seoData.url} />
    <meta property="og:site_name" content={seoData.name} />
    <meta property="og:image" content={seoData.cover} />
    <meta property="og:image:width" content="1280" />
    <meta property="og:image:height" content="800" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:locale" content="en_US"></meta>
    <meta name="description" content={seoData.description}/>
    <meta name="keywords" content="pharmaceutical sciences, HPLC, drug development, GMP, brittany, chiang, analytical techniques, campbell"/>
    <meta itemProp="name" content={seoData.title}/>
    <meta itemProp="description" content={seoData.description}/>
    <meta itemProp="image" content={seoData.cover}/>
    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:url" content={seoData.url}/>
    <meta name="twitter:site" content={seoData.author}/>
    <meta name="twitter:creator" content={seoData.author}/>
    <meta name="twitter:title" content={seoData.title}/>
    <meta name="twitter:description" content={seoData.description}/>
    <meta name="twitter:image:src" content={seoData.cover}/>
  </>
)

export default Seo
