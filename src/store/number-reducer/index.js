 const initialState = {
     randomNumberList: []
 }

 const RandomNumberReducer = (state = initialState, action) => {
     //console.log(action)
     switch (action.type) {
         case 'ADD_NUMBER':
             {
                 return {...state, randomNumberList: [...state.randomNumberList, action.payload] }
             }
         case 'DEL_NUMBER':
             {
                 return {...state, randomNumberList: state.randomNumberList.filter((item, i) => i !== action.payload) }
             }
         default:
             {

                 return {...state }
             }
     }

 }
 export default RandomNumberReducer