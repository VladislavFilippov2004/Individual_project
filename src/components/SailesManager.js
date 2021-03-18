import React from 'react';

function SailesManager() {
    return(
        <div className='profession-structure'>
            <h2 className="profession-structure__title">Менеджер по продажам</h2>
            <p className="profession-structure__text"><b>Менеджер</b>-одна из самых востребованных профессий, ведь именно этот специалист обеспечивает финансовое благополучие компании. 
            Основная задача такого менеджера-продавать продукцию и услуги компании, расширять круг клиентов и поддерживать с ними партнерские отношения.
             Специалист по продажам проводит большую часть своего рабочего времени в переговорах.</p>
            <ul className='profession-structure__duties'>
               <b> Основные задачи менеджера по продажам </b>
                <li>Расширение круга клиентов</li>
                <li>Поддержание партнёрских отношений с ними</li>
                <li>Продажи товаров и услуг компании</li>
            </ul>
        </div>
    )
}
export default SailesManager;