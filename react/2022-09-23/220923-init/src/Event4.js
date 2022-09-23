
import React, { useState } from "react";

const Event4 = () => {
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");

    // e.target.name 대신 onChange 함수를 두 개 생성
    const onChangeUsername = (e) => setUsername(e.target.value);
    const onChangeMessage = (e) => setMessage(e.target.value);

    const onClick = () => {
        alert(username + ": " + message);
        setUsername("");
        setMessage("");
    };

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 핸들링 - 4(함수형)</h1>

            <input
                type="text"
                name="username"
                placeholder="사용자 이름"
                value={username}
                onChange={onChangeUsername}
            />

            <input
                type="text"
                name="message"
                placeholder="이곳에 입력해보세요."
                value={message}
                onChange={onChangeMessage}
                onKeyPress={onKeyPress}
            />

            <button onClick={onClick}>클릭</button>
        </div>
    );
}

export default Event4;