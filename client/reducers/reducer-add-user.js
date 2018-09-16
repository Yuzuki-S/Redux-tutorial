export default function (state={}, action){
    switch(action.type) {
        case "ADD_PEOPLE":
        return [...state, action];
        break;
    }
    return state;
}