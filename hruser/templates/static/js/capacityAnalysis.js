// HR capacityAnalysis.js (역량평가분석)
$(document).ready(function(){

    // capacityAnalysis Table [$no : "테이블 list number", $TeamName : "소속팀", $TitleArea : "제목", $DateArea : "기간", $status : "평가중/종료"]
    let $capacityAnalysis_Table = new Array();
    let $html = "";
    $capacityAnalysis_Table.push({$no : "01", $TeamName : "기획/영업팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가1", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "평가중"});
    $capacityAnalysis_Table.push({$no : "02", $TeamName : "퍼블리셔팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가2", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "03", $TeamName : "미래기술그룹", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가3", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "04", $TeamName : "회계/경영팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가4", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "05", $TeamName : "퍼블리셔팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가5", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "06", $TeamName : "미래기술그룹", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가6", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "07", $TeamName : "기획/영업팀2", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가7", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "08", $TeamName : "회계/경영팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가8", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "09", $TeamName : "퍼블리셔팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가9", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "10", $TeamName : "기획/영업팀3", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가10", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "01", $TeamName : "기획/영업팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가1", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "평가중"});
    $capacityAnalysis_Table.push({$no : "02", $TeamName : "퍼블리셔팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가2", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "03", $TeamName : "미래기술그룹", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가3", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "04", $TeamName : "회계/경영팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가4", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "05", $TeamName : "퍼블리셔팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가5", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "06", $TeamName : "미래기술그룹", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가6", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "07", $TeamName : "기획/영업팀2", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가7", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "08", $TeamName : "회계/경영팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가8", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "09", $TeamName : "퍼블리셔팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가9", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "10", $TeamName : "기획/영업팀3", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가10", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "01", $TeamName : "기획/영업팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가1", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "평가중"});
    $capacityAnalysis_Table.push({$no : "02", $TeamName : "퍼블리셔팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가2", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "03", $TeamName : "미래기술그룹", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가3", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "04", $TeamName : "회계/경영팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가4", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "05", $TeamName : "퍼블리셔팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가5", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "06", $TeamName : "미래기술그룹", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가6", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "07", $TeamName : "기획/영업팀2", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가7", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "08", $TeamName : "회계/경영팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가8", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "09", $TeamName : "퍼블리셔팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가9", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "10", $TeamName : "기획/영업팀3", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가10", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "01", $TeamName : "기획/영업팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가1", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "평가중"});
    $capacityAnalysis_Table.push({$no : "02", $TeamName : "퍼블리셔팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가2", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "03", $TeamName : "미래기술그룹", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가3", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "04", $TeamName : "회계/경영팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가4", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "05", $TeamName : "퍼블리셔팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가5", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "06", $TeamName : "미래기술그룹", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가6", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "07", $TeamName : "기획/영업팀2", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가7", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "08", $TeamName : "회계/경영팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가8", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "09", $TeamName : "퍼블리셔팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가9", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "10", $TeamName : "기획/영업팀3", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가10", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "01", $TeamName : "기획/영업팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가1", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "평가중"});
    $capacityAnalysis_Table.push({$no : "02", $TeamName : "퍼블리셔팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가2", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "03", $TeamName : "미래기술그룹", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가3", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "04", $TeamName : "회계/경영팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가4", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "05", $TeamName : "퍼블리셔팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가5", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "06", $TeamName : "미래기술그룹", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가6", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "07", $TeamName : "기획/영업팀2", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가7", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "08", $TeamName : "회계/경영팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가8", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "09", $TeamName : "퍼블리셔팀", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가9", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});
    $capacityAnalysis_Table.push({$no : "10", $TeamName : "기획/영업팀3", $TitleArea : "<a href='capacityAnalysisDetail.html'>20년 상반기 기획팀 역량 평가10", $DateArea : "2020-10-01 ~ 2020-10-02", $status : "종료"});

    function capacityAnalysis_des(){      
        for(key in $capacityAnalysis_Table){    
            $html += "<tr class='trBottom'>";        
            $html += "<td class='thHeight'>"+$capacityAnalysis_Table[key].$no+"</td>";
            $html += "<td class='thHeight'>"+$capacityAnalysis_Table[key].$TeamName+"</td>";
            $html += "<td class='thHeight checking'>"+$capacityAnalysis_Table[key].$TitleArea+"</td>";
            $html += "<td class='thHeight'>"+$capacityAnalysis_Table[key].$DateArea+"</td>";
            $html += "<td class='thHeight'>"+$capacityAnalysis_Table[key].$status+"</td>";    
            $html += "</tr>";             
        }         
        $("#capacityAnalysisTbody").empty();
        $("#capacityAnalysisTbody").append($html);
    };
    capacityAnalysis_des();

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
    $('#capacityAnalysistTb').DataTable({
        "scrollX": true,
        language : lang_kor
    });
    
});
