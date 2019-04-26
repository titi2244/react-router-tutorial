import React from 'react';
import queryString from 'query-string'

const About = ({location, match}) => {    {/* Router가 history, location, match를 파라메터로 전달 함.*/}
    //
    const query = queryString.parse(location.search);
    console.log(query);
    {/* http://localhost:3000/about/sunny?query1=parameter&query2=param2  => {query1: "parameter", query2: "param2"}}*/}

    const detail = query.detail === 'true';

    return (
        <div>
            <h2>About {match.params.name}</h2>
            {detail && 'detail : 자세한 정보를 표현합니다.'}
        </div>
    );
};

export default About;

/*
URL 쿼리를 만들 때 주의하실 점은, 받아오는 값들은 모두 문자열이라는 것 입니다.
따라서 비교를 해야 할 땐 boolean 을 불러오던 숫자를 불러오던, 문자열 형태로 비교를 하거나, 알맞는 형태로 변환을 시킨다음에 비교를 하세요.
*/
