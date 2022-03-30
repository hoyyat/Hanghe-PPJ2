import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
//스토어를 가지고 옵니다
import store from "./redux/configStore";

ReactDOM.render(
  <Provider store={store}> {/*이렇게 해주면 리덕스와 컴포넌트 연결이 끝났다.*/}
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();