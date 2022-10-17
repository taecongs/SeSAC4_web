import React, {Link} from 'react-router-dom';


const MainRouter = () => {
    return(
        <div>
            <span style={{margin : '0 10px 0 0'}}>
                <Link to='/'>Home</Link>
            </span>
            
                <Link to='student/sesac'>학생SeSAC</Link>
        </div>
    );
}

export default MainRouter;