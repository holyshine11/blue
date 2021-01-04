// HR capacityDes.js
$(document).ready(function(){     
    // evaluationDesign Table [$no : "테이블 list number", $TeamName : "소속팀", $TitleArea : "제목", $DateArea : "기간", $status : "평가중/종료"]
    let $evaluationDesign_tb = new Array();
    let $html = "";
    $evaluationDesign_tb.push({$no : "01", $TeamName : "기획/영업팀1", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가1", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "평가중"});
    $evaluationDesign_tb.push({$no : "02", $TeamName : "미래기술그룹2", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가2", $DateArea : "2020-10-01 ~ 2020-10-04", $status : "종료"});
    $evaluationDesign_tb.push({$no : "03", $TeamName : "디자인팀3", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가3", $DateArea : "2020-10-01 ~ 2020-10-06", $status : "종료"});
    $evaluationDesign_tb.push({$no : "04", $TeamName : "경영/회계팀4", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가4", $DateArea : "2020-10-01 ~ 2020-10-08", $status : "종료"});
    $evaluationDesign_tb.push({$no : "05", $TeamName : "기획/영업팀5", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가5", $DateArea : "2020-10-01 ~ 2020-10-10", $status : "종료"});
    $evaluationDesign_tb.push({$no : "06", $TeamName : "미래기술그룹6", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가6", $DateArea : "2020-10-01 ~ 2020-10-12", $status : "종료"});
    $evaluationDesign_tb.push({$no : "07", $TeamName : "경영/회계팀7", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가7", $DateArea : "2020-10-01 ~ 2020-10-14", $status : "종료"});
    $evaluationDesign_tb.push({$no : "08", $TeamName : "디자인팀8", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가8", $DateArea : "2020-10-01 ~ 2020-10-16", $status : "종료"});
    $evaluationDesign_tb.push({$no : "09", $TeamName : "기획/영업팀9", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가9", $DateArea : "2020-10-01 ~ 2020-10-18", $status : "종료"});
    $evaluationDesign_tb.push({$no : "10", $TeamName : "미래기술그룹10", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가10", $DateArea : "2020-10-01 ~ 2020-10-20", $status : "종료"});
    $evaluationDesign_tb.push({$no : "11", $TeamName : "기획/영업팀1", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가1", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "평가중"});
    $evaluationDesign_tb.push({$no : "12", $TeamName : "미래기술그룹2", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가2", $DateArea : "2020-10-01 ~ 2020-10-04", $status : "종료"});
    $evaluationDesign_tb.push({$no : "13", $TeamName : "디자인팀3", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가3", $DateArea : "2020-10-01 ~ 2020-10-06", $status : "종료"});
    $evaluationDesign_tb.push({$no : "14", $TeamName : "경영/회계팀4", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가4", $DateArea : "2020-10-01 ~ 2020-10-08", $status : "종료"});
    $evaluationDesign_tb.push({$no : "15", $TeamName : "기획/영업팀5", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가5", $DateArea : "2020-10-01 ~ 2020-10-10", $status : "종료"});
    $evaluationDesign_tb.push({$no : "16", $TeamName : "미래기술그룹6", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가6", $DateArea : "2020-10-01 ~ 2020-10-12", $status : "종료"});
    $evaluationDesign_tb.push({$no : "17", $TeamName : "경영/회계팀7", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가7", $DateArea : "2020-10-01 ~ 2020-10-14", $status : "종료"});
    $evaluationDesign_tb.push({$no : "18", $TeamName : "디자인팀8", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가8", $DateArea : "2020-10-01 ~ 2020-10-16", $status : "종료"});
    $evaluationDesign_tb.push({$no : "19", $TeamName : "기획/영업팀9", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가9", $DateArea : "2020-10-01 ~ 2020-10-18", $status : "종료"});
    $evaluationDesign_tb.push({$no : "20", $TeamName : "미래기술그룹10", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가10", $DateArea : "2020-10-01 ~ 2020-10-20", $status : "종료"});
    $evaluationDesign_tb.push({$no : "21", $TeamName : "기획/영업팀1", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가1", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "평가중"});
    $evaluationDesign_tb.push({$no : "22", $TeamName : "미래기술그룹2", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가2", $DateArea : "2020-10-01 ~ 2020-10-04", $status : "종료"});
    $evaluationDesign_tb.push({$no : "23", $TeamName : "디자인팀3", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가3", $DateArea : "2020-10-01 ~ 2020-10-06", $status : "종료"});
    $evaluationDesign_tb.push({$no : "24", $TeamName : "경영/회계팀4", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가4", $DateArea : "2020-10-01 ~ 2020-10-08", $status : "종료"});
    $evaluationDesign_tb.push({$no : "25", $TeamName : "기획/영업팀5", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가5", $DateArea : "2020-10-01 ~ 2020-10-10", $status : "종료"});
    $evaluationDesign_tb.push({$no : "26", $TeamName : "미래기술그룹6", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가6", $DateArea : "2020-10-01 ~ 2020-10-12", $status : "종료"});
    $evaluationDesign_tb.push({$no : "27", $TeamName : "경영/회계팀7", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가7", $DateArea : "2020-10-01 ~ 2020-10-14", $status : "종료"});
    $evaluationDesign_tb.push({$no : "28", $TeamName : "디자인팀8", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가8", $DateArea : "2020-10-01 ~ 2020-10-16", $status : "종료"});
    $evaluationDesign_tb.push({$no : "29", $TeamName : "기획/영업팀9", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가9", $DateArea : "2020-10-01 ~ 2020-10-18", $status : "종료"});
    $evaluationDesign_tb.push({$no : "30", $TeamName : "미래기술그룹10", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가10", $DateArea : "2020-10-01 ~ 2020-10-20", $status : "종료"});
    $evaluationDesign_tb.push({$no : "31", $TeamName : "기획/영업팀1", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가1", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "평가중"});
    $evaluationDesign_tb.push({$no : "32", $TeamName : "미래기술그룹2", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가2", $DateArea : "2020-10-01 ~ 2020-10-04", $status : "종료"});
    $evaluationDesign_tb.push({$no : "33", $TeamName : "디자인팀3", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가3", $DateArea : "2020-10-01 ~ 2020-10-06", $status : "종료"});
    $evaluationDesign_tb.push({$no : "34", $TeamName : "경영/회계팀4", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가4", $DateArea : "2020-10-01 ~ 2020-10-08", $status : "종료"});
    $evaluationDesign_tb.push({$no : "35", $TeamName : "기획/영업팀5", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가5", $DateArea : "2020-10-01 ~ 2020-10-10", $status : "종료"});
    $evaluationDesign_tb.push({$no : "36", $TeamName : "미래기술그룹6", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가6", $DateArea : "2020-10-01 ~ 2020-10-12", $status : "종료"});
    $evaluationDesign_tb.push({$no : "37", $TeamName : "경영/회계팀7", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가7", $DateArea : "2020-10-01 ~ 2020-10-14", $status : "종료"});
    $evaluationDesign_tb.push({$no : "38", $TeamName : "디자인팀8", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가8", $DateArea : "2020-10-01 ~ 2020-10-16", $status : "종료"});
    $evaluationDesign_tb.push({$no : "39", $TeamName : "기획/영업팀9", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가9", $DateArea : "2020-10-01 ~ 2020-10-18", $status : "종료"});
    $evaluationDesign_tb.push({$no : "40", $TeamName : "미래기술그룹10", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가10", $DateArea : "2020-10-01 ~ 2020-10-20", $status : "종료"});
    $evaluationDesign_tb.push({$no : "41", $TeamName : "기획/영업팀1", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가1", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "평가중"});
    $evaluationDesign_tb.push({$no : "42", $TeamName : "미래기술그룹2", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가2", $DateArea : "2020-10-01 ~ 2020-10-04", $status : "종료"});
    $evaluationDesign_tb.push({$no : "43", $TeamName : "디자인팀3", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가3", $DateArea : "2020-10-01 ~ 2020-10-06", $status : "종료"});
    $evaluationDesign_tb.push({$no : "44", $TeamName : "경영/회계팀4", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가4", $DateArea : "2020-10-01 ~ 2020-10-08", $status : "종료"});
    $evaluationDesign_tb.push({$no : "45", $TeamName : "기획/영업팀5", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가5", $DateArea : "2020-10-01 ~ 2020-10-10", $status : "종료"});
    $evaluationDesign_tb.push({$no : "46", $TeamName : "미래기술그룹6", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가6", $DateArea : "2020-10-01 ~ 2020-10-12", $status : "종료"});
    $evaluationDesign_tb.push({$no : "47", $TeamName : "경영/회계팀7", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가7", $DateArea : "2020-10-01 ~ 2020-10-14", $status : "종료"});
    $evaluationDesign_tb.push({$no : "48", $TeamName : "디자인팀8", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가8", $DateArea : "2020-10-01 ~ 2020-10-16", $status : "종료"});
    $evaluationDesign_tb.push({$no : "49", $TeamName : "기획/영업팀9", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가9", $DateArea : "2020-10-01 ~ 2020-10-18", $status : "종료"});
    $evaluationDesign_tb.push({$no : "50", $TeamName : "미래기술그룹10", $TitleArea : "2020년 상반기 미래기술개발팀 역량 평가10", $DateArea : "2020-10-01 ~ 2020-10-20", $status : "종료"});
        
    function evaluationDesign_des(){      
        for(key in $evaluationDesign_tb){    
            $html += "<tr class='trBottom'>";        
            $html += "<td class='thHeight'>"+$evaluationDesign_tb[key].$no+"</td>";
            $html += "<td class='thHeight'>"+$evaluationDesign_tb[key].$TeamName+"</td>";
            $html += "<td class='thHeight checking'>"+$evaluationDesign_tb[key].$TitleArea+"</td>";
            $html += "<td class='thHeight'>"+$evaluationDesign_tb[key].$DateArea+"</td>";
            $html += "<td class='thHeight'>"+$evaluationDesign_tb[key].$status+"</td>";    
            $html += "</tr>";             
        }         
        $("#evaluationDesign_tb").empty();
        $("#evaluationDesign_tb").append($html);
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

    $('#evaluationDesignTb').DataTable({
        "scrollX": true,
        language : lang_kor
    });
 
});