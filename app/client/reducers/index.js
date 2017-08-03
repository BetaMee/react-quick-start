import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


export default combineReducers({
  // UI:UIReducer,//这个只处理UI状态变化
  // editor:EditorReducer,
  // form:FormReducer,
  // user:UserReducer,
  // posts:PostsReducer,
  routing: routerReducer,
});
