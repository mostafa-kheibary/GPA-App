import { useEffect, useState } from 'react';
import AddLesson from './components/AddLesson/AddLesson';
import AllLesson from './components/AllLesson/AllLesson';
import Result from './components/Result/Result';

function App() {
  const [lessons, setLesson] = useState([]);
  const [result, setResult] = useState({
    avrage: 0,
    ratio: 0,
    passLesson: [],
    failLesson: [],
  });

  const addLesson = (lesson) => {
    setLesson([...lessons, { ...lesson, isPass: lesson.mark >= 10 }]);
  };
  const deleteLesson = (id) => {
    const newLesson = [...lessons].filter((lesson)=>lesson.id !== id);
    setLesson(newLesson);
  };
  useEffect(() => {
    // get all ratio
    const ratio = lessons.reduce((prev, item) => {
      return item.ratio + prev;
    }, 0);
    // avrage of lesson mark
    const avrage =
      lessons.reduce((prev, item) => {
        return item.mark * item.ratio + prev;
      }, 0) / ratio;
    const passLesson = lessons.filter((lesson) => lesson.isPass === true);
    const failLesson = lessons.filter((lesson) => lesson.isPass !== true);
    let prevResult = { ...result };
    prevResult = { avrage: avrage.toFixed(2), ratio, failLesson, passLesson };
    setResult(prevResult);
  }, [lessons]);

  return (
    <div className='container'>
      <AddLesson addLesson={addLesson} all={lessons} />
      <div className='result-section'>
        <AllLesson all={lessons} handleDelete={deleteLesson} />
        <Result all={lessons} result={result} />
      </div>
    </div>
  );
}

export default App;
