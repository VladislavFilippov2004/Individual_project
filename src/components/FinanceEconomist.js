import React from 'react'

function FinanceEconomist() {
    return(
        <div className='profession-structure'>
            <h2 className="profession-structure__title">Экономист-финансист</h2>
            <p className="profession-structure__text"><b>Экономист-финансист</b>-А финансовый экономист анализирует финансовые показатели компаний и рынков (акции, облигации)
             оценивает стоимость компаний, финансовых инструментов и других активов, прогнозирует макроэкономические показатели компаний.</p>
            <ul className='profession-structure__duties'>
               <b> Какие проблемы будет решать специалист </b>
                <li>анализ финансовых активов клиента/компании и консультирование по вопросам их покупки или продажи.</li>
                <li>оценка рыночной стоимости проекта, компании или финансовых инструментов</li>
                <li>разработка стратегии развития компании</li>
            </ul>
        </div>
    )
}
export default FinanceEconomist;