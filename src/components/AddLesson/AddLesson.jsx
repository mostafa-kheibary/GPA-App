import './AddLesson.css';
function AddLesson() {
  return (
    <div className='add-lesson'>
      <div className='title-box'>
        <img src='../../svg/add.svg' alt='' />
        <h2 className='title-box__title'>Add New Lesson</h2>
      </div>
      <div className='input-group'>
        <input placeholder='ratio' type='number' className='input input-ratio' />
        <input placeholder='Lesson Name' type='text' className='input input-text' />
        <input placeholder='Mark' type='text' className='input input-mark' />
      </div>
      <button className='submit'>
        <img src='../../svg/submit-icon.svg' alt='' /> submit
      </button>
    </div>
  );
}

export default AddLesson;
