import React, {useParams, useLocation, useSearchParams, useNavigate} from 'react-router-dom';


const Product = () => {
    // 변수를 생성해서 사용하려면? 
    // const userId = useParams().id;
    const {id} = useParams();

    const location = useLocation();

    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();

    return(
        <div>
            <h1>{id}번 Product</h1>

            <ul>
                {/* 주소의 # 문자열 뒤의 값 */}
                <l1>hash : {location.hash}</l1>

                {/* 현재 주소의 경로  */}
                <li>pathname : {location.pathname}</li>

                {/* ?를 포함한 쿼리스트링 값 */}
                <li>search : {location.search}</li>

                {/* 페이지로 이동 시 임의로 넣을 수 있는 상태 값 */}
                <li>state : {location.state}</li>

                {/* location 객체의 고유 값, 초기값은 default, 페이지가 변경될 때마다 고유 값 생성*/}
                <li>key : {location.key}</li>
            </ul>


            <ul>
                <li>keyWords : {searchParams}</li>
                {/* get()메서드를 이용해 searchParams안에 있는 데이터를 가져올 수 있다. */}
                <li>keyWord : {searchParams.get('search')}</li>
            </ul>


            <ul>
                <li><button onClick={() => navigate(-2)}>Go 2 pages back</button></li>
                <li><button onClick={() => navigate(-1)}>Go back</button></li>
                <li><button onClick={() => navigate(1)}>Go forward</button></li>
                <li><button onClick={() => navigate(2)}>Go 2 pages forward</button></li>
                <li><button onClick={() => navigate('/')}>Go Root</button></li>
                <li><button onClick={() => navigate('/', {state : 'aa'})}>Go Root2</button></li>
            </ul>
        </div>
    );
}

export default Product;