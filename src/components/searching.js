import {rules, createComparison} from "../lib/compare.js";

export function initSearching(searchField) {
    // создаём компаратор для поиска по нескольким полям
    const compare = createComparison(
        rules.skipEmptyTargetValues,
        rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)
    );

    return (data, state, action) => {
        const searchValue = state[searchField] ?? ""; // берём значение из state
        if (!searchValue) return data;               // если пусто, возвращаем все строки
        return data.filter(row => compare(row, searchValue));
    }
}