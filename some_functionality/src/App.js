import './App.css';
import React from "react";
import MultiCheckbox from './component/MultiCheckbox';
import YTVideo from './component/YTVideo';


function App() {
  return (
    <div className="App">
      <h2>Hi Using Multi CheckBox </h2>
      <MultiCheckbox />
      <YTVideo embedId="mGV9r0wgCrI" />
    </div>
  );
}

export default App;
