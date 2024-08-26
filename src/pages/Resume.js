import { Helmet } from 'react-helmet';
import React from 'react';
import { FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaJs, FaGit, FaGithub} from 'react-icons/fa';
import { DiDjango, DiDatabase } from 'react-icons/di';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { SiMongodb, SiAzuredevops, SiCplusplus } from 'react-icons/si';
import Sectiontitle from '../components/Sectiontitle';
import Smalltitle from '../components/Smalltitle';
import Layout from '../components/Layout';
import ResumeSection from '../components/ResumeSection';

const skills = [
  {
    title: 'Java',
    icon: FaJava,
  },
  {
    title: 'HTML',
    icon: FaHtml5,
  },
  
  {
    title: 'CSS3',
    icon: FaCss3Alt,
  },
  {
    title: 'Javascript',
    icon: FaJs,
  },
  {
    title: 'React',
    icon: FaReact,
  },
  {
    title: 'django',
    icon: DiDjango,
  },
  {
    title: 'Azure',
    icon: SiAzuredevops,
  },
  {
    title: 'MongoDB',
    icon: SiMongodb,
  },
  {
    title: 'AI',
    icon: GiArtificialIntelligence,
  },
  {
    title: 'C++',
    icon: SiCplusplus,
  },
  {
    title: 'Python',
    icon: FaPython,
  },
  {
    title: 'MySQL',
    icon: DiDatabase,
  },
  {
    title: 'Github',
    icon: FaGithub,
  },
  {
    title: 'Git',
    icon: FaGit,
  },

];

const Education = [
  {
    id: 4,
    year: '2021 - Present',
    institution: 'Gayatri Vidya Parishad College of Engineering(Autonomous)',
    stream : 'Artificial Intelligence & Machine Learning'
    
  },
  {
    id: 2,
    year: '2019 - 2021',
    institution: 'Sri Chaitanya Junior College',
    stream : 'MPC'
  },
  {
    id: 3,
    year: '2018-2019',
    institution: 'Mother Public School',
    stream : 'SSC'
  },
];

function Resume() {
  return (
    <Layout>
      <Helmet>
        <title>Resume</title>
        <meta
          name="description"
          content="Indravathi Personal Portfolio Resume Page"
        />
      </Helmet>
      <div className="mi-skills-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="My Skills" />
          <div className="mi-skills ">
            <div className="row justify-content-center mt-30 resume-skills">
              {skills.map((skill) => (
                <div
                  key={skill.title}
                  className="col-6 col-md-4 col-lg-3 d-flex"
                >
                  <skill.icon
                    className="color-theme mx-auto my-5"
                    style={{ height: '100px', width: '100px' }}
                    title={skill.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-resume-area mi-section mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Resume" />
          <Smalltitle title="Working Experience" icon="briefcase" />
          <div className="mi-resume-wrapper">
            {Education.map((edu) => (
              <ResumeSection key={edu.id} edu={edu} />
            ))}
          </div>
          {/* <div className="mt-30" />
          <Smalltitle title="Educational Qualifications" icon="book" />
          <div className="mi-resume-wrapper">
            {educationExperience.map((educatonExp) => (
              <Resume key={educatonExp.id} resumeData={educatonExp} />
            ))}
          </div> */}
        </div>
      </div>
    </Layout>
  );
}

export default Resume;
