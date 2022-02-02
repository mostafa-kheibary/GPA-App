import './AllLesson.css';
import LessonCard from '../LessonCard/LessonCard';
function AllLesson({ all }) {
  return (
    <div className='all-lesson'>
      <div className='all-lesson__head'>
        <img
          className='all-lesson__icon'
          src='../../svg/allLesson.svg'
          alt=''
        />
        <h2 className='all-lesson__title'>All Lesson</h2>
      </div>
      <div className='all-lesson__container'>
        {all.map((lesson) => (
          <LessonCard key={lesson.name} />
        ))}
      </div>
    </div>
  );
}

export default AllLesson;
