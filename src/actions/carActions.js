// Action Jackson Satisfaction
export const ADDFEATS = 'ADD_FEATURE';

export const REMOVEFEATS = 'REMOVE_FEATURE';

/*****************************************************/

export const addFeature = (selected) => {
    return {type: ADDFEATS, payload: selected};
};

export const remFeature = (selected) => {
    return {type: REMOVEFEATS, payload: selected};
};
