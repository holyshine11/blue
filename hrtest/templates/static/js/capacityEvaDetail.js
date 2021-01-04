// HR capacityEvaDetail.js
$(document).ready(function(){ 

    // popUp_table [$checkedBox : "input", $userId : "아이디", $userName : "이름", $position : "직책", $Duties : "직무", $team : "소속팀", $userfunction : "직무내용"]
    let $popUp_Table = new Array();
    let $html = "";
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo1' id='userNo'></td>", $userId : "bluewave01", $userName : "일길동", $position : "사원", $Duties : "사원", $team : "개발팀", $userfunction : "웹디자인,퍼블리싱"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo2' id='userNo'></td>", $userId : "bluewave02", $userName : "이길동", $position : "주임", $Duties : "대리", $team : "기획팀", $userfunction : "웹개발,앱개발"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo3' id='userNo'></td>", $userId : "bluewave03", $userName : "삼길동", $position : "대리", $Duties : "과장", $team : "경영팀", $userfunction : "기획 및 영업"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo4' id='userNo'></td>", $userId : "bluewave04", $userName : "사길동", $position : "과장", $Duties : "차장", $team : "디자인팀", $userfunction : "웹디자인, 앱디자인"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo5' id='userNo'></td>", $userId : "bluewave05", $userName : "오길동", $position : "치징", $Duties : "차장", $team : "경영팀", $userfunction : "기획 및 영업"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo6' id='userNo'></td>", $userId : "bluewave06", $userName : "육길동", $position : "부장", $Duties : "부장", $team : "기획팀", $userfunction : "웹개발, 앱개발"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo7' id='userNo'></td>", $userId : "bluewave07", $userName : "칠길동", $position : "사원", $Duties : "대리", $team : "개발팀", $userfunction : "웹디자인,퍼블리싱"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo8' id='userNo'></td>", $userId : "bluewave08", $userName : "필길동", $position : "대리", $Duties : "대리", $team : "디자인팀", $userfunction : "웹디자인, 앱디자인"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo9' id='userNo'></td>", $userId : "bluewave09", $userName : "구길동", $position : "차장", $Duties : "차장", $team : "경영팀", $userfunction : "기획 및 영업"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo10' id='userNo'></td>", $userId : "bluewave10", $userName : "십길동", $position : "과장", $Duties : "차장", $team : "디자인팀", $userfunction : "웹디자인,퍼블리싱"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo1' id='userNo'></td>", $userId : "bluewave11", $userName : "일길동", $position : "사원", $Duties : "사원", $team : "개발팀", $userfunction : "웹디자인,퍼블리싱"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo2' id='userNo'></td>", $userId : "bluewave12", $userName : "이길동", $position : "주임", $Duties : "대리", $team : "기획팀", $userfunction : "웹개발,앱개발"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo3' id='userNo'></td>", $userId : "bluewave13", $userName : "삼길동", $position : "대리", $Duties : "과장", $team : "경영팀", $userfunction : "기획 및 영업"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo4' id='userNo'></td>", $userId : "bluewave14", $userName : "사길동", $position : "과장", $Duties : "차장", $team : "디자인팀", $userfunction : "웹디자인, 앱디자인"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo5' id='userNo'></td>", $userId : "bluewave15", $userName : "오길동", $position : "치징", $Duties : "차장", $team : "경영팀", $userfunction : "기획 및 영업"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo6' id='userNo'></td>", $userId : "bluewave16", $userName : "육길동", $position : "부장", $Duties : "부장", $team : "기획팀", $userfunction : "웹개발, 앱개발"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo7' id='userNo'></td>", $userId : "bluewave17", $userName : "칠길동", $position : "사원", $Duties : "대리", $team : "개발팀", $userfunction : "웹디자인,퍼블리싱"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo8' id='userNo'></td>", $userId : "bluewave18", $userName : "필길동", $position : "대리", $Duties : "대리", $team : "디자인팀", $userfunction : "웹디자인, 앱디자인"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo9' id='userNo'></td>", $userId : "bluewave19", $userName : "구길동", $position : "차장", $Duties : "차장", $team : "경영팀", $userfunction : "기획 및 영업"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo10' id='userNo'></td>", $userId : "bluewave20", $userName : "십길동", $position : "과장", $Duties : "차장", $team : "디자인팀", $userfunction : "웹디자인,퍼블리싱"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo1' id='userNo'></td>", $userId : "bluewave01", $userName : "일길동", $position : "사원", $Duties : "사원", $team : "개발팀", $userfunction : "웹디자인,퍼블리싱"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo2' id='userNo'></td>", $userId : "bluewave02", $userName : "이길동", $position : "주임", $Duties : "대리", $team : "기획팀", $userfunction : "웹개발,앱개발"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo3' id='userNo'></td>", $userId : "bluewave03", $userName : "삼길동", $position : "대리", $Duties : "과장", $team : "경영팀", $userfunction : "기획 및 영업"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo4' id='userNo'></td>", $userId : "bluewave04", $userName : "사길동", $position : "과장", $Duties : "차장", $team : "디자인팀", $userfunction : "웹디자인, 앱디자인"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo5' id='userNo'></td>", $userId : "bluewave05", $userName : "오길동", $position : "치징", $Duties : "차장", $team : "경영팀", $userfunction : "기획 및 영업"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo6' id='userNo'></td>", $userId : "bluewave06", $userName : "육길동", $position : "부장", $Duties : "부장", $team : "기획팀", $userfunction : "웹개발, 앱개발"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo7' id='userNo'></td>", $userId : "bluewave07", $userName : "칠길동", $position : "사원", $Duties : "대리", $team : "개발팀", $userfunction : "웹디자인,퍼블리싱"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo8' id='userNo'></td>", $userId : "bluewave08", $userName : "필길동", $position : "대리", $Duties : "대리", $team : "디자인팀", $userfunction : "웹디자인, 앱디자인"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo9' id='userNo'></td>", $userId : "bluewave09", $userName : "구길동", $position : "차장", $Duties : "차장", $team : "경영팀", $userfunction : "기획 및 영업"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo10' id='userNo'></td>", $userId : "bluewave10", $userName : "십길동", $position : "과장", $Duties : "차장", $team : "디자인팀", $userfunction : "웹디자인,퍼블리싱"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo1' id='userNo'></td>", $userId : "bluewave11", $userName : "일길동", $position : "사원", $Duties : "사원", $team : "개발팀", $userfunction : "웹디자인,퍼블리싱"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo2' id='userNo'></td>", $userId : "bluewave12", $userName : "이길동", $position : "주임", $Duties : "대리", $team : "기획팀", $userfunction : "웹개발,앱개발"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo3' id='userNo'></td>", $userId : "bluewave13", $userName : "삼길동", $position : "대리", $Duties : "과장", $team : "경영팀", $userfunction : "기획 및 영업"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo4' id='userNo'></td>", $userId : "bluewave14", $userName : "사길동", $position : "과장", $Duties : "차장", $team : "디자인팀", $userfunction : "웹디자인, 앱디자인"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo5' id='userNo'></td>", $userId : "bluewave15", $userName : "오길동", $position : "치징", $Duties : "차장", $team : "경영팀", $userfunction : "기획 및 영업"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo6' id='userNo'></td>", $userId : "bluewave16", $userName : "육길동", $position : "부장", $Duties : "부장", $team : "기획팀", $userfunction : "웹개발, 앱개발"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo7' id='userNo'></td>", $userId : "bluewave17", $userName : "칠길동", $position : "사원", $Duties : "대리", $team : "개발팀", $userfunction : "웹디자인,퍼블리싱"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo8' id='userNo'></td>", $userId : "bluewave18", $userName : "필길동", $position : "대리", $Duties : "대리", $team : "디자인팀", $userfunction : "웹디자인, 앱디자인"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo9' id='userNo'></td>", $userId : "bluewave19", $userName : "구길동", $position : "차장", $Duties : "차장", $team : "경영팀", $userfunction : "기획 및 영업"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo10' id='userNo'></td>", $userId : "bluewave20", $userName : "십길동", $position : "과장", $Duties : "차장", $team : "디자인팀", $userfunction : "웹디자인,퍼블리싱"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo1' id='userNo'></td>", $userId : "bluewave01", $userName : "일길동", $position : "사원", $Duties : "사원", $team : "개발팀", $userfunction : "웹디자인,퍼블리싱"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo2' id='userNo'></td>", $userId : "bluewave02", $userName : "이길동", $position : "주임", $Duties : "대리", $team : "기획팀", $userfunction : "웹개발,앱개발"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo3' id='userNo'></td>", $userId : "bluewave03", $userName : "삼길동", $position : "대리", $Duties : "과장", $team : "경영팀", $userfunction : "기획 및 영업"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo4' id='userNo'></td>", $userId : "bluewave04", $userName : "사길동", $position : "과장", $Duties : "차장", $team : "디자인팀", $userfunction : "웹디자인, 앱디자인"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo5' id='userNo'></td>", $userId : "bluewave05", $userName : "오길동", $position : "치징", $Duties : "차장", $team : "경영팀", $userfunction : "기획 및 영업"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo6' id='userNo'></td>", $userId : "bluewave06", $userName : "육길동", $position : "부장", $Duties : "부장", $team : "기획팀", $userfunction : "웹개발, 앱개발"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo7' id='userNo'></td>", $userId : "bluewave07", $userName : "칠길동", $position : "사원", $Duties : "대리", $team : "개발팀", $userfunction : "웹디자인,퍼블리싱"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo8' id='userNo'></td>", $userId : "bluewave08", $userName : "필길동", $position : "대리", $Duties : "대리", $team : "디자인팀", $userfunction : "웹디자인, 앱디자인"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo9' id='userNo'></td>", $userId : "bluewave09", $userName : "구길동", $position : "차장", $Duties : "차장", $team : "경영팀", $userfunction : "기획 및 영업"});
    $popUp_Table.push({$checkedBox : "<input type='checkbox' name='userNo10' id='userNo'></td>", $userId : "bluewave10", $userName : "십길동", $position : "과장", $Duties : "차장", $team : "디자인팀", $userfunction : "웹디자인,퍼블리싱"});

    function popUptable_des(){      
        for(key in $popUp_Table){    
            $html += "<tr class='trBottom'>";        
            $html += "<td class='thHeight'>"+$popUp_Table[key].$checkedBox+"</td>";   
            $html += "<td class='thHeight'>"+$popUp_Table[key].$userId+"</td>";   
            $html += "<td class='thHeight'>"+$popUp_Table[key].$userName+"</td>";   
            $html += "<td class='thHeight'>"+$popUp_Table[key].$position+"</td>";   
            $html += "<td class='thHeight'>"+$popUp_Table[key].$Duties+"</td>";   
            $html += "<td class='thHeight'>"+$popUp_Table[key].$team+"</td>";   
            $html += "<td class='thHeight'>"+$popUp_Table[key].$userfunction+"</td>";   
            $html += "</tr>";             
        }         
        $("#popUp_tb").empty();
        $("#popUp_tb").append($html);
    };
    popUptable_des();       

    // saveBtn
    let $inputTemp = "";
    let $userId = "";
    let $userName = "";
    let $position = "";
    let $Duties = "";
    let $team = "";
    let $userfunction = "";

    $(".saveBtn").click(function(){      
      
        // $("#popUp_tb input:checked").each(function(){
		// 	$inputTemp = $(this).parents().parents().html();
        //     console.log($inputTemp);
        //     $(".removeUser").append($inputTemp);
        // });       

        // return false;

    }); 

    // DataTables Default -- lanuage option
    var lang_kor = {
    "decimal" : "",
    "emptyTable" : "데이터가 없습니다.",
    "info" : "_START_ - _END_ (총 _TOTAL_ 명)",
    "infoEmpty" : "0명",
    "infoFiltered" : "(전체 _MAX_ 명 중 검색결과)",
    "infoPostFix" : "",
    "thousands" : ",",
    "lengthMenu" : "_MENU_ 개씩 보기",
    "loadingRecords" : "로딩중...",
    "processing" : "처리중...",
    "search" : "검색 : ",
    "zeroRecords" : "검색된 데이터가 없습니다.",
    "paginate" : {
        "first" : "첫 페이지",
        "last" : "마지막 페이지",
        "next" : "다음",
        "previous" : "이전"
    },
    "aria" : {
        "sortAscending" : " :  오름차순 정렬",
        "sortDescending" : " :  내림차순 정렬"
    }};
    
    $('#addBtnPopUpTb').DataTable({
        "scrollY": "500px",
        "scrollCollapse": true,
        "paging": false,
        "filter" : false,
        language : lang_kor
    });

    // popup
    var popupX = (document.body.offsetWidth / 2) - (600 / 2);
    var popupY= (window.screen.height / 2) - (700 / 2);

    function addBtnPopUp(){
        window.open("addBtnPop.html", "평가 대상자 추가", 'status=no, height=600, width=800, left='+ popupX + ', top='+ popupY);
    }

    // addBtn popUp (부서장 코멘트)
    $('.addBtn').on('click', function () {
        addBtnPopUp();
    });
  
    $('.cancelBtn').on('click', function () {
        window.close("addBtnPop.html");
    });    



});

