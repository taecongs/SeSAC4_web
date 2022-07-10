var header_offset;
var detailVisible=false;
var twinsTeamCode = 'LG'; //트윈스팀코드
var latestGame = 0; //최근경기 인덱스
var currGame = 0; //헤더 상단 게임정보 인덱스
var todayGame = 0;
var latestSeasonCode;
var gameInfoDs; //최근2개년도 게임
var gameInfoDsAll; //전체 게임
var tags; //선수 검색정보
var playerDispYn = false; //플레이어 영역 노출여부
var seasonStartFlag = false; //최근시즌 시작여부
var detailVisible=false;


function retrieveSeasonDate(){
	// ajax async false default setting
	$.ajaxSetup({
		async : false
	});

	//시즌정보조회
	//당해년도 시즌데이터 안나왔을때는 LENGTH = 0
	$.getJSON(getAjaxUrl("BR_RetrieveSeasonDateInfo", "", "OUT_DS"), function(result) {
		var OUT_DS = result.OUT_DS[0];
		todayStr = OUT_DS.CURR_DATE;
		latestSeasonCode = OUT_DS.GYEAR;
		prevSeasonCode = OUT_DS.PREV_GYEAR;
		/*
		 * header 게임일정영역 : 정규리그 시작일 -15, 종료일+15
		   메인 중앙 홈경기/선수성적 영역 : 정규리그 시작일-15, 종료일+15
		   내비게이션 game/stats : 정규리그 시작일 -15, 종료일+15
		 */
		if ( OUT_DS.START_SEASON_DATE != undefined && OUT_DS.START_SEASON_DATE != null ) {
			//가장 최근 시즌 스케쥴이 나왔을때
			//최근 스케쥴의 첫 게임과 마지막 게임 일자를 가지고 게임정보 노출 판단
			if ( OUT_DS.START_SEASON_DATE_M15 <= todayStr && todayStr <= OUT_DS.END_SEASON_DATE_P15 ) {
				//header, 내비게이션 노출 20161007 20161006 20170101
				$("#scoreBoard").show();
				$("#latestGameDiv").show();
				$("#latestRankDiv").hide();
				seasonStartFlag = true;
			} else {
				$("#scoreBoard").hide();
				$("#latestGameDiv").hide();
				$("#latestRankDiv").show();
			}

			if ( OUT_DS.START_SEASON_DATE_M15 <= todayStr && todayStr <= OUT_DS.END_SEASON_DATE_P15 ) {
				//메인 중앙 선수영역 노출
				playerDispYn = true;
			}
		} else {
			//올해 스케쥴 안나옴
			$("#scoreBoard").hide();
			$("#latestGameDiv").hide();
			$("#latestRankDiv").show();
		}

		//2021.02.17 위 조건 무시하고 무조건 노출되도록 요청
		$("#scoreBoard").show();
		$("#latestGameDiv").show();
		$("#latestRankDiv").hide();
		seasonStartFlag = true;
		playerDispYn = true;

		retrieveGameInfoHeader();
		retrieveLeaguePrevRankHeader();
	}).fail(function(jqxhr){
		var response = JSON.parse(jqxhr.responseText);
		alert( response.resultMessage );
		$('#apply_dialog').dialog("close");
	});
	// ajax async false default setting
	$.ajaxSetup({
		async : true
	});
}

function retrieveGameInfoHeader(){
	//헤더게임정보
	latestGame = 0;
	currGame = 0;
	$.getJSON(getAjaxUrl("BR_RetrieveGame", "IN_DS", "OUT_DS")+"&IN_DS.GYEAR="+latestSeasonCode+","+prevSeasonCode, function(result) {
		for(var idx=result.OUT_DS.length-1; idx>=0; idx--){
			//오늘날짜에 경기가 있거나 바로 직전경기
			//latestGame 최근경기
			//currGame header 상단에 현재 게임
			if(result.OUT_DS[idx].GAMEDATE >= todayStr){
				latestGame = idx;
				currGame = idx;
				break;
			}
		}

		gameInfoDs = result.OUT_DS;
		var date = gameInfoDs[currGame].GYEAR + ". " + gameInfoDs[currGame].GMONTH + ". " +gameInfoDs[currGame].GDAY + " " + gameInfoDs[currGame].GWEEK;

		$("#gameDateHeader").text(date);
		$("#gameStatusHeader").text(gameInfoDs[currGame].GAME_STATUS);
		$("#seasonCodeHeader").val(gameInfoDs[currGame].GYEAR);
		$("#gmKeyHeader").val(gameInfoDs[currGame].GMKEY);

		if(currGame == 0 ){
			$("#rightGameBtn").hide();
		} else {
			$("#rightGameBtn").show();
		}

		retrieveGameScoreHeader();
		retrieveLeagueRankHeader();
		retrieveGameNavigation();
		retrieveTicketNavigation();
	}).fail(function(jqxhr){
		var response = JSON.parse(jqxhr.responseText);
		alert( response.resultMessage );
		$('#apply_dialog').dialog("close");
	});
}

function retrieveGameInfoHeaderAll(){
	latestGame = 0;
	currGame = 0;
	$.getJSON(getAjaxUrl("BR_RetrieveGame", "IN_DS", "OUT_DS")+"&IN_DS.DUMMY=", function(result) {
		for(var idx=result.OUT_DS.length-1; idx>=0; idx--){
			//오늘날짜에 경기가 있거나 바로 직전경기
			//latestGame 최근경기
			//currGame header 상단에 현재 게임
			if(result.OUT_DS[idx].GAMEDATE >= todayStr){
				latestGame = idx;
				currGame = idx;
				break;
			}
		}

		gameInfoDsAll = result.OUT_DS;
		retrieveGameInfoHeaderAllCallBack(gameInfoDsAll);
	}).fail(function(jqxhr){
		var response = JSON.parse(jqxhr.responseText);
		alert( response.resultMessage );
		$('#apply_dialog').dialog("close");
	});
}

//게임스코어 조회
function retrieveGameScoreHeader(){
	var gmKey = $("#gmKeyHeader").val();

	$.getJSON(getAjaxUrl("BR_RetrieveGameBoxScore","IN_DS", "OUT_DS,OUT_DS2") + "&IN_DS.GMKEY=" + gmKey, function(result) {
		var homeTeamScore = result.OUT_DS;
		var awayTeamScore = result.OUT_DS2;

		$("#homeTeamNameHeader").text(homeTeamScore[0].HOME_NAME);

		if ( homeTeamScore[0].GAME_STATUS == "경기중" ) {
			$("#gameStatusHeader").addClass('ongame');
			$("#homeTeamScoreHeader").text((homeTeamScore[0].RUN == undefined) ? "0" : homeTeamScore[0].RUN);
			$("#awayTeamScoreHeader").text((awayTeamScore[0].RUN == undefined) ? "0" : awayTeamScore[0].RUN);
		} else if ( homeTeamScore[0].GAME_STATUS == "" || homeTeamScore[0].GAME_STATUS == "경기전") {
			$("#gameStatusHeader").removeClass('ongame');
			$("#homeTeamScoreHeader").text((homeTeamScore[0].RUN == undefined) ? "-" : homeTeamScore[0].RUN);
			$("#awayTeamScoreHeader").text((awayTeamScore[0].RUN == undefined) ? "-" : awayTeamScore[0].RUN);
		} else {
			//종료
			$("#gameStatusHeader").removeClass('ongame');
			$("#homeTeamScoreHeader").text((homeTeamScore[0].RUN == undefined) ? "0" : homeTeamScore[0].RUN);
			$("#awayTeamScoreHeader").text((awayTeamScore[0].RUN == undefined) ? "0" : awayTeamScore[0].RUN);
		}

		$("#awayTeamNameHeader").text(homeTeamScore[0].VISIT_NAME);
		$("#stadiumNameHeader").text(homeTeamScore[0].STADIUM);
	}).fail(function(jqxhr){
		var response = JSON.parse(jqxhr.responseText);
		alert( response.resultMessage );
		$('#apply_dialog').dialog("close");
	});
}

//게임 정보 변경(화살표 클릭시)
function changeGameInfoHeader(info){
	if(info == "B"){
		//왼쪽화살표
		currGame++;
	}else if(info == "A"){
		//오른쪽화살표
		currGame--;
	}
	if(currGame == 0 ){
		$("#rightGameBtn").hide();
	} else {
		$("#rightGameBtn").show();
	}

	if(currGame <0 ){
		alert("이후 게임정보가 존재하지 않습니다.");
		currGame = 0;
		return;
	}

	var date = gameInfoDs[currGame].GYEAR + ". " + gameInfoDs[currGame].GMONTH + ". " +gameInfoDs[currGame].GDAY + " " + gameInfoDs[currGame].GWEEK;

	$("#gameDateHeader").text(date);
	$("#gameStatusHeader").text(gameInfoDs[currGame].GAME_STATUS);
	$("#seasonCodeHeader").val(gameInfoDs[currGame].GYEAR);
	$("#gmKeyHeader").val(gameInfoDs[currGame].GMKEY);

	retrieveGameScoreHeader();
}

//스코어 클릭시 게임박스 화면으로 이동
function moveGameBoxPage(){
	var gmKey = $("#gmKeyHeader").val();
	var linkUrl = "/service/html.ncd?view=/pc_twins/twins_game/twins_gamebox&GMKEY=" + gmKey;
	$(location).attr('href',linkUrl);
}

//랭킹조회
function retrieveLeagueRankHeader(){
	//최근 시즌을 조회
	$.getJSON(getAjaxUrl("BR_RetrieveTeamRank","IN_DS","OUT_DS1,OUT_DS2,OUT_DS3") +"&IN_DS.GYEAR=" + latestSeasonCode +"&IN_DS.T_ID=" + twinsTeamCode, function(result) {
		if ( result.OUT_DS1.length > 0 ) {
			$("#winHeader").text(result.OUT_DS1[0].WIN + "승");
			$("#loseHeader").text(result.OUT_DS1[0].LOSE + "패");
			$("#rankHeader").text(result.OUT_DS1[0].RANK);
		} else {
			//Default 0승 0패로 1위!!
			$("#winHeader").text("0승");
			$("#loseHeader").text("0패");
			$("#rankHeader").text("1");
		}

	}).fail(function(jqxhr){
		var response = JSON.parse(jqxhr.responseText);
		alert( response.resultMessage );
		$('#apply_dialog').dialog("close");
	});
}

//작년랭킹조회
function retrieveLeaguePrevRankHeader(){
	//작년 시즌을 조회
	$.getJSON(getAjaxUrl("BR_RetrieveTeamRank","IN_DS","OUT_DS1,OUT_DS2,OUT_DS3") +"&IN_DS.GYEAR=" + prevSeasonCode +"&IN_DS.T_ID=" + twinsTeamCode, function(result) {
		if ( result.OUT_DS1.length > 0 ) {
			$("#titleNavHeader").text(prevSeasonCode + " 시즌 팀순위");
			$("#winNavHeader").text(result.OUT_DS1[0].WIN + "승");
			$("#loseNavHeader").text(result.OUT_DS1[0].LOSE + "패");
			$("#rankNavHeader").text(result.OUT_DS1[0].RANK + "위");
			$("#wraNavHeader").text("("+result.OUT_DS1[0].WRA+")");
		}
	}).fail(function(jqxhr){
		var response = JSON.parse(jqxhr.responseText);
		alert( response.resultMessage );
		$('#apply_dialog').dialog("close");
	});
}

//인기선수검색
function retrieveTeamMemberPopular() {
	$.getJSON(getAjaxUrl("BR_RetrieveTeamMemberPopularList","IN_DS","OUT_DS") +"&IN_DS.USER_ID=" + sessionUserId, function(result) {
		var OUT_DS = result.OUT_DS;
		//본인이 좋아요 누른사람 우선, 좋아요 수 기준 3위까지표시
		/*<li>
			<div class="round_wrap">
				<img alt="" src="/images/player_01.png">
			</div>
			<p class="title">15 김종규</p>
			<p class="position">
				<span class="heart"></span>
				Center
			</p>
	    </li> */
		var popularHtml = "";
		for ( var idx = 0; idx < 3; idx++ ) {
			popularHtml += "<li onclick='goPlayerDetail(" + OUT_DS[idx].TTM_SEQ + ")'><div class='round_wrap'><img alt='' src='" + $("#popPlayerDownloadUrl").val() + OUT_DS[idx].TTM_SEQ + "'></div>";
			popularHtml += "<p class='title'>" + OUT_DS[idx].BACK_NUMBER + " " + OUT_DS[idx].NAME + "</p>";
			popularHtml += "<p class='position'>";
			if ( OUT_DS[idx].HEART_YN == "Y") {
				popularHtml += "<span class='heart'></span>";
			}
			popularHtml += OUT_DS[idx].POSITION_ENG_NAME + "</p></li>";
		}
		$("#popularPlayer").html(popularHtml);
	}).fail(function(jqxhr){
		var response = JSON.parse(jqxhr.responseText);
		alert( response.resultMessage );
		$('#apply_dialog').dialog("close");
	});
}

function retrieveWallpaperList(){
	/*
	 *  <dd>
			<img alt="2016. 11" src="/images/wallpaper/11_1.jpg">
		</dd>
		<dd>
			<img alt="2016. 11" src="/images/wallpaper/11_3.jpg">
		</dd>
		<dt class="txt_wrap">
			<p>2017. 04</p>
			<p>월페이퍼</p>
		</dt>
	 */
	$.getJSON(getAjaxUrl("BR_RetrieveWallpaperList","IN_DS","OUT_DS") +"&IN_DS.YEAR=" + todayStr.substring(0,4) + "&IN_DS.WALLPAPER_TYPE_CODE=TP2", function(result) {
		if ( result.OUT_DS.length > 0 ) {
			var year = result.OUT_DS[0].REG_YEAR;
			var month = result.OUT_DS[0].REG_MONTH < 10 ? "0" + result.OUT_DS[0].REG_MONTH : result.OUT_DS[0].REG_MONTH;
			var yearMonth = year + ". " + month;
			var popularHtml = "<dd><img alt='" + yearMonth + "' src='" + $("#downloadUrlWallPaper").val() + result.OUT_DS[0].FILE_ID + "&IN_DS.FILE_TYPE=" + result.OUT_DS[0].WALLPAPER_TYPE_CODE + "'></dd>";


			if ( result.OUT_DS.length > 1 ) {
				for( var inx=0; inx< result.OUT_DS.length;inx++){
					if( result.OUT_DS[0].WALLPAPER_NUM != result.OUT_DS[inx].WALLPAPER_NUM && result.OUT_DS[0].REG_MONTH == result.OUT_DS[inx].REG_MONTH ){
						//해당월에 사진 두개인 경우
						year = result.OUT_DS[inx].REG_YEAR;
						month = result.OUT_DS[inx].REG_MONTH < 10 ? "0" + result.OUT_DS[1].REG_MONTH : result.OUT_DS[inx].REG_MONTH;
						yearMonth = year + ". " + month;
						popularHtml += "<dd><img alt='" + yearMonth + "' src='" + $("#downloadUrlWallPaper").val() + result.OUT_DS[inx].FILE_ID + "&IN_DS.FILE_TYPE=" + result.OUT_DS[inx].WALLPAPER_TYPE_CODE + "'></dd>";
						break;
					}
				}
			}
			popularHtml += "<dt class='txt_wrap'><p>" + yearMonth + "</p>";
			popularHtml += "<p>월페이퍼</p></dt>";
			$("#wallPaperHeader").html(popularHtml);
		}
	}).fail(function(jqxhr){
		var response = JSON.parse(jqxhr.responseText);
		alert( response.resultMessage );
		$('#apply_dialog').dialog("close");
	});
}

function goPlayerDetail(ttmSeq) {
	var form = $('<form></form>');
	form.attr('action', "/service/html.ncd");
	form.attr('method', 'get');
	form.appendTo('body');

	var input = $('<input></input>');
	input.attr('name', 'view');
	input.val($("#playerDetailUrl").val());
	input.appendTo(form);

	input = $('<input></input>');
	input.attr('name', 'TTM_SEQ');
	input.val(stmSeq);
	input.appendTo(form);

	form.submit();
}

//게임 네비게이션 영역 표시
function retrieveGameNavigation(){
	/*
	 * <li>
			<span>10. 03. 월</span>
			<span class="place">창원</span>
			<span class="team">
				<img alt="" src="/images/lg_sakers.png">
			</span>
			<span>62:80</span>
			<span class="team">
				<img alt="" src="/images/incheon_ele.png">
			</span>
			<span class="vic lg_bg">승</span>
			<span>진행중</span>
			<span class="reserve">티켓 예매</span>
		</li>
	 */
	var gameHtml;
	var gmKey;
	//3경기까지만
	for ( var idx = latestGame; idx > latestGame-3; idx-- ){
		if ( idx < 0 ) {
			break;
		}
		gameHtml = "";
		gmKey = gameInfoDs[idx].GMKEY;

		var homeTeamScore = gameInfoDs[idx].HSCORE;
		var awayTeamScore = gameInfoDs[idx].VSCORE;
		var date = gameInfoDs[idx].GMONTH + ". " +gameInfoDs[idx].GDAY + " " + gameInfoDs[idx].GWEEK;

			gameHtml += "<li><span>" + date + "</span>";
		gameHtml += "<span class='place'>" + gameInfoDs[idx].STADIUM + "</span>";
		gameHtml += "<span class='team'><img alt='" + gameInfoDs[idx].VISIT_TEAM + "' src='" + $("#downloadTeamUrl").val() + gameInfoDs[idx].VISIT_TEAM + "'></span>";
		if (  gameInfoDs[idx].GAME_STATUS == "경기전" ||  gameInfoDs[idx].GAME_STATUS == "경기 취소" ) {
				gameHtml += "<span> vs </span>";
			} else {
			gameHtml += "<span>" + ((awayTeamScore == undefined) ? "0" : awayTeamScore)  + ":" + ((homeTeamScore == undefined) ? "0" : homeTeamScore) + "</span>";
			}
		gameHtml += "<span class='team'><img alt='" + gameInfoDs[idx].HOME_TEAM + "' src='" + $("#downloadTeamUrl").val() + gameInfoDs[idx].HOME_TEAM + "'></span>";
			//경기 진행여부
		if ( gameInfoDs[idx].GAME_STATUS == "경기중" ) {
				gameHtml += "<span>진행중</span>";
		} else if ( gameInfoDs[idx].GAME_STATUS == "종료" ) {
				//종료된 경기 일 경우 승리 여부
			if ( gameInfoDs[idx].HOME_KEY == twinsTeamCode && homeTeamScore > awayTeamScore ) {
					gameHtml += "<span class='vic lg_bg'>승</span>";
			} else if ( gameInfoDs[idx].VISIT_KEY == twinsTeamCode && awayTeamScore > homeTeamScore ) {
					gameHtml += "<span class='vic lg_bg'>승</span>";
				}

			} else if ( gameInfoDs[idx].game_status_name == "경기전" ) {
				//gameHtml += "<span class='reserve' onclick='javascript:common.goToReserve();'>티켓 예매</span></li>";
			}

			$("#latestGame").append(gameHtml);
	}
}

//티켓네비게이션 영역
function retrieveTicketNavigation(){
	/*
	 * <li>
			<span>
				<img alt="" src="/images/incheon_ele.png">
			</span>
			<span>
				<p class="date">01금</p>
				<p class="vs">vs 인천전자랜드</p>
				<p class="reserve">티켓 예매</p>
			</span>
		</li>
	 */
	var ticketHtml = "";
	var homeHtml = "";
	var cnt = 0;
	//오늘경기포함 최근경기 다음 경기부터 3경기
	if ( latestGame == 0 ) {
		//잔여경기 없음
		$("#homeMatch").html("<li class='nodata'><p>예매 가능한 홈경기가 없습니다.</p></li>");
		return;
	}
	for ( var idx = latestGame; idx > 0; idx-- ){
		if ( idx < 0 || cnt == 3 ) {
			break;
		}
		if (gameInfoDs[idx].HOME_KEY == twinsTeamCode) {
//			alert(gameInfoDs[idx].OPENDAY);
//			alert(gameInfoDs[idx].OPENMIN);
//			alert(gameInfoDs[idx].GYEAR + gameInfoDs[idx].GMONTH +gameInfoDs[idx].GDAY);
//			alert(gameInfoDs[idx].GTIME);

			if (gameInfoDs[idx].OPENDAY <=0 && gameInfoDs[idx].OPENMIN > 30 && gameInfoDs[idx].PROD_CD && gameInfoDs[idx].RSRV_ABLE_DT) {

				//홈경기
				var date = gameInfoDs[idx].GDAY + " " + gameInfoDs[idx].GWEEK;
				ticketHtml += "<li><span><img alt='" + gameInfoDs[idx].VISIT_NAME + "' src='" + $("#downloadTeamUrl").val() + gameInfoDs[idx].VISIT_TEAM + "'></span>";
				ticketHtml += "<span><p class='date'>" + date + "</p>";
				ticketHtml += "<p class='vs'>vs " + gameInfoDs[idx].VISIT_NAME + "</p>";
				ticketHtml += "<p class='reserve' onclick='javascript:ticket.goToReserveByProdCd(\""+ gameInfoDs[idx].PROD_CD +"\")'>티켓 예매</p></span></li>";
				cnt++;

				if ( cnt == 1 ) {
					//홈첫번째 경기
					/*
					 * <li>
							<img alt="LG트윈스" src="/images/team_logo/img_bembr_lg.png">
							<p>LG트윈스</p>
						</li>
						<li class="vs">
							<p class="date">10월 1일</p>
							<p class="time">18:30</p>
							<p>잠실야구장</p>
						</li>
						<li>
							<img alt="롯데자이언츠" src="/images/team_logo/img_bembr_lotte.png">
							<p>롯데자이언츠</p>
						</li>
					 */

					homeHtml += "<li><img alt='" + gameInfoDs[idx].VISIT_NAME + "' src='" + $("#downloadTeamUrl").val() + gameInfoDs[idx].VISIT_TEAM + "'>";
					homeHtml += "<p>" + gameInfoDs[idx].VISIT_NAME + "</p></li>";
					homeHtml += "<li class='vs'><p class='date'>" + gameInfoDs[idx].GMONTH + "월 " + gameInfoDs[idx].GDAY + "일</p>";
					homeHtml += "<p class='time'>" + gameInfoDs[idx].GTIME + "</p>";
					homeHtml += "<p>" + gameInfoDs[idx].STADIUM + "</p></li>";
					homeHtml += "<li><img alt='" + gameInfoDs[idx].HOME_NAME + "' src='" + $("#downloadTeamUrl").val() + gameInfoDs[idx].HOME_TEAM + "'>";
					homeHtml += "<p>" + gameInfoDs[idx].HOME_NAME + "</p></li>";
					$("#homeMatch").html(homeHtml);

					$("#homeMatchTicket").attr("href", "javascript:common.goToReserve("+gameInfoDs[idx].GAMEDATE+");");
				}
			}
		}
	}
	if ( homeHtml == "" ){
		$("#homeMatch").html("<li class='nodata'><p>예매 가능한 홈경기가 없습니다.</p></li>");
	}
	$("#ticketNavi").html(ticketHtml);
}

function goMyInfo() {
	if (sessionUserId == "") {
		//회원가입
		var form = $('<form></form>');
		form.attr('action', "/service/html.ncd");
		form.attr('method', 'get');
		form.appendTo('body');

		var input = $('<input></input>');
		input.attr('name', 'view');
		input.val($("#loginUrl").val());
		input.appendTo(form);

		form.submit();
	} else {
		//마이페이지
		var form = $('<form></form>');
		form.attr('action', "/service/html.ncd");
		form.attr('method', 'get');
		form.appendTo('body');

		var input = $('<input></input>');
		input.attr('name', 'view');
		input.val("/pc_twins/mylgid/my_edit");
		input.appendTo(form);

		input = $('<input></input>');
		input.attr('name', 'baRq');
		input.val("IN_DS,SESSION_DS");
		input.appendTo(form);

		input = $('<input></input>');
		input.attr('name', 'baRs');
		input.val("OUT_DS");
		input.appendTo(form);

		input = $('<input></input>');
		input.attr('name', 'actID');
		input.val("actID");
		input.val("BR_RetrieveMyInforMLI");
		input.appendTo(form);

		input = $('<input></input>');
		input.attr('name', 'IN_DS.USER_ID');
		input.val($("#sessionUserId").val());
		input.appendTo(form);

		form.submit();
	}
}
