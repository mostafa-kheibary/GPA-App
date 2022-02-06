import './Result.css';
function Result({ result,all}) {
  return (
    <div className='result'>
      <div className='result__head'>
        <img className='result__icon' src='../../svg/result.svg' />
        <h2 className='result__title'>Your Reslut</h2>
      </div>
      <div className='result__container'>
        <h4 className='result__mark-sign'>A+</h4>
        <h5 className='result__mark'>
          Yoy Get: <span className='large'>{result.avrage === 'NaN' ? 0:result.avrage}</span>
        </h5>
        <p className='result__info'>{all.length} lesosn and {result.ratio} ratio</p>
        <div className='status'>
          <div className='status__pass'>
            <img src='../../svg/pass.svg' alt='' />
            <h4 className='status__title'>you pass : {result.passLesson.map((lesson)=> <span key={Math.random()*10}>, {lesson.name}</span>)}</h4>
          </div>
          <div className='status__fail'>
            <img src='../../svg/fail.svg' alt='' />
            <h4 className='status__title'>you faild : {result.failLesson.map((lesson)=> <span key={Math.random()*10}>, {lesson.name}</span>)}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
