export interface IUser {
    name: string;
    token: string;
    emil:string;
    id:any
  }
   
  export interface IUserState {
    user: IUser;
  }
   
  const initUserState: IUserState = {
    /* state默认值 */
    user: {
      name: "",
      token: "",
      emil:"",
      id:''
    },
  };
   
  export enum IUserActionType {
    /* Actions */
    INIT,
    CHANGE,
  }
   
  
  const user = (
    state: IUserState = initUserState,
    action: { type: IUserActionType; payload: any }
  ) => {
    const { payload } = action;
    switch (action.type) {
      case IUserActionType.INIT:
        return state;
      case IUserActionType.CHANGE:
        return { ...state, user: { ...state.user, ...payload } };
      default:
        return state;
    }
  };
   
  export default user;
   