import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts } from 'pages';
import Menu from '../components/Menu';
class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path={"/"} component={Home}/>              {/* <Route 경로 : component*/}
                <Switch>                                                {/* 먼저 만나는 경로로 라우팅. full matching이 먼저 표횬 되어야 함.*/}
                    <Route path={"/about/:name"} component={About}/>    {/* :parameter */}
                    <Route path={"/about"} component={About}/>          {/* About.js에서 Parameter 처리 참조 */}
                </Switch>
                <Route path={"/posts"} component={Posts}/>
            </div>
        );
    }
}

export default App;

/*
* 라우트로 설정한 컴포넌트는, 3가지의 props 를 전달받게 됩니다:

history 이 객체를 통해 push, replace 를 통해 다른 경로로 이동하거나 앞 뒤 페이지로 전환 할 수 있습니다.
location 이 객체는 현재 경로에 대한 정보를 지니고 있고 URL 쿼리 (/about?foo=bar 형식) 정보도 가지고있습니다.
match 이 객체에는 어떤 라우트에 매칭이 되었는지에 대한 정보가 있고 params (/about/:name 형식) 정보를 가지고있습니다.

props example
history: {…}
location: {…}
    hash:""
    pathname:"/about/sunny"
    search:""
match:{…}
    isExact:true
    params:{…}
        name:"sunny"
    path:"/about/:name"
    url:"/about/sunny"
* */