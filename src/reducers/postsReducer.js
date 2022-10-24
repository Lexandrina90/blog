export default (state=[], action) => {
    switch(action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default: 
            return state;
    }
};
     /* Этот код аналогичен записи If (action.type === 'FETCH_POSTS') {
       return action.payload;
       } 
       return state; */


