// capacityAnalysisDetail.js
$(document).ready(function(){

    // capacityAnalysis Table [$no : "01", $userName : "이름", $position : "직급", $Duties : "직책", $tatalSc : "종합평가", $common : "공통역량", $DutiesSc : "직무역량", $leaderShip : "리더십", $comment : "부서장코멘트"]
    let $capacityAnalysis_Table = new Array();
    let $html = "";
    $capacityAnalysis_Table.push({$no : "01", $userName : "홍길동1", $position : "과장", $Duties : "차장", $tatalSc : "A", $common : "B", $DutiesSc : "C", $leaderShip : "D", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "02", $userName : "홍길동2", $position : "사원", $Duties : "과장", $tatalSc : "B", $common : "C", $DutiesSc : "D", $leaderShip : "A", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "03", $userName : "홍길동3", $position : "대리", $Duties : "대리", $tatalSc : "C", $common : "D", $DutiesSc : "E", $leaderShip : "B", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "04", $userName : "홍길동4", $position : "차장", $Duties : "사원", $tatalSc : "D", $common : "E", $DutiesSc : "A", $leaderShip : "C", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "05", $userName : "홍길동5", $position : "부장", $Duties : "차장", $tatalSc : "E", $common : "A", $DutiesSc : "B", $leaderShip : "D", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "06", $userName : "홍길동6", $position : "과장", $Duties : "대리", $tatalSc : "A", $common : "B", $DutiesSc : "C", $leaderShip : "A", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "07", $userName : "홍길동7", $position : "과장", $Duties : "사원", $tatalSc : "B", $common : "C", $DutiesSc : "D", $leaderShip : "B", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "08", $userName : "홍길동8", $position : "과장", $Duties : "과장", $tatalSc : "C", $common : "D", $DutiesSc : "E", $leaderShip : "C", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "09", $userName : "홍길동9", $position : "사원", $Duties : "사원", $tatalSc : "D", $common : "E", $DutiesSc : "A", $leaderShip : "D", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "10", $userName : "홍길동10", $position : "대리", $Duties : "사원", $tatalSc : "E", $common : "A", $DutiesSc : "B", $leaderShip : "A", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "11", $userName : "홍길동11", $position : "과장", $Duties : "대리", $tatalSc : "A", $common : "B", $DutiesSc : "C", $leaderShip : "D", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "12", $userName : "홍길동12", $position : "부장", $Duties : "사원", $tatalSc : "B", $common : "C", $DutiesSc : "D", $leaderShip : "A", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "13", $userName : "홍길동13", $position : "차장", $Duties : "사원", $tatalSc : "C", $common : "D", $DutiesSc : "E", $leaderShip : "B", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "14", $userName : "홍길동14", $position : "과장", $Duties : "과장", $tatalSc : "D", $common : "E", $DutiesSc : "A", $leaderShip : "C", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "15", $userName : "홍길동15", $position : "사원", $Duties : "사원", $tatalSc : "E", $common : "A", $DutiesSc : "B", $leaderShip : "D", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "16", $userName : "홍길동16", $position : "과장", $Duties : "사원", $tatalSc : "A", $common : "B", $DutiesSc : "C", $leaderShip : "A", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "17", $userName : "홍길동17", $position : "차장", $Duties : "사원", $tatalSc : "B", $common : "C", $DutiesSc : "D", $leaderShip : "B", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "18", $userName : "홍길동18", $position : "과장", $Duties : "대리", $tatalSc : "C", $common : "D", $DutiesSc : "E", $leaderShip : "C", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "19", $userName : "홍길동19", $position : "과장", $Duties : "차장", $tatalSc : "D", $common : "E", $DutiesSc : "A", $leaderShip : "D", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "20", $userName : "홍길동20", $position : "과장", $Duties : "사원", $tatalSc : "E", $common : "A", $DutiesSc : "B", $leaderShip : "A", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "21", $userName : "홍길동21", $position : "대리", $Duties : "차장", $tatalSc : "A", $common : "B", $DutiesSc : "C", $leaderShip : "D", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "22", $userName : "홍길동22", $position : "과장", $Duties : "과장", $tatalSc : "B", $common : "C", $DutiesSc : "D", $leaderShip : "A", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "23", $userName : "홍길동23", $position : "과장", $Duties : "사원", $tatalSc : "C", $common : "D", $DutiesSc : "E", $leaderShip : "B", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "24", $userName : "홍길동24", $position : "과장", $Duties : "대리", $tatalSc : "D", $common : "E", $DutiesSc : "A", $leaderShip : "C", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "25", $userName : "홍길동25", $position : "과장", $Duties : "사원", $tatalSc : "E", $common : "A", $DutiesSc : "B", $leaderShip : "D", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "26", $userName : "홍길동26", $position : "사원", $Duties : "사원", $tatalSc : "A", $common : "B", $DutiesSc : "C", $leaderShip : "A", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "27", $userName : "홍길동27", $position : "과장", $Duties : "사원", $tatalSc : "B", $common : "C", $DutiesSc : "D", $leaderShip : "B", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "28", $userName : "홍길동28", $position : "차장", $Duties : "사원", $tatalSc : "C", $common : "D", $DutiesSc : "E", $leaderShip : "C", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "29", $userName : "홍길동29", $position : "과장", $Duties : "사원", $tatalSc : "D", $common : "E", $DutiesSc : "A", $leaderShip : "D", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "30", $userName : "홍길동30", $position : "과장", $Duties : "대리", $tatalSc : "E", $common : "A", $DutiesSc : "B", $leaderShip : "A", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "31", $userName : "홍길동31", $position : "과장", $Duties : "차장", $tatalSc : "A", $common : "B", $DutiesSc : "C", $leaderShip : "D", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "32", $userName : "홍길동32", $position : "사원", $Duties : "사원", $tatalSc : "B", $common : "C", $DutiesSc : "D", $leaderShip : "A", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "33", $userName : "홍길동33", $position : "과장", $Duties : "차장", $tatalSc : "C", $common : "D", $DutiesSc : "E", $leaderShip : "B", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "34", $userName : "홍길동34", $position : "대리", $Duties : "대리", $tatalSc : "D", $common : "E", $DutiesSc : "A", $leaderShip : "C", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "35", $userName : "홍길동35", $position : "과장", $Duties : "사원", $tatalSc : "E", $common : "A", $DutiesSc : "B", $leaderShip : "D", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "36", $userName : "홍길동36", $position : "차장", $Duties : "사원", $tatalSc : "A", $common : "B", $DutiesSc : "C", $leaderShip : "A", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "37", $userName : "홍길동37", $position : "과장", $Duties : "차장", $tatalSc : "B", $common : "C", $DutiesSc : "D", $leaderShip : "B", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "38", $userName : "홍길동38", $position : "과장", $Duties : "과장", $tatalSc : "C", $common : "D", $DutiesSc : "E", $leaderShip : "C", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "39", $userName : "홍길동39", $position : "대리", $Duties : "차장", $tatalSc : "D", $common : "E", $DutiesSc : "A", $leaderShip : "D", $comment : "등록/수정"});
    $capacityAnalysis_Table.push({$no : "40", $userName : "홍길동40", $position : "과장", $Duties : "사원", $tatalSc : "E", $common : "A", $DutiesSc : "B", $leaderShip : "A", $comment : "등록/수정"});

    function capacityAnalysis_des(){      
        for(key in $capacityAnalysis_Table){    
            $html += "<tr class='trBottom'>";        
            $html += "<td class='thHeight'>"+$capacityAnalysis_Table[key].$no+"</td>";
            $html += "<td class='thHeight'>"+$capacityAnalysis_Table[key].$userName+"</td>";
            $html += "<td class='thHeight'>"+$capacityAnalysis_Table[key].$position+"</td>";
            $html += "<td class='thHeight'>"+$capacityAnalysis_Table[key].$Duties+"</td>";
            $html += "<td class='thHeight border'>"+$capacityAnalysis_Table[key].$tatalSc+"</td>";
            $html += "<td class='thHeight'>"+$capacityAnalysis_Table[key].$common+"</td>";
            $html += "<td class='thHeight'>"+$capacityAnalysis_Table[key].$DutiesSc+"</td>";
            $html += "<td class='thHeight'>"+$capacityAnalysis_Table[key].$leaderShip+"</td>";
            $html += "<td class='thHeight checking'>"+$capacityAnalysis_Table[key].$comment+"</td>";
            $html += "</tr>";             
        }         
        $("#capacityAnalysisTbody").empty();
        $("#capacityAnalysisTbody").append($html);
    };
    capacityAnalysis_des();

    // popup
    var popupX = (document.body.offsetWidth / 2) - (600 / 2);
    var popupY= (window.screen.height / 2) - (700 / 2);

    function commentPopUp(){
        window.open("leaderAddBtnPop.html", "부서장 코멘트 팝업", 'status=no, height=600, width=800, left='+ popupX + ', top='+ popupY);
    }

    // addBtn popUp (부서장 코멘트)
    $('#capacityAnalysisTbody .checking').on('click', function () {        
        commentPopUp();
    });   
    
    $('.cancelBtn').on('click', function () {
        window.close("leaderAddBtnPop.html");
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

    // DataTables Default 
    $('#capacityAnalysisListTb').DataTable({
        language : lang_kor
    });    
   
});
