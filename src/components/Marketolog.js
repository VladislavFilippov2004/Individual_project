import React from 'react';

function Marketolog() {
    return(
        <div className='profession-structure'>
            <h2 className="profession-structure__title">Специалист по маркетингу</h2>
            <p className="profession-structure__text"><b>Специалист по маркетингу</b>-это человек, который изучает спрос и предложение на товары или услуги и организует их эффективные продажи.</p>
            <ul className='profession-structure__duties'>
               <b> Основные задачи специалиста по маркетингу </b>
                <li>- Изучение рынка товаров (услуг), актуальных на данный момент.
Определение потребностей клиентов
</li>
                <li>Содействие в разработке конкурентоспособного продукта (услуги) </li>
                <li>Разработка планов продвижения</li>
            </ul>
            <p>Разница между специалистом по маркетингу и менеджером по продажам: маркетолог
                 говорит вам, как продавать, а менеджер по продажам продает.
                 Главная цель маркетолога-убедиться в том, что продажи осуществляются.</p>
        </div>
    )
}
export default Marketolog;