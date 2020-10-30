export const getCategory = ({ data, way, name, filters }) => (
    data.reduce((accum, [id, item]) => {
        let category = item[way];
        let isValidHotel = [];

        if (way === 'address') {
            category = item[way].addressRegion;
        }

        // checked if hotel have all filters
        if (filters) {
            if (name !== 'districts' && filters.districts.length > 0) {
                isValidHotel = [...isValidHotel, filters.districts.includes(item.address.addressRegion)];
            }

            if (name !== 'stars' && filters.stars.length > 0) {
                isValidHotel = [...isValidHotel, filters.stars.includes(String(item.stars))];
            }

            if (name !== 'types' && filters.types.length > 0) {
                isValidHotel = [...isValidHotel, filters.types.includes(item.hotel_type_name)];
            }

            if (name !== 'facilities' && filters.facilities.length > 0) {
                const facilitiesValues = Object.values(item.facilities);
                let isValidHotelFacilities = false;

                for (let i = 0; i < facilitiesValues.length; i++) {
                    if (filters.facilities.includes(facilitiesValues[i].name)) {
                        isValidHotelFacilities = true;
                        i = facilitiesValues.length;
                    } else {
                        isValidHotelFacilities = false;
                    }
                }

                isValidHotel = [...isValidHotel, isValidHotelFacilities];
            }

            if (name === 'facilities' && !isValidHotel.includes(false)) {
                return { ...accum, ...getCategory({ way: 'name', data: Object.entries(item.facilities) }) } ;
            }
        }

        if (typeof category !== 'undefined' && !isValidHotel.includes(false)) {
            if (!accum[category]) return { ...accum, [category]: 1 };

            const updatedValue = accum[category] + 1;

            return { ...accum, [category]: updatedValue };
        }

        // if (typeof category !== 'undefined' && !isValidHotel.includes(false)) {
        //     const categories = name === 'facilities' ? Object.values(item.facilities).map(({name}) => name) : [category];
        //     let accumPrepared = {...accum};
        //     let i = 0;
        //
        //     while (i <= categories.length - 1) {
        //         if (!accumPrepared[categories[i]]) accumPrepared = {...accumPrepared, [categories[i]]: 1};
        //
        //         const updatedValue = accumPrepared[categories[i]] + 1;
        //
        //         accumPrepared = {...accumPrepared, [category]: updatedValue};
        //
        //         i++;
        //     }
        //
        //     if (name === 'facilities') {
        //         console.log({...accum, ...accumPrepared})
        //     }
        //
        //     return {...accum, ...accumPrepared};
        // }

        return { ...accum };
    }, {})
);

export const setClassForFilterItem = (isFiltersSelected, label) => {
    let additionalClass = '';

    if (isFiltersSelected === '' && !label) {
        additionalClass = 'removed';
    } else if (!label) {
        additionalClass = 'disabled';
    }

    return additionalClass;
};