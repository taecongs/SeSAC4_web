// View를 보여주는 건 컨트롤러만 가능하다.
// module.exports = get_user 랑 동일하다.
// 아래 내용을 쉽게 정의 한 방식이다.
exports.get_user = (req, res) => {
    res.send('Get user');
}

exports.a = (req, res) => {
    
}

exports.get_receive = (req, res) => {
    console.log( req );
    console.log( req.query );
    res.render("receive", req.query)
}


exports.index = (req, res) => {
    res.render('index.ejs');
}





/*
function get_user(){

}

function a(){

}

module.exports = {
    get_user,
    a
}
*/