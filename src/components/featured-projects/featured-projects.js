import * as React from "react"
import "./featured-projects.scss"

const FeaturedProjects = () => (
  <section className="section featured-projects">
    <div className="section__title">Featured Projects</div>
    <div className="section__content">
      <div className="project blistabloc">
        <figure className="project__pic">
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7685350/" rel="noreferrer" target="_blank">
            <img src="./images/featured/sars_cov_2/sars_cov_2.png" alt=""/>
          </a>
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7685350/" rel="noreferrer" target="_blank">SARS-CoV-2 S-RBD Optimization</a>
          </div>
          <p>Optimized the production of SARS-CoV-2 spike protein using bacterial cells, enhancing expression efficiency for research applications.</p>
        </figcaption>
      </div>
    </div>
  </section>
)

export default FeaturedProjects
