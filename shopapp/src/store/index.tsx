
import { createStore } from "redux";
import han from './reducers';
//配置数据的持久化效果
import { persistReducer, persistStore } from "redux-persist";
//导入需要配置的数据源，可以选择，storage，cookie,session等
import storage from "redux-persist/lib/storage";
 
// let store=createStore(han)
 
//定义配置的信息
const persitConfig = {
    key:"root",
    storage:storage,
   // 如果不想将部分state持久化，可以将其放入黑名单(blacklist)中.黑名单是设置
//   blacklist: ['ll']
}
//创建持久化的配置persist的信息
const persist_reducers = persistReducer(persitConfig,han);
//创建存储对象并且抛出对象
const store = createStore(persist_reducers);
const persistor =  persistStore(store);
 
export { store, persistor };