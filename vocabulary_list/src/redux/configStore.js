//스토어를 만드는 중입니ㅏㄷ.
// 스토어는 어플리케이션의 상태를 저장하고
// getState()를 총해서 상태에 접근하고
// dispatch(action)를 통해 상태를 수정할 수 있게 하고
// subscribe를 통해 리스너를 등록한다.
import thunk from "redux-thunk";

import {createStore, combineReducers, applyMiddleware} from "redux";
//리듀서는 여러개 쓸 수 있는데 리듀서를 싹 묶은것에 + 옵션도 싹 묶어서 creatStore 에 넘겨주면 스토어가 만들어진다.
import word from "./modules/words";

const rootReducer = combineReducers({word});

const middlewares = [thunk]
const enhancer = applyMiddleware(...middlewares)
// 지금은 리듀서가 하나지만 리듀서가 여러개일때 ({word, word2}) 이런식으로 해주면 된다.
// 필요한 옵션들 있으면 여기서 엮는다.
const store = createStore(rootReducer, enhancer);

export default store;

//컴포넌트에 스토어를 주입하자 스토어 데이터 사용 하고 싶으니까 => idex.js에 연결