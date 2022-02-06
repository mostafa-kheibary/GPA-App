import './AllLesson.css';
import LessonCard from '../LessonCard/LessonCard';
function AllLesson({ all, handleDelete }) {
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
          <LessonCard
            handleDelete={handleDelete}
            key={lesson.id}
            id={lesson.id}
            name={lesson.name}
            mark={lesson.mark}
            isPass={lesson.isPass}
            ratio={lesson.ratio}
          />
        ))}
        <h4 className='nothing'>
          {all.length === 0 && 'You dont have any lesson yet'}
        </h4>
      </div>
    </div>
  );
}

export default AllLesson;
