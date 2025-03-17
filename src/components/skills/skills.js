import * as React from "react"
import "./skills.scss"

const skillsData = {
  "languagesTitle": "Analytical Techniques",
  "languages": ["HPLC (SEC, IEX)", "LC, ICP, GC/MS", "Gas Chromatography", "UV-Vis Spectroscopy"],
  "frameworksTitle": "Regulatory Compliance",
  "frameworks": ["GMP", "GLP", "GCP", "FDA Guidelines"],
  "toolsTitle": "Lab Operations",
  "tools": ["Method Validation", "Sample & Buffer Preparation", "Instrument Calibration", "Troubleshooting"],
  "designTitle": "Software",
  "design": ["Empower 3", "ChemStation", "LIMS", "Microsoft Office"],
}

const Skills = () => (
  <section className="section skills">
    <div className="section__title">Skills</div>
    <div className="section__content">
      <div className="skillz">
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.languagesTitle}</div>
          <ul>
            {skillsData.languages.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.frameworksTitle}</div>
          <ul>
            {skillsData.frameworks.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.toolsTitle}</div>
          <ul>
            {skillsData.tools.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.designTitle}</div>
          <ul>
            {skillsData.design.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Skills
