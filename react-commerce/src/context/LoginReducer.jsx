export function LoginReducer(state,action){
    switch(action.type){
      case"field":{
        return{
          ...state,
          [action.field]:action.value
        };
      }
      case "login":{
        return{
          ...state,
          isLoading:true,
          error:false
        }
      }
      case "success":{
        return{
          ...state,
         isLoggedIn:true,
         isLoading:false
        };
      }
      case "error":{
        return{
          ...state,
          error:action.payload,
          isLoading:false
        };
      }
      case "logout":{
        return{
          ...state,
          isLoggedIn:false,
          username:'',
          password:''
        };
      }
      default:{
        return state;
      }
    }
  }