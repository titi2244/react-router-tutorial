import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/about/foo">About Foo</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;

/*
앱 내에서 다른 라우트로 이동 할 때에는, 일반 <a href...>foo</a> 형식으로 하면 안됩니다.
왜냐하면, 이렇게하면 새로고침을 해버리기 때문이지요.

새로고침을 하기 위해선, 리액트 라우터에 있는 Link 컴포넌트를 사용해야합니다.
이 컴포넌트를 사용하면 페이지를 새로 불러오는걸 막고, 원하는 라우트로 화면 전환을 해줍니다.
 */