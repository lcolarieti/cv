import React, {PropsWithChildren} from 'react';
import {ISidebarItem} from '../interfaces/cv';


type SidebarProps = PropsWithChildren<any> & ISidebarItem[];

const Sidebar: React.FC<SidebarProps> = (props) => {
  const {sidebar} = props;

  return (
    <div className={sidebar.length > 0 ? 'sidebar' : 'hide'}>
      {
        sidebar.map((item: ISidebarItem, index: number) => {
          const {content} = item;
          return (
            <div key={index}>
              <h3 title={item.title}>{item.title}</h3>
              {
                content.map((paragraph: string, pIndex: number) => <p key={pIndex}>{paragraph}</p>)
              }
            </div>
          );
        })
      }
    </div>
  );
};

export default Sidebar;