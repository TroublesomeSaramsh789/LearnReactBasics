
const initialState = {
    groupSize: "Solo",
    travelDateType: "Fixed",
    startDate: "",
    endDate: "",
    tripDestinationType: "choose",
    preferredDestination: "",
    providedDestination: "Everest Base Camp",
    tripPlan: "",
    guide: "",
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    country: "",
    address: ""
}

export default function normalTrekReducer(state, action) {
    switch (action.type) {
        case 'changeGroupSize':
            return { ...state, groupSize: action.payload };
        case 'changeDateType':
            return { ...state, travelDateType: action.payload }
        case 'setStartDate':
            return { ...state, startDate: action.payload }
        case 'setEndDate':
            return { ...state, endDate: action.payload }
        case 'changeTripType':
            return { ...state, tripDestinationType: action.payload }
        case 'setPreferredDestination':
            return { ...state, providedDestination: action.payload }
        case 'setAboutTrip':
            return { ...state, tripPlan: action.payload }
        case 'setProvidedDestination':
            return { ...state, providedDestination: action.payload }
        case 'setFirstName':
            return { ...state, firstName: action.payload }
        case 'setLastName':
            return { ...state, lastName: action.payload }
        case 'setEmail':
            return { ...state, email: action.payload }
        case 'setContactNo':
            return { ...state, contactNo: action.payload }
        case 'setCountry':
            return { ...state, country: action.payload }
        case 'setAddress':
            return { ...state, address: action.payload }
        default:
            throw new Error();
    }
}
export { initialState }
