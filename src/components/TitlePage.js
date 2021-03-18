import React from 'react';
import statistic from '../images/statistic.png'

function TitlePage() {
    return(
    <div>
    <h2 className='title-page__title'>Всё об актуальных профессиях <br></br> социально-экономического профиля</h2>
    <h2 className='title-page__title'>Сколько людей учится в социально-экономическом профиле?</h2>
    <div className='title-page__main-information'>
    <h2 className='title-page__text'>По статистике за последние 5 лет число людей, учащихся в социально-экономическом профиле, уменьшается.
    Это означает, что специалисты в этой сфере ценятся в наше время</h2>
    <img className="title-page__statistic" src={statistic}></img>
    </div>
    </div>
    )
}
export default TitlePage;