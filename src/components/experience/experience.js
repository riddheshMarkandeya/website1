import * as React from "react"
import "./experience.scss"


const experienceData = [
  {
    "company": "Pharmaceutical Education & Research Center (PERC)",
    "url": "https://cphs.campbell.edu/centers-programs/pharmaceutical-education-research-center/",
    "time": "January 2024 - Present",
    "position": "Analytical Chemist"
  },
  {
    "company": "Wayne State University",
    "url": "https://cphs.wayne.edu/research/current-pharm-sciences.php",
    "time": "September 2022 - July 2023",
    "position": "Research Assistant"
  },
  {
    "company": "Glennmark Pharmaceuticals",
    "url": "https://glenmarkpharma.com/",
    "time": "August 2020 - July 2022",
    "position": "R&D Intern"
  },
]

const Experience = () => (
  <section className="section experience">
    <div className="section__title">Experience</div>
    <div className="section__content">
      <div className="jobs">
        {
          experienceData.map((data) => (
            <div className="job">
              <div className="time-place">
                <div className="job__company">
                  <a href={data.url} target="_blank" rel="noreferrer">{data.company}</a>
                </div>
                <div className="job__time">{data.time}</div>
              </div>
              <div className="job__position">{data.position}</div>
            </div>
          ))
        }
      </div>

      <a href="./vrushali_more_resume.pdf" target="_blank" rel="noreferrer" className="arrow-link">View My Resume</a>
    </div>
  </section>
)

export default Experience
