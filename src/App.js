import { useState } from 'react';
import AddLesson from './components/AddLesson/AddLesson';
import AllLesson from './components/AllLesson/AllLesson';
function App() {
  const [lesson,setLesson] = useState([
    {name:'Math',mark:18,isPassd:true,ratio:4},
    {name:'cs',mark:14,isPassd:true,ratio:1},
    {name:'sience',mark:9,isPassd:false,ratio:2},
  ])
  return (
    <div className='container'>
      <AddLesson />
      <AllLesson all={lesson}/>
    </div>
  );
}

export default App;
