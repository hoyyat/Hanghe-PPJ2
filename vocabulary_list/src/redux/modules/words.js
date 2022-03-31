import {collection, addDoc} from "firebase/firestore"
import {db} from "../../firebase"
// words.js

// Actions
const LOAD   = 'widgets/LOAD';
const CREATE = 'words/CREATE';
// const UPDATE = 'my-app/widgets/UPDATE';
// const REMOVE = 'my-app/widgets/REMOVE';

// ---------------------------------------------------------------------------------
//이니셜state 초기값
const initialState = {
    list: ["영화관 가기", "매일 책 읽기", "수영 배우기","안녕"],
};
// *********************************************************************************


// Action Creators 액션객체를 만든는 액션생성함수
export function loadWidgets(word) {
  return { type: LOAD, word: word };
}


// ---------------------------------------------------------------------------------
export function createword(word) {
  return { type: CREATE, word: word };
} 
// 여기서 word: word 는 자스에서는 word로 생략 가능하고 새로운 데이터가 될 값이다.
// *********************************************************************************


// export function updateWidget(word) {
//   return { type: UPDATE, word: word };
// }

// export function removeWidget(widget) {
//   return { type: REMOVE, widget };
// }

export const createDictionary = (word) => {
  return async function(dispatch) {
    await addDoc(collection(db, "word"), word)
  }
}

// ---------------------------------------------------------------------------------
// Reducer : 새 데이터를 리턴해주는 곳
export default function reducer(state = initialState, action = {}) { 
    // 값이 없으면 비워둘거면 초기값 = {} 이런식으로 쓴다.
    switch (action.type) {
        case "words/CREATE": {
            const new_word_list = [...state.list, action.word];
            return {list : new_word_list};
        }
        case "widgets/LOAD": {
            return {list : state};
        }
      // 어떨때 뭐를해 => switch case 문
      default: return state;
    }
  }
// 여기까지 word 모듈을 만든것이다 -> 스토어를 만들고 컴포넌트가 구독하게 만들어야 한다.
// *********************************************************************************

// side effects, only as applicable
// e.g. thunks, epics, etc

// 미들웨어라고 부른다. 액션, 액션크리에이트가 있고 실제로 값을 바꿔주는 리듀서가 있다. 
// (외부에서)서버에서 데이터 값을 가져오는건 시간이 걸린다.  
// 보통 비동기 통신을 하게 되는데 데이터를 바로 넘겨주는건 힘들다 데이터를 안가져왔기 때문에 그럴때 미들웨어라는 
// 중간다리를 놓는데 어떻게 놓는건지 설명하는 것

// export function getWidget () {
//   return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))