import { v4 as uuid } from 'uuid';
import './AddLesson.css';
import { useState } from 'react';
function AddLesson({ all, addLesson }) {
  const [lesson, setLesson] = useState({
    mark: '',
    ratio: '',
    name: '',
    id: uuid(),
  });

  const handleRatio = (e) => {
    setLesson({ ...lesson, ratio: e.target.value });
  };
  const handleName = (e) => {
    setLesson({ ...lesson, name: e.target.value });
  };
  const handleMark = (e) => {
    setLesson({ ...lesson, mark: e.target.value });
  };
  const handleSubmit = () => {
    lesson.id =uuid();
    lesson.mark = +lesson.mark;
    lesson.ratio = +lesson.ratio;
    setLesson({ mark: '', ratio: '', name: '' });
    addLesson(lesson);
  };

  return (
    <div className='add-lesson'>
      <div className='title-box'>
        <img src='../../svg/add.svg' alt='' />
        <h2 className='title-box__title'>Add New Lesson</h2>
      </div>
      <div className='input-group'>
        <input
          value={lesson.ratio}
          onChange={handleRatio}
          placeholder='ratio'
          type='number'
          className='input input-ratio'
        />
        <input
          value={lesson.name}
          onChange={handleName}
          placeholder='Lesson Name'
          type='text'
          className='input input-text'
        />
        <input
          value={lesson.mark}
          onChange={handleMark}
          placeholder='Mark'
          type='text'
          className='input input-mark'
        />
      </div>
      <button onClick={handleSubmit} className='submit'>
        <img src='../../svg/submit-icon.svg' alt='' /> submit
      </button>
    </div>
  );
}

export default AddLesson;
