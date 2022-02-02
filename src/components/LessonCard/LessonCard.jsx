import './LessonCard.css'
function LessonCard() {
  return ( 
    <div className="card">
      <div className='card__split'>
        <h5 className="card__ratio">2</h5>
        <h3 className='card__name'>Math</h3>
        <span className='card__mark'>(12,3)</span>
      </div>
      <div className='card__split'>
        <div className="card__delete">
        <img className='card__icon' src="../../svg/delete.svg" alt="" />
        </div>
      </div>
    </div>
   );
}

export default LessonCard;