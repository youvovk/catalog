export const getCategory = ({ data, way }) => data.reduce((accum, [id, item]) => {
    let category = item[way];

    if (way === 'address') {
        category = item[way].addressRegion;
    }

    if (typeof category !== 'undefined') {

        if (!accum[category]) return { ...accum, [category]: 1 };

        const updatedValue = accum[category] + 1;

        return { ...accum, [category]: updatedValue };
    }

    return { ...accum };
}, {});

export const setClassForFilterItem = (isFiltersSelected, label) => {
    let additionalClass = '';

    if (isFiltersSelected === '' && !label) {
        additionalClass = 'removed';
    } else if (!label) {
        additionalClass = 'disabled';
    }

    return additionalClass;
};