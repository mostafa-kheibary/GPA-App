import { useEffect, useState } from 'react';
import './Result.css';
function Result({ result, all }) {
  const [gradeScheme, setGradeScheme] = useState('');
  useEffect(() => {
    if (result.avrage >= 90 && result.avrage <= 100) {
      setGradeScheme('A+');
    } else if (result.avrage >= 85 && result.avrage <= 89) {
      setGradeScheme('A');
    } else if (result.avrage >= 80 && result.avrage <= 84) {
      setGradeScheme('A-');
    } else if (result.avrage >= 75 && result.avrage <= 79) {
      setGradeScheme('B+');
    } else if (result.avrage >= 70 && result.avrage <= 74) {
      setGradeScheme('B');
    } else if (result.avrage >= 65 && result.avrage <= 69) {
      setGradeScheme('C+');
    } else if ((result.avrage <= 64)) {
      setGradeScheme('FAIL');
    } else {
      setGradeScheme('');
    }
  }, [result]);
  return (
    <div className='result'>
      <div className='result__head'>
        <img className='result__icon' src='../../svg/result.svg' alt='' />
        <h2 className='result__title'>Your Reslut</h2>
      </div>
      <div className='result__container'>
        <h4 className='result__mark-sign'>{gradeScheme}</h4>
        <h5 className='result__mark'>
          Yoy Get:{' '}
          <span className='large'>
            {result.avrage === 'NaN' ? 0 : result.avrage}
          </span>
        </h5>
        <p className='result__info'>
          {all.length} lesosn and {result.unit} unit
        </p>
        <div className='status'>
          <div className='status__pass'>
            <img src='../../svg/pass.svg' alt='' />
            <h4 className='status__title'>
              you pass :{' '}
              {result.passLesson.map((lesson) => (
                <span key={Math.random() * 10}>, {lesson.name}</span>
              ))}
            </h4>
          </div>
          <div className='status__fail'>
            <img src='../../svg/fail.svg' alt='' />
            <h4 className='status__title'>
              you faild :{' '}
              {result.failLesson.map((lesson) => (
                <span key={Math.random() * 10}>, {lesson.name}</span>
              ))}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
