import React, {useParams, useNavigate, useSearchParams} from 'react-router-dom';


const Commons = () => {
    const {id} = useParams();

    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();




    function result(){
        return searchParams.get('name') != null && '실제 이름은 ' + searchParams.get('name') + '입니다.';
    }



    return(
        <div>
            <p>학생 이름은 <b style={{color: 'green'}}>{id}</b> 입니다.</p>
            <p>{result()}</p>
            <button onClick={() => navigate(-1)}>이전페이지</button>
        </div>
    );
}

export default Commons;