import React, {useParams, useNavigate} from 'react-router-dom';


const ViewPage = () => {
    const {id} = useParams();

    const navigate = useNavigate();

    return(
        <div>
            {id}

            <br />

            <button onClick={() => navigate(-1)}>뒤로가기</button>
        </div>
    );
}

export default ViewPage;