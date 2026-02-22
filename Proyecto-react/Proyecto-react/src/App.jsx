import AnalizeDataSourceComponent from "./components/AnalizeDataSourceComponent";
import AsideComponent from "./components/AsideComponent";

import HomeComponent from "./components/HomeComponent";
import NavComponent from "./components/NavComponent";
import { useState } from 'react';

function App() { 

    const[ActiveView, setActiveView] = useState('');
   
     

  return (
    <>
      <NavComponent />
      <div style={{ display: 'flex' }}>
        <AsideComponent setActiveView={setActiveView} />
        <main>
          {ActiveView === './AnalizeDataSourceComponent.jsx' && <AnalizeDataSourceComponent />}
          {ActiveView === './HomeComponent.jsx' && <HomeComponent  />}



        </main>
      </div>
    </>
  );
}

export default App;
