import React from 'react';

function FinanceManager() {
    return(
        <div className='profession-structure'>
            <h2 className="profession-structure__title">Финансовый менеджер</h2>
            <p className="profession-structure__text"><b>Финансовый менеджер</b>-это специалист, который занимается
             финансовым управлением предприятия.</p>
            <ul className='profession-structure__duties'>
               <b> В бизнесе деньги выполняют 3 функции, и задача финансового менеджера-обеспечить их реализацию </b>
                <li>Рост капитала-забота об увеличении доходов, оптимизации расходов и
своевременном поступлении средств
</li>
                <li>Покрытие затрат-грамотное распределение денежных поступлений по приоритетным и
наиболее выгодным инвестициям
</li>
                <li>- Измерение эффективности-систематический сбор и анализ
финансовых результатов
</li>
            </ul>
        </div>
    )
}
export default FinanceManager;