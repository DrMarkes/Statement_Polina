// ==UserScript==
// @name         Statement
// @namespace    https://cabinet.ruobr.ru/
// @version      0.1
// @description  try to take over the world!
// @author       Markes
// @require      http://code.jquery.com/jquery-2.1.4.min.js
// @match        https://cabinet.ruobr.ru/petitions/dounew/9156854/
// @grant        none
// ==/UserScript==
$( document ).ready(function() {
    $("#id_worktime option[value='3']").prop('selected', true);
    $("#id_orientation option[value='1']").prop('selected', true);
    $("#id_entrance_date option[value='2016-09-01']").prop('selected', true);    
    
    $("#id_dou option").each(function() { 
       if ($(this).text().indexOf('№30') != -1) {
          $(this).prop('selected', true);
     //     $(".cabinet-btn").trigger('click');
       }
    }); 
    
    if ($("#id_dou").val() == '60159') {        
        setTimeout('location.reload (true)', 300);
    }
});