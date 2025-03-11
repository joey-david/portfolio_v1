import React from 'react';
import { motion } from 'framer-motion';
import { Timeline } from './Timeline';
import { 
  CardLayoutSquareRight,
  CardLayoutDualUnder,
  CardLayoutBannerTop,
  CardLayoutSquareLeftRectangleRight,
  CardLayoutCircleLeft
} from './CardsLayouts';
import './Experience.css';
import { FaZ } from 'react-icons/fa6';

const Experience = () => {
  const experienceData = [
    {
      title: '2025',
      // Use an array of content elements instead of a single element
      content: [
        <CardLayoutCircleLeft
          key="insa"
          title="Student Researcher - Machine Learning"
          subtitle="INSA Lyon"
          period="March 2025 - June 2025"
          image="timeline/insa.png"
          description={
            <>
              <p>Developing a semi-supervised learning model for etiological diagnosis of uveitis, a sight-threatening eye inflammation.</p>
            </>
          }
        />
      ]
    },
    {
      title: '2024',
      content: [
        <CardLayoutBannerTop
          key="master"
          title="M.Sc. - Artificial Intelligence"
          subtitle="Université Claude Bernard, Lyon"
          period="September 2024 - June 2026"
          image="/timeline/ucbl.png"
          description={
            <>              
              <p>Coming back from the US, I decided to pursue a Masters of Science in AI (M2 IA) at the Université Claude Bernard in Lyon.</p>
            </>
          }
        />,
        <CardLayoutSquareLeftRectangleRight
          key="sopra"
          title="Fullstack Developer - Intern"
          subtitle="Sopra Steria"
          period="April 2024 - July 2024"
          images={["/timeline/storengy.png", "/timeline/sopra.png"]}
          description={
            <>
              <p>Joined a team on fullstack development in Java, Spring, and React of various features, 100% of which were implemented in the Operation
application, used by Storengy to manage France’s gas network. I was also charged with designing and implementing a proof of concept for a CV analysis model based on natural language processing. </p>
            </>
          }
        />
      ]
    },
    {
      title: '2023',
      content: [
        <CardLayoutSquareRight
          key="osu"
          title="Mobility Grant - Year Abroad"
          subtitle="Oregon State University"
          period="September 2023 - April 2024"
          image="/timeline/osu.png"
          description={
            <>
              <p>After having been selected for a mobility grant by the UCBL, I completed my B.Sc. in CS at Oregon State University, in Corvallis.</p>
              <p>On top of making great friends there, I deepened my passion for Artificial Intelligence.</p>
            </>
          }
        />,
        <CardLayoutCircleLeft
          key="hno"
          title="Information Systems Technician"
          subtitle="Hôpitaux Nord Ouest"
          period="June 2023 - August 2023"
          image="/timeline/hno.png"
          description={
            <>
              <p>Actively maintained and improved IT systems for 10+ hospitals and care centers, resolving over 600 ticketed issues. Worked with healthcare professionals to ensure critical systems remained operational.</p>
            </>
          }
        />
      ],
    },
    {
      title: '2022',
      content: (
        <CardLayoutBannerTop
          key="bsc"
          title="Second year B.Sc. - Computer Science"
          subtitle="Université Claude Bernard Lyon"
          period="September 2022 - June 2024"
          image="/timeline/ucbl.png"
          description={
            <>
              <p>After finishing my CPGE courses and getting admission offers from some French engineering schools, I instead opted to leverage my formation in computer science to switch to a B.Sc. in the domain.</p>
            </>
          }
        />
      )
    },
    {
      title: '2020',
      content: (
            <CardLayoutSquareRight
              key="licence"
              title="CPGE - Mathematics, Physics and Computer Science"
              subtitle="La Martinière Monplaisir, Lyon"
              period="September 2020 - May 2022"
              image="/timeline/monplaisir.png"
              description={
                <>
                  <p>Followed an intense formation in Mathematics, Physics, Engineering and Computer Science, in preparation for "les concours" to access engineering schools.</p>
                </>
              }
            />
      ),
    },
  ];

  return (
    <section id="experience" className="experience-section gradient-transition">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle">
            My path and milestones in AI development and research.
          </p>
        </motion.div>
        
        <Timeline data={experienceData} />
      </div>
    </section>
  );
};

export default Experience;