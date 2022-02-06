import { v4 as uuid } from 'uuid';
import './AddLesson.css';
import { useState } from 'react';
function AddLesson({ addLesson }) {
  const [lesson, setLesson] = useState({
    mark: '',
    unit: '',
    name: '',
    id: uuid(),
  });

  const handleUnit = (e) => {
    setLesson({ ...lesson, unit: e.target.value });
  };
  const handleName = (e) => {
    setLesson({ ...lesson, name: e.target.value });
  };
  const handleMark = (e) => {
    setLesson({ ...lesson, mark: e.target.value });
  };
  const handleSubmit = () => {
    if (
      lesson.name.trim() !== '' &&
      lesson.mark.trim() !== '' &&
      lesson.unit.trim() !== ''
    ) {
      lesson.id = uuid();
      lesson.mark = +lesson.mark;
      lesson.unit = +lesson.unit;
      setLesson({ mark: '', unit: '', name: '' });
      addLesson(lesson);
    }
  };

  return (
    <div className='add-lesson'>
      <div className='title-box'>
        <img src='../../svg/add.svg' alt='' />
        <h2 className='title-box__title'>Add New Lesson</h2>
      </div>
      <div className='input-group'>
        <input
          value={lesson.unit}
          onChange={handleUnit}
          placeholder='unit'
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
