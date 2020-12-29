import { menesiai } from "../data.js";

function moneySymbol(money) {
    return money ? money + ' Eur' : '-';
}

function generateTable(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    for(let i = 0; i < data.length; i++) {
        const monthStat = data[i];

        HTML = `<div class="table-row">
                    <div class="cell">${monthStat.month}</div>
                    <div class="cell">${menesiai[ monthStat.month-1 ]}</div>
                    <div class="cell">${moneySymbol(monthStat.income)}</div>
                    <div class="cell">${moneySymbol(monthStat.expense)}</div>
                    <div class="cell">150.00 Eur / Balansas</div>
                </div>`;
        DOM.innerHTML += HTML;
        }
}

export { generateTable }