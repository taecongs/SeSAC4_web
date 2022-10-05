import {Link} from 'react-router-dom';

const MainRouter = () => {
    return (
        <div className='container'>
            <h1>
                <Link to='/'>ReactRouter 실습</Link>
            </h1>

            <span className='a_link'>
                {/* 여기서 /sesac은? path='student/:id' id 값에 저장된다. */}
                <Link to='student/sesac'>학생SeSAC</Link>
            </span>

            <span className='a_link'>

                {/* 여기서 /codingon은? path='student/:id' id 값에 저장된다. */}
                <Link to='student/codingon'>코딩온</Link>
            </span>

            <span className='a_link'>
                <Link to='student/new?name=sesac&key=id#codingon'>searchParams</Link>
            </span>

        </div>
    );
}

export default MainRouter;