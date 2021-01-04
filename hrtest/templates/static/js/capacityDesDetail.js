// capacityDesDetail.js
$(document).ready(function(){

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

    var table = $('.capacityDestable').DataTable({
        "paging": false,
        "filter" : false,
        language : lang_kor
    });

     // 선택한 행 삭제 
     $('.capacityDestable tbody').on('click', 'tr', function (){
        if ($(this).hasClass('selected')){
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );
 
    $('.tdDelete').click(function (){
        table.row('.selected').remove().draw(false);
    });

    // 복사 등록
    var counter = 1;
 
    $('.plusBtn').on('click', function (){
        table.row.add( [
            counter +'.1',
            counter +'.2',
            counter +'.3',
            counter +'.4',
            counter +'.5'
        ]).draw(false);
 
        counter++;
    });
 
    // Automatically add a first row of data
    $('.plusBtn').click();
    
});