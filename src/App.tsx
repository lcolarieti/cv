import React, {useState} from 'react';
import './App.scss';
import {useData} from './hooks/custom';
import User from './components/User';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Skills from './components/Skills';


const App: React.FC = () => {

  const [ready, setReady] = useState(false);
  const data = useData('./data/cv.json', setReady);
  const {user, sidebar, main, skills} = data;

  return (
    <div className="main-content">
      <div className="content">
        <aside>
          {ready && <User user={user}/>}
          {ready && <Sidebar sidebar={sidebar}/>}
        </aside>
        <main>
          {ready && <Main main={main} />}
          {ready && <Skills skills={skills} />}
        </main>
      </div>
    </div>
  );
}

export default App;
