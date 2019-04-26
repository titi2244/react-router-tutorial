import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';

const Root = () => (
    <BrowserRouter>     {/*-> <BrowserRouter> 로 감싸준 범위 안의 component들에 대햐여*/}
        <App/>
    </BrowserRouter>    //{/*<- Route 설정(경로:Component)하면 해당 경로로 접근 했을 때 해당 Component로 routing 해 줌.*/}
);

export default Root;