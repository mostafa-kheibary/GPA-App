import './LessonCard.css';
function LessonCard({ name, mark, isPass, ratio,handleDelete ,id}) {
  return (
    <div className='card'>
      <div className='card__split'>
        <h5 className='card__ratio'>{ratio}</h5>
        <h3 className={`card__name ${isPass ? 'pass' : 'fail'}`}>{name}</h3>
        <span className='card__mark'>({mark})</span>
      </div>
      <div className='card__split'>
        <div onClick={()=>handleDelete(id)} className='card__delete'>
          <img className='card__icon' src='../../svg/delete.svg' alt='' />
        </div>
      </div>
    </div>
  );
}

export default LessonCard;
