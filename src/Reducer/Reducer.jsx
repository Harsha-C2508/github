 const Reducer  = (state, action) => {
   switch (action.type) {
     case "USER_LOADING": {
       return {
         ...state,
         isLoading: true,
         isError: false
       };
     }
     case "USER_SUCCESS": {
       return {
         ...state,
         isLoading: false,
         data: action.payload
       };
     }
     case "USER_FAILURE": {
       return {
         ...state,
         isLoading: false,
         isError: true
       };
     }
     default:
       return state;
   }
 }; 
 export default Reducer;
 