import React from 'react';
import Gear from './Data/Gear.json'
import './App.css';
import Header from './Components/Header'
import Tags from './Components/Tags'
import {GearItem} from './Interfaces/Interfaces'
import GearOverview from './Components/GearOverview';




function App() {
  let gearList: GearItem[] = Gear;
  let tags: string[] = [];

  function setTags () {
    for (var i = 0; i < gearList.length; i++) {
      let gear: GearItem = gearList[i]      
      for (var x = 0; x < gear.tags.length; x++) {
        if (tags.includes(gear.tags[x]) === false) {
          tags.push(gear.tags[x]);
        }
      }
    }
  }

  setTags()

  return (
    <div className="main">
      <div className="mainHeader">
        <Header/>
      </div>
      <div className="mainContent">
        <Tags tags={tags}/>
        <GearOverview gearList={gearList}/>
      </div>
    </div>
  );
}

export default App;