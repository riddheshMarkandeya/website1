import * as React from "react"


const backgroundData = {
  title: "Background",
  part1: "Currently, I work as an Analytical Chemist at the",
  part2: "Pharmaceutical Education & Research Center (PERC)",
  part2Href: "https://cphs.campbell.edu/centers-programs/pharmaceutical-education-research-center/",
  part3: ", where I conduct critical research and testing to ensure pharmaceutical product quality and regulatory compliance.",
  line2: "With hands-on experience in various analytical techniques, including HPLC, GC, and UV-Vis spectroscopy, I bridge the gap between research and development, optimizing testing processes and ensuring data integrity. I'm always eager to expand my knowledge, stay updated on industry trends, and explore new areas within pharmaceutical sciences.",
  line3Part1: "Outside of the lab",
  line3Part2: ", I enjoy exploring new scientific advancements, trying out new recipes, and occasionally tackling DIY projects, all while sharing insights and experiences with others.",
};
const Background = () => (
  <section className="section background">
    <div className="section__title">{backgroundData.title}</div>
    <div className="section__content">
      <p>
        {backgroundData.part1}
        <a className="underline-link" href={backgroundData.part2Href} target="_blank" rel="noreferrer">{backgroundData.part2}</a>
        {backgroundData.part3}
      </p>
      <p>
        {backgroundData.line2}
      </p>
      <p>
        <strong>{backgroundData.line3Part1}</strong>{backgroundData.line3Part2}
        {/* <a className="underline-link" href={backgroundData.line3Part3Href} target="_blank" rel="noreferrer">{backgroundData.line3Part3}</a>
        {backgroundData.line3Part4} */}
      </p>
    </div>
  </section>
)

export default Background
