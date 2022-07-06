export default function aboutUsReducer(state, action){
    switch (action.type){
        case "changeSelected":
            return {...state,menuSelected:action.payload }
    }
}