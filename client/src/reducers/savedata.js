

const initialState={
  
};
const setData =(action, state = initialState)=>
{
  switch(action)
    {
      case 'USER_INPUT':
        return {
          ...state,...action.payload};
      
          case "RESET":

            return initialState;

      default:
        return state;
    }
}
export default setData;