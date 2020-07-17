import React, {PropsWithChildren} from 'react';
import {IMain, IMainItem} from '../interfaces/cv';


type MainProps = PropsWithChildren<any> & IMain;

const Main: React.FC<MainProps> = (props) => {
  const {main} = props;

  return (
    <div className="main">

      <h2 title={main.title}>{main.title}</h2>

      {
        main.list.map((list: IMainItem, index: number) => (
          <section key={index}>
            <img src={list.logo} alt={list.company} />
            <div className="company-name">
              <h4 title={list.company}>{list.company}</h4>
            </div>
            <div className="job-info">
              <h5 title={list.role}>{list.role}</h5>
              <p>{list.start} - {list.end}</p>
            </div>

            <div className="tasks-list">
              <ul>
                {
                  list.tasks.map((task: string, taskIndex: number) => (
                    <li key={taskIndex}>
                      <span>{task}</span>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className="description">
              {list.description && <p>{list.description}</p>}
            </div>
          </section>
        ))
      }

    </div>
  );
};

export default Main;