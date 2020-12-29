import { menesiai } from "../data.js";

function moneySymbol(money) {
    return money ? money + ' Eur' : '-';
}

function sortData(list) {
    const sortedList = [];
    let minMonthNum = Infinity;
    for(let i = 0; i < list.length; i++) {
        if (list[i].month < minMonthNum) {
            minMonthNum === list[i].month;
            sortedList.push(list[minMonthNum]);
            break;
        }
    }

    return sortedList;
}


function generateTable(selector, monthStat) {
    const DOM = document.querySelector(selector);
    let HTML = '';

    monthStat = sortData(monthStat);

    for(let i = 0; i < monthStat.length; i++) {
        const monthStatItem = monthStat[i];

        HTML = `<div class="table-row">
                    <div class="cell">${monthStatItem.month}</div>
                    <div class="cell">${menesiai[ monthStatItem.month-1 ]}</div>
                    <div class="cell">${moneySymbol(monthStatItem.income)}</div>
                    <div class="cell">${moneySymbol(monthStatItem.expense)}</div>
                    <div class="cell">150.00 Eur / Balansas</div>
                </div>`;
        DOM.innerHTML += HTML;
        }
}

export { generateTable }