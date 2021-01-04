// HR capacityRes.js
$(document).ready(function(){   

    // capacityRes_Table [$no : 테이블 list number, TitleArea : 제목, $tatalSc : 종합평가점수, $common : 공통역량점수, $Duties : 직무역량점수, $leaderShip : 리더십점수, $Average : 전체평균점수]
    let $capacityRes_Table = new Array();
    let $html = "";
    $capacityRes_Table.push({$no : "01", $TitleArea : "2020 하반기 역량 평가1", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "A(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "02", $TitleArea : "2020 하반기 역량 평가2", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "B(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "03", $TitleArea : "2020 하반기 역량 평가3", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "C(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "04", $TitleArea : "2020 하반기 역량 평가4", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "D(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "05", $TitleArea : "2020 하반기 역량 평가5", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "E(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "06", $TitleArea : "2020 하반기 역량 평가6", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "A(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "07", $TitleArea : "2020 하반기 역량 평가7", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "B(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "08", $TitleArea : "2020 하반기 역량 평가8", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "C(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "09", $TitleArea : "2020 하반기 역량 평가9", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "D(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "10", $TitleArea : "2020 하반기 역량 평가10", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "E(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "11", $TitleArea : "2020 하반기 역량 평가11", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "A(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "12", $TitleArea : "2020 하반기 역량 평가12", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "B(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "13", $TitleArea : "2020 하반기 역량 평가13", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "C(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "14", $TitleArea : "2020 하반기 역량 평가14", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "D(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "15", $TitleArea : "2020 하반기 역량 평가15", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "E(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "16", $TitleArea : "2020 하반기 역량 평가16", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "A(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "17", $TitleArea : "2020 하반기 역량 평가17", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "B(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "18", $TitleArea : "2020 하반기 역량 평가18", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "C(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "19", $TitleArea : "2020 하반기 역량 평가19", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "D(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "20", $TitleArea : "2020 하반기 역량 평가20", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "E(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "21", $TitleArea : "2020 하반기 역량 평가21", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "A(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "22", $TitleArea : "2020 하반기 역량 평가22", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "B(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "24", $TitleArea : "2020 하반기 역량 평가23", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "C(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "24", $TitleArea : "2020 하반기 역량 평가24", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "D(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "25", $TitleArea : "2020 하반기 역량 평가25", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "E(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "26", $TitleArea : "2020 하반기 역량 평가26", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "A(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "27", $TitleArea : "2020 하반기 역량 평가27", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "B(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "28", $TitleArea : "2020 하반기 역량 평가28", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "C(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "29", $TitleArea : "2020 하반기 역량 평가29", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "D(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "30", $TitleArea : "2020 하반기 역량 평가20", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "E(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "31", $TitleArea : "2020 하반기 역량 평가21", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "A(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "32", $TitleArea : "2020 하반기 역량 평가22", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "B(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "33", $TitleArea : "2020 하반기 역량 평가23", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "C(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "34", $TitleArea : "2020 하반기 역량 평가24", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "D(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "35", $TitleArea : "2020 하반기 역량 평가25", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "E(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "36", $TitleArea : "2020 하반기 역량 평가26", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "A(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "37", $TitleArea : "2020 하반기 역량 평가27", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "B(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "38", $TitleArea : "2020 하반기 역량 평가28", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "C(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "39", $TitleArea : "2020 하반기 역량 평가29", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "D(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "40", $TitleArea : "2020 하반기 역량 평가30", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "E(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "41", $TitleArea : "2020 하반기 역량 평가31", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "A(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "42", $TitleArea : "2020 하반기 역량 평가32", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "B(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "43", $TitleArea : "2020 하반기 역량 평가33", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "C(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "44", $TitleArea : "2020 하반기 역량 평가34", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "D(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "45", $TitleArea : "2020 하반기 역량 평가35", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "E(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "46", $TitleArea : "2020 하반기 역량 평가36", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "A(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "47", $TitleArea : "2020 하반기 역량 평가37", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "B(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "48", $TitleArea : "2020 하반기 역량 평가38", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "C(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "49", $TitleArea : "2020 하반기 역량 평가39", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "D(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});
    $capacityRes_Table.push({$no : "50", $TitleArea : "2020 하반기 역량 평가40", $tatalSc : "A<div class='score'>(8.00)</div>", $common : "E(8.00)", $Duties : "A(8.00)", $leaderShip : "A(8.00)", $Average : "A(8.00)"});


    function capacityRes_des(){      
        for(key in $capacityRes_Table){    
            $html += "<tr class='trBottom'>";        
            $html += "<td class='thHeight'>"+$capacityRes_Table[key].$no+"</td>";   
            $html += "<td class='thHeight title'>"+$capacityRes_Table[key].$TitleArea+"</td>";   
            $html += "<td class='thHeight totalSc'>"+$capacityRes_Table[key].$tatalSc+"</td>";   
            $html += "<td class='thHeight'>"+$capacityRes_Table[key].$common+"</td>";   
            $html += "<td class='thHeight'>"+$capacityRes_Table[key].$Duties+"</td>";   
            $html += "<td class='thHeight'>"+$capacityRes_Table[key].$leaderShip+"</td>";   
            $html += "<td class='thHeight'>"+$capacityRes_Table[key].$Average+"</td>";   
            $html += "</tr>";             
        }         
        $("#capacityResList_table").empty();
        $("#capacityResList_table").append($html);
    };
    capacityRes_des();    

    // scorePop_Table
    let $scorePop_Table = new Array();
    let $tb = "";
    $scorePop_Table.push({$score : "S", $desciption : "매우 우수", $grade : "90점 이상"});
    $scorePop_Table.push({$score : "A", $desciption : "우수", $grade : "89점 ~ 80점"});
    $scorePop_Table.push({$score : "B", $desciption : "양호", $grade : "79점 ~ 60점"});
    $scorePop_Table.push({$score : "C", $desciption : "미흡", $grade : "69점 ~ 50점"});
    $scorePop_Table.push({$score : "D", $desciption : "매우 미흡", $grade : "49점 이하"});

    function scorePop_des(){      
        for(key in $scorePop_Table){    
            $tb += "<tr class='trBottom'>";        
            $tb += "<td class='thHeight'>"+$scorePop_Table[key].$score+"</td>";   
            $tb += "<td class='thHeight'>"+$scorePop_Table[key].$desciption+"</td>";   
            $tb += "<td class='thHeight'>"+$scorePop_Table[key].$grade+"</td>";   
            $tb += "</tr>";             
        }         
        $("#scorePop_tb").empty();
        $("#scorePop_tb").append($tb);
    };
    scorePop_des();

    // popup
    var popupX = (document.body.offsetWidth / 2) - (600 / 2);
    var popupY= (window.screen.height / 2) - (600 / 2);

    function scorePopUp(){
        window.open("scorePop.html", "등급산정기준팝업", 'status=no, height=500, width=600, left='+ popupX + ', top='+ popupY);
    }
    function commentPopUp(){
        window.open("commentPop.html", "부서장코멘트", 'status=no, height=500, width=600, left='+ popupX + ', top='+ popupY);
    }

    // addBtn popUp (부서장 코멘트)
    $('.title').on('click', function () {
        // var data = table.row(this).data();
        // alert('부서장 코멘트'+data[0]+'\'팝업입니다.');
        commentPopUp();
    });

    // addBtn popUp (부서장 코멘트)
    $('.totalSc').on('click', function () {
        // var data = table.row(this).data();
        scorePopUp();
    });

    $('.cancelBtn').on('click', function () {
        window.close("scorePop.html");
        window.close("commentPop.html");
    });    

    // Datetable
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
    var table = $("#capacityResListTb").DataTable({
        language : lang_kor
    }); 
    
 
});