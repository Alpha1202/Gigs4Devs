import React from 'react';
import Jobs from './Jobs'
import './App.css';

const mockJobs = [
  {
    title: "swe 1", company: "google"
  },
  {
    title: "swe 1", company: "facebook"
  },
  {
    title: "swe 1", company: "apple"
  },
  {
    title: "swe 1", company: "microsoft"
  }
]

function App() {
  return (
    <div className="App">
     <Jobs jobs={mockJobs}/>
    </div>
  );
}

export default App;
