import {rules, createComparison} from "../lib/compare.js";

export function initSearching(searchField) {
    // создаём компаратор только с нужными правилами
    const compare = createComparison(
        ['skipEmptyTargetValues'],
        [rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)]
    );

    return (data, state, action) => {
        // фильтруем данные с помощью компаратора
        return data.filter(row => compare(row, state));
    }
}
