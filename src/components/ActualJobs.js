import React from 'react';

function ActualJobs() {
    return(
        <div>
            <h1 className='title-page__title'>Актуальные профессии</h1>
            <div className='actualJobs__main-information'>
                <div className='actualJobs__list'>
                    <h3 className='actualJobs__list_item-link'>Менеджер по продажам</h3>
                    <h3 className='actualJobs__list_item-link'>Финансовый аналитик</h3>
                    <h3 className='actualJobs__list_item-link'>Финансовый менеджер</h3>
                    <h3 className='actualJobs__list_item-link'>Маркетолог</h3>
                    <h3 className='actualJobs__list_item-link'>Экономист-финансист</h3>
                </div>
                <div className='actualJobs__list'>
                    <a className='actualJobs__links_item-button' href='/sales-manager'>Узнать больше</a>
                    <a className='actualJobs__links_item-button' href='/finance-analytic'>Узнать больше</a>
                    <a className='actualJobs__links_item-button' href='/finance-manager'>Узнать больше</a>
                    <a className='actualJobs__links_item-button' href='/marketolog'>Узнать больше</a>
                    <a className='actualJobs__links_item-button' href='/economist-finansist'>Узнать больше</a>
                </div>
            </div>
        </div>
    )
}
export default ActualJobs;