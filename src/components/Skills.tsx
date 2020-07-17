import React, {PropsWithChildren} from 'react';


type Skills = string[];
type SkillsProps = PropsWithChildren<any> & Skills;

const Skills: React.FC<SkillsProps> = (props) => {
  const {skills} = props;

  return (
    <div className={skills.length > 0 ? 'skills' : 'hide'}>
      <h2 title="Skills">Skills</h2>
      <ul>
        {
          skills.map((skill: string, index: number) => (
            <li key={index}>
              <span>{skill}</span>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Skills;