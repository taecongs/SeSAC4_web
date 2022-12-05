package sesac.spring.study.sesacspringstudy.repository;

import sesac.spring.study.sesacspringstudy.domain.Board;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MemoryRepository implements BoardRepository {
    private static Map<Integer, Board> store = new HashMap<>();
    // { key: value, key: value }
    private static int id = 0;

    @Override
    public Board save(Board board) {
        // board = { name: d, content: d, ID: X }
        // board 값은 이름과 내용이 적혀 왔다.
        // 추가하는 코드
        board.setID(++id);
        // board = { name: d, content: d, ID: 1 }
        store.put(board.getID(), board);
        return board;
        // obj = {}
        // obj['string'] = "abc";
    }

    @Override
    public List<Board> findAll() {
        // 찾는 코드
        ArrayList<Board> result = new ArrayList<>(store.values());
        // Map(stroe) 에서 value들 ( = 값들을 ) 모두 찾고 ArrayList로 만든다.
        return result;
    }
}
