// HR capacityEva.js (역량 평가)
$(document).ready(function(){

    // capacityEvaTbody Table [$no : "테이블 list number", $TeamName : "소속팀", $TitleArea : "제목", $DateArea : "기간", $status : "평가중/종료"]
    let $capacityEva_Table = new Array();
    let $html = "";
    $capacityEva_Table.push({$no : "01", $TeamName : "기획/영업팀1", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.1", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "평가중"});
    $capacityEva_Table.push({$no : "02", $TeamName : "미래기술그룹2", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.2", $DateArea : "2020-10-01 ~ 2020-10-04", $status : "종료"});
    $capacityEva_Table.push({$no : "03", $TeamName : "디자인팀3", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.3", $DateArea : "2020-10-01 ~ 2020-10-06", $status : "종료"});
    $capacityEva_Table.push({$no : "04", $TeamName : "경영/회계팀4", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.4", $DateArea : "2020-10-01 ~ 2020-10-08", $status : "종료"});
    $capacityEva_Table.push({$no : "05", $TeamName : "기획/영업팀5", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.5", $DateArea : "2020-10-01 ~ 2020-10-10", $status : "종료"});
    $capacityEva_Table.push({$no : "06", $TeamName : "미래기술그룹6", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.6", $DateArea : "2020-10-01 ~ 2020-10-12", $status : "종료"});
    $capacityEva_Table.push({$no : "07", $TeamName : "경영/회계팀7", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.7", $DateArea : "2020-10-01 ~ 2020-10-14", $status : "종료"});
    $capacityEva_Table.push({$no : "08", $TeamName : "디자인팀8", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.8", $DateArea : "2020-10-01 ~ 2020-10-16", $status : "종료"});
    $capacityEva_Table.push({$no : "09", $TeamName : "기획/영업팀9", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.9", $DateArea : "2020-10-01 ~ 2020-10-18", $status : "종료"});
    $capacityEva_Table.push({$no : "10", $TeamName : "미래기술그룹10", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.10", $DateArea : "2020-10-01 ~ 2020-10-20", $status : "종료"});
    $capacityEva_Table.push({$no : "11", $TeamName : "디자인팀11", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.10", $DateArea : "2020-10-01 ~ 2020-10-22", $status : "종료"});
    $capacityEva_Table.push({$no : "12", $TeamName : "기획/영업팀12", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.10", $DateArea : "2020-10-01 ~ 2020-10-24", $status : "종료"});
    $capacityEva_Table.push({$no : "13", $TeamName : "경영/회계팀13", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.10", $DateArea : "2020-10-01 ~ 2020-10-26", $status : "종료"});
    $capacityEva_Table.push({$no : "14", $TeamName : "디자인팀14", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.10", $DateArea : "2020-10-01 ~ 2020-10-28", $status : "종료"});
    $capacityEva_Table.push({$no : "15", $TeamName : "미래기술그룹15", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.10", $DateArea : "2020-10-01 ~ 2020-10-30", $status : "종료"});
    $capacityEva_Table.push({$no : "16", $TeamName : "기획/영업팀16", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.1", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "평가중"});
    $capacityEva_Table.push({$no : "17", $TeamName : "미래기술그룹17", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.2", $DateArea : "2020-10-01 ~ 2020-10-04", $status : "종료"});
    $capacityEva_Table.push({$no : "18", $TeamName : "디자인팀18", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.3", $DateArea : "2020-10-01 ~ 2020-10-06", $status : "종료"});
    $capacityEva_Table.push({$no : "19", $TeamName : "경영/회계팀19", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.4", $DateArea : "2020-10-01 ~ 2020-10-08", $status : "종료"});
    $capacityEva_Table.push({$no : "20", $TeamName : "기획/영업팀20", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.5", $DateArea : "2020-10-01 ~ 2020-10-10", $status : "종료"});
    $capacityEva_Table.push({$no : "21", $TeamName : "미래기술그룹21", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.6", $DateArea : "2020-10-01 ~ 2020-10-12", $status : "종료"});
    $capacityEva_Table.push({$no : "22", $TeamName : "경영/회계22", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.7", $DateArea : "2020-10-01 ~ 2020-10-14", $status : "종료"});
    $capacityEva_Table.push({$no : "23", $TeamName : "디자인팀23", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.8", $DateArea : "2020-10-01 ~ 2020-10-16", $status : "종료"});
    $capacityEva_Table.push({$no : "24", $TeamName : "기획/영업팀24", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.9", $DateArea : "2020-10-01 ~ 2020-10-18", $status : "종료"});
    $capacityEva_Table.push({$no : "25", $TeamName : "미래기술그룹25", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.10", $DateArea : "2020-10-01 ~ 2020-10-20", $status : "종료"});
    $capacityEva_Table.push({$no : "26", $TeamName : "디자인팀26", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.10", $DateArea : "2020-10-01 ~ 2020-10-22", $status : "종료"});
    $capacityEva_Table.push({$no : "27", $TeamName : "기획/영업팀27", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.10", $DateArea : "2020-10-01 ~ 2020-10-24", $status : "종료"});
    $capacityEva_Table.push({$no : "28", $TeamName : "경영/회계팀28", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.10", $DateArea : "2020-10-01 ~ 2020-10-26", $status : "종료"});
    $capacityEva_Table.push({$no : "29", $TeamName : "디자인팀29", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.10", $DateArea : "2020-10-01 ~ 2020-10-28", $status : "종료"});
    $capacityEva_Table.push({$no : "30", $TeamName : "미래기술그룹30", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.10", $DateArea : "2020-10-01 ~ 2020-10-30", $status : "종료"});
    $capacityEva_Table.push({$no : "31", $TeamName : "기획/영업팀31", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.1", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "평가중"});
    $capacityEva_Table.push({$no : "32", $TeamName : "미래기술그룹32", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.2", $DateArea : "2020-10-01 ~ 2020-10-04", $status : "종료"});
    $capacityEva_Table.push({$no : "33", $TeamName : "디자인팀33", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.3", $DateArea : "2020-10-01 ~ 2020-10-06", $status : "종료"});
    $capacityEva_Table.push({$no : "34", $TeamName : "경영/회계팀34", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.4", $DateArea : "2020-10-01 ~ 2020-10-08", $status : "종료"});
    $capacityEva_Table.push({$no : "35", $TeamName : "기획/영업팀35", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.5", $DateArea : "2020-10-01 ~ 2020-10-10", $status : "종료"});
    $capacityEva_Table.push({$no : "36", $TeamName : "미래기술그룹36", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.6", $DateArea : "2020-10-01 ~ 2020-10-12", $status : "종료"});
    $capacityEva_Table.push({$no : "37", $TeamName : "경영/회계팀37", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.7", $DateArea : "2020-10-01 ~ 2020-10-14", $status : "종료"});
    $capacityEva_Table.push({$no : "38", $TeamName : "디자인팀38", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.8", $DateArea : "2020-10-01 ~ 2020-10-16", $status : "종료"});
    $capacityEva_Table.push({$no : "39", $TeamName : "기획/영업팀39", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.9", $DateArea : "2020-10-01 ~ 2020-10-18", $status : "종료"});
    $capacityEva_Table.push({$no : "40", $TeamName : "미래기술그룹40", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.10", $DateArea : "2020-10-01 ~ 2020-10-20", $status : "종료"});
    $capacityEva_Table.push({$no : "41", $TeamName : "디자인팀41", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.10", $DateArea : "2020-10-01 ~ 2020-10-22", $status : "종료"});
    $capacityEva_Table.push({$no : "42", $TeamName : "기획/영업팀42", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.10", $DateArea : "2020-10-01 ~ 2020-10-24", $status : "종료"});
    $capacityEva_Table.push({$no : "43", $TeamName : "경영/회계팀43", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.10", $DateArea : "2020-10-01 ~ 2020-10-26", $status : "종료"});
    $capacityEva_Table.push({$no : "44", $TeamName : "디자인팀44", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.10", $DateArea : "2020-10-01 ~ 2020-10-28", $status : "종료"});
    $capacityEva_Table.push({$no : "45", $TeamName : "미래기술그룹45", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.10", $DateArea : "2020-10-01 ~ 2020-10-30", $status : "종료"});
    $capacityEva_Table.push({$no : "46", $TeamName : "미래기술그룹46", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.10", $DateArea : "2020-10-01 ~ 2020-10-20", $status : "종료"});
    $capacityEva_Table.push({$no : "47", $TeamName : "디자인팀47", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.10", $DateArea : "2020-10-01 ~ 2020-10-22", $status : "종료"});
    $capacityEva_Table.push({$no : "48", $TeamName : "기획/영업팀48", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.10", $DateArea : "2020-10-01 ~ 2020-10-24", $status : "종료"});
    $capacityEva_Table.push({$no : "49", $TeamName : "경영/회계팀49", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.10", $DateArea : "2020-10-01 ~ 2020-10-26", $status : "종료"});
    $capacityEva_Table.push({$no : "50", $TeamName : "경영/회계팀50", $TitleArea : "<a href='capacityEvaDetail.html'>제목이 출력되는 영역입니다.10", $DateArea : "2020-10-01 ~ 2020-10-26", $status : "종료"});

    function capacityEva_des(){      
        for(key in $capacityEva_Table){    
            $html += "<tr class='trBottom'>";        
            $html += "<td class='thHeight'>"+$capacityEva_Table[key].$no+"</td>";
            $html += "<td class='thHeight'>"+$capacityEva_Table[key].$TeamName+"</td>";
            $html += "<td class='thHeight checking'>"+$capacityEva_Table[key].$TitleArea+"</td>";
            $html += "<td class='thHeight'>"+$capacityEva_Table[key].$DateArea+"</td>";
            $html += "<td class='thHeight'>"+$capacityEva_Table[key].$status+"</td>";    
            $html += "</tr>";             
        }         
        $("#capacityEvaTbody").empty();
        $("#capacityEvaTbody").append($html);
    };
    capacityEva_des();

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
    $('#evaluationListtTb').DataTable({
        "scrollX": true,
        language : lang_kor
    });
    
});
