import React, { Component } from 'react'

export default class ContentNews extends Component {
    render() {
        let content = 'От iPhone к красному носу \n\nБывший главный дизайнер Apple Джони Айв представил свою новую работу. Это красный клоунский нос, разработанный для британской благотворительной организации «Разрядка смехом». \n\nПродукт продаётся за 2,5 фунта (~200 рублей) и идёт со специальным чехлом для переноски. Вырученные деньги с продажи пойдут на благотворительность.';
        let arrStr = content.split('\n');

        let arrP = [];
        arrStr.forEach((element, index) => {
            if (element.length === 0)
                arrP.push(<br key={index} />);
            else
                arrP.push(<p key={index}>{element}</p>);

        });

        return (<div className='content'>{arrP}</div>)

    }
}
