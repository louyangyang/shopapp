export interface IUser {
  // title: string;

}

export interface IUserState {
  data: any;
}

const initUserState: IUserState = {
  /* state默认值 */
  data: {
    data: [{ title: '' }]
  },
};

export enum IUserActionType {
  /* Actions */
  INIT,
  CHANGE,
}


const serch = (
  state: IUserState = initUserState,
  action: { type: IUserActionType; payload: any }
) => {
  const { payload } = action;
  switch (action.type) {
    case IUserActionType.INIT:
      return state;
    case IUserActionType.CHANGE:
      return { ...state, data: { ...state.data, ...payload } };
    default:
      return state;
  }
};

export default serch;
