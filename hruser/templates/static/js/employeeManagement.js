// employeeManagement.js
$(document).ready(function(){     
    
    // employeeInquiryListTb Table [$no : "테이블 list number", $userId : "아이디", $userName : "이름", $position : "직책", $duty : "직무", $team : "소속팀", $function : "직무역량", $status : "Y/N", $del : "삭제]
    let $evaluationDesign_tb = new Array();
    let $html = "";
    $evaluationDesign_tb.push({$no : "01", $userId : "bluewave1", $userName : "홍길동", $position : "사원1", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "02", $userId : "bluewave2", $userName : "홍길동2", $position : "사원2", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "03", $userId : "bluewave3", $userName : "홍길동3", $position : "대리", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "04", $userId : "bluewave4", $userName : "홍길동4", $position : "과장", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "05", $userId : "bluewave5", $userName : "홍길동5", $position : "차장", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "06", $userId : "bluewave6", $userName : "홍길동6", $position : "주임", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "07", $userId : "bluewave7", $userName : "홍길동7", $position : "부장", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "08", $userId : "bluewave8", $userName : "홍길동8", $position : "과장", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "09", $userId : "bluewave9", $userName : "홍길동9", $position : "대리2", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "10", $userId : "bluewave10", $userName : "홍길동10", $position : "사원4", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "11", $userId : "bluewave11", $userName : "홍길동1", $position : "사원1", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "12", $userId : "bluewave12", $userName : "홍길동2", $position : "사원2", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "13", $userId : "bluewave13", $userName : "홍길동3", $position : "대리", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "14", $userId : "bluewave14", $userName : "홍길동4", $position : "과장", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "15", $userId : "bluewave15", $userName : "홍길동5", $position : "차장", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "16", $userId : "bluewave16", $userName : "홍길동6", $position : "주임", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "17", $userId : "bluewave17", $userName : "홍길동7", $position : "부장", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "18", $userId : "bluewave18", $userName : "홍길동8", $position : "과장", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "19", $userId : "bluewave19", $userName : "홍길동9", $position : "대리2", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "20", $userId : "bluewave20", $userName : "홍길동10", $position : "사원4", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "21", $userId : "bluewave21", $userName : "홍길동1", $position : "사원1", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "22", $userId : "bluewave22", $userName : "홍길동2", $position : "사원2", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "23", $userId : "bluewave23", $userName : "홍길동3", $position : "대리", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "24", $userId : "bluewave24", $userName : "홍길동4", $position : "과장", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "25", $userId : "bluewave25", $userName : "홍길동5", $position : "차장", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "26", $userId : "bluewave26", $userName : "홍길동6", $position : "주임", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "27", $userId : "bluewave27", $userName : "홍길동7", $position : "부장", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "28", $userId : "bluewave28", $userName : "홍길동8", $position : "과장", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "29", $userId : "bluewave29", $userName : "홍길동9", $position : "대리2", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "30", $userId : "bluewave30", $userName : "홍길동10", $position : "사원4", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "31", $userId : "bluewave31", $userName : "홍길동1", $position : "사원1", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "32", $userId : "bluewave32", $userName : "홍길동2", $position : "사원2", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "33", $userId : "bluewave33", $userName : "홍길동3", $position : "대리", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "34", $userId : "bluewave34", $userName : "홍길동4", $position : "과장", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "35", $userId : "bluewave35", $userName : "홍길동5", $position : "차장", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "36", $userId : "bluewave36", $userName : "홍길동6", $position : "주임", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "37", $userId : "bluewave37", $userName : "홍길동7", $position : "부장", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "38", $userId : "bluewave38", $userName : "홍길동8", $position : "과장", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "39", $userId : "bluewave39", $userName : "홍길동9", $position : "대리2", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "40", $userId : "bluewave40", $userName : "홍길동10", $position : "사원4", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "41", $userId : "bluewave41", $userName : "홍길동1", $position : "사원1", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "42", $userId : "bluewave42", $userName : "홍길동2", $position : "사원2", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "43", $userId : "bluewave43", $userName : "홍길동3", $position : "대리", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "44", $userId : "bluewave44", $userName : "홍길동4", $position : "과장", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "45", $userId : "bluewave45", $userName : "홍길동5", $position : "차장", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "46", $userId : "bluewave46", $userName : "홍길동6", $position : "주임", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "47", $userId : "bluewave47", $userName : "홍길동7", $position : "부장", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "48", $userId : "bluewave48", $userName : "홍길동8", $position : "과장", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "49", $userId : "bluewave49", $userName : "홍길동9", $position : "대리2", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    $evaluationDesign_tb.push({$no : "50", $userId : "bluewave50", $userName : "홍길동10", $position : "사원4", $duty : "팀원", $team : "전략기획그룹", $function : "퍼블리셔", $status : "Y", $del : "삭제"});
    
    function evaluationDesign_des(){      
        for(key in $evaluationDesign_tb){    
            $html += "<tr class='trBottom'>";        
            $html += "<td class='thHeight'>"+$evaluationDesign_tb[key].$no+"</td>";
            $html += "<td class='thHeight'>"+$evaluationDesign_tb[key].$userId+"</td>";
            $html += "<td class='thHeight checking'>"+$evaluationDesign_tb[key].$userName+"</td>";
            $html += "<td class='thHeight'>"+$evaluationDesign_tb[key].$position+"</td>";
            $html += "<td class='thHeight'>"+$evaluationDesign_tb[key].$duty+"</td>";
            $html += "<td class='thHeight'>"+$evaluationDesign_tb[key].$team+"</td>";
            $html += "<td class='thHeight'>"+$evaluationDesign_tb[key].$function+"</td>";
            $html += "<td class='thHeight'>"+$evaluationDesign_tb[key].$status+"</td>";
            $html += "<td class='thHeight delPoint'>"+$evaluationDesign_tb[key].$del+"</td>";  
            $html += "</tr>";             
        }         
        $("#employeeInquiryListn_tb").empty();
        $("#employeeInquiryListn_tb").append($html);
    };
    evaluationDesign_des();
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

    // datetable   
    var table = $('#employeeInquiryListTb').DataTable({
        language : lang_kor
    });

    // 선택한 행 삭제 (11번째 tr 부터 삭제 안됨 - 수정)
    $('#employeeInquiryListTb tbody').on( 'click', 'tr', function (){
        if ($(this).hasClass('selected')){
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });

    $('.delPoint').click(function (){
        table.row('.selected').remove().draw(false);
    });   

    // popup
    var popupX = (document.body.offsetWidth / 2) - (600 / 2);
    var popupY= (window.screen.height / 2) - (600 / 2);

    function scorePopUp(){
        window.open("employeeAddPop.html", "사원등록팝업", 'status=no, height=500, width=600, left='+ popupX + ', top='+ popupY);
    }    

    $('.EmployeeBtn').on('click', function () {
        scorePopUp();
    });    

    $('.cancelBtn').on('click', function () {
        window.close("employeeAddPop.html");
    });    

 

});