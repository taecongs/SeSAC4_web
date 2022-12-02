package sesac.spring.study.sesacspringstudy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import sesac.spring.study.sesacspringstudy.domain.Board;
import sesac.spring.study.sesacspringstudy.dto.BoardDTO;
import sesac.spring.study.sesacspringstudy.service.BoardService;

import java.util.List;

@Controller
public class BoardContoller {
    private static BoardService boardService = new BoardService();

    @GetMapping("board-write")
    public String getBoardWrite(){
        return "board-write";
    }
    @PostMapping("board-write")
    public String postBoardWrite(BoardDTO boardDTO) {
        // boardDTO = { name: d, content: d }
        Board board = new Board();
        board.setName(boardDTO.getName());
        board.setContent(boardDTO.getContent());
        // board = { name: d, content: d, ID: X }
        boardService.write(board);
        // -> repository에 있는 map에 전달받은 name, content 로 board가 저장되었다.

        return "redirect:/board-view";
    }

    @GetMapping("board-view")
    public String getBoardView(Model model){
        List<Board> result = boardService.findBoards();
        model.addAttribute("list", result);
        return "board-view";
    }

}
