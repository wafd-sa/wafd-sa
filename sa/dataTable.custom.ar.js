$(document).ready(function(){$(document).height();$(document).width();$(".dt-responsive:not(.dt-responsive-no-paging, .dt-responsive-haj)").DataTable({responsive:!0,stateSave:!0,bStateSave:!0,stateLoadParams:function(b,a){a.search.search=""},fnStateSaveCallback:function(b,a){localStorage.setItem("DataTables_Absher_"+this.fnSettings().sTableId,JSON.stringify(a))},fnStateLoadCallback:function(b){return JSON.parse(localStorage.getItem("DataTables_Absher_"+this.fnSettings().sTableId))},language:{emptyTable:"\u0644\u0627 \u062a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a",
info:"\u0627\u0644\u0633\u062c\u0644\u0627\u062a \u0627\u0644\u0638\u0627\u0647\u0631\u0629 : _START_ \u0625\u0644\u0649 _END_ \u0645\u0646  \u0623\u0635\u0644 _TOTAL_",infoEmpty:"\u0627\u0644\u0633\u062c\u0644\u0627\u062a \u0627\u0644\u0638\u0627\u0647\u0631\u0629 : 0 \u0625\u0644\u0649 0 \u0645\u0646 \u0623\u0635\u0644 0 ",infoFiltered:"(\u0641\u0644\u062a\u0631\u0629 \u0645\u0646 \u0623\u0635\u0644  _MAX_)",infoPostFix:"",thousands:",",lengthMenu:"\u0625\u0638\u0647\u0627\u0631 _MENU_ \u0644\u0643\u0644 \u0635\u0641\u062d\u0629",
loadingRecords:"Loading...",processing:"Processing...",search:"\u0628\u062d\u062b \u0633\u0631\u064a\u0639 : ",zeroRecords:"\u0644\u0627 \u062a\u0648\u062c\u062f \u0633\u062c\u0644\u0627\u062a",paginate:{first:"\u0627\u0644\u0623\u0648\u0644",previous:"\u0627\u0644\u0633\u0627\u0628\u0642",next:"\u0627\u0644\u062a\u0627\u0644\u064a",last:"\u0627\u0644\u0623\u062e\u064a\u0631"},aria:{sortAscending:": activate to sort column ascending",sortDescending:": activate to sort column descending"}}});$(".dt-responsive-no-paging").DataTable({responsive:!0,
stateSave:!0,paging:!1,bInfo:!1,stateLoadParams:function(b,a){a.search.search=""},fnStateSaveCallback:function(b,a){localStorage.setItem("DataTables_Absher_"+this.fnSettings().sTableId,JSON.stringify(a))},fnStateLoadCallback:function(b){return JSON.parse(localStorage.getItem("DataTables_Absher_"+this.fnSettings().sTableId))},language:{emptyTable:"\u0644\u0627 \u062a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a",info:"\u0627\u0644\u0633\u062c\u0644\u0627\u062a \u0627\u0644\u0638\u0627\u0647\u0631\u0629 : _START_ \u0625\u0644\u0649 _END_ \u0645\u0646  \u0623\u0635\u0644 _TOTAL_",
infoEmpty:"\u0627\u0644\u0633\u062c\u0644\u0627\u062a \u0627\u0644\u0638\u0627\u0647\u0631\u0629 : 0 \u0625\u0644\u0649 0 \u0645\u0646 \u0623\u0635\u0644 0 ",infoFiltered:"(\u0641\u0644\u062a\u0631\u0629 \u0645\u0646 \u0623\u0635\u0644  _MAX_)",infoPostFix:"",thousands:",",lengthMenu:"\u0625\u0638\u0647\u0627\u0631 _MENU_ \u0644\u0643\u0644 \u0635\u0641\u062d\u0629",loadingRecords:"Loading...",processing:"Processing...",search:"\u0628\u062d\u062b \u0633\u0631\u064a\u0639 : ",zeroRecords:"\u0644\u0627 \u062a\u0648\u062c\u062f \u0633\u062c\u0644\u0627\u062a",
paginate:{first:"\u0627\u0644\u0623\u0648\u0644",previous:"\u0627\u0644\u0633\u0627\u0628\u0642",next:"\u0627\u0644\u062a\u0627\u0644\u064a",last:"\u0627\u0644\u0623\u062e\u064a\u0631"},aria:{sortAscending:": activate to sort column ascending",sortDescending:": activate to sort column descending"}}})});
function initDataTable(){$(document).height();$(document).width();$(".dt-responsive:not(.dt-responsive-no-paging, .dt-responsive-haj)").DataTable({responsive:!0,stateSave:!0,bStateSave:!0,stateLoadParams:function(b,a){a.search.search=""},fnStateSaveCallback:function(b,a){},fnStateLoadCallback:function(b){return JSON.parse(localStorage.getItem("DataTables_Absher_"+this.fnSettings().sTableId))},language:{emptyTable:"\u0644\u0627 \u062a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a",info:"\u0627\u0644\u0633\u062c\u0644\u0627\u062a \u0627\u0644\u0638\u0627\u0647\u0631\u0629 : _START_ \u0625\u0644\u0649 _END_ \u0645\u0646  \u0623\u0635\u0644 _TOTAL_",
infoEmpty:"\u0627\u0644\u0633\u062c\u0644\u0627\u062a \u0627\u0644\u0638\u0627\u0647\u0631\u0629 : 0 \u0625\u0644\u0649 0 \u0645\u0646 \u0623\u0635\u0644 0 ",infoFiltered:"(\u0641\u0644\u062a\u0631\u0629 \u0645\u0646 \u0623\u0635\u0644  _MAX_)",infoPostFix:"",thousands:",",lengthMenu:"\u0625\u0638\u0647\u0627\u0631 _MENU_ \u0644\u0643\u0644 \u0635\u0641\u062d\u0629",loadingRecords:"Loading...",processing:"Processing...",search:"\u0628\u062d\u062b \u0633\u0631\u064a\u0639 : ",zeroRecords:"\u0644\u0627 \u062a\u0648\u062c\u062f \u0633\u062c\u0644\u0627\u062a",
paginate:{first:"\u0627\u0644\u0623\u0648\u0644",previous:"\u0627\u0644\u0633\u0627\u0628\u0642",next:"\u0627\u0644\u062a\u0627\u0644\u064a",last:"\u0627\u0644\u0623\u062e\u064a\u0631"},aria:{sortAscending:": activate to sort column ascending",sortDescending:": activate to sort column descending"}}});$(".dt-responsive-no-paging").DataTable({responsive:!0,stateSave:!0,paging:!1,bInfo:!1,stateLoadParams:function(b,a){a.search.search=""},fnStateSaveCallback:function(b,a){localStorage.setItem("DataTables_Absher_"+
this.fnSettings().sTableId,JSON.stringify(a))},fnStateLoadCallback:function(b){return JSON.parse(localStorage.getItem("DataTables_Absher_"+this.fnSettings().sTableId))},language:{emptyTable:"\u0644\u0627 \u062a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a",info:"\u0627\u0644\u0633\u062c\u0644\u0627\u062a \u0627\u0644\u0638\u0627\u0647\u0631\u0629 : _START_ \u0625\u0644\u0649 _END_ \u0645\u0646  \u0623\u0635\u0644 _TOTAL_",infoEmpty:"\u0627\u0644\u0633\u062c\u0644\u0627\u062a \u0627\u0644\u0638\u0627\u0647\u0631\u0629 : 0 \u0625\u0644\u0649 0 \u0645\u0646 \u0623\u0635\u0644 0 ",
infoFiltered:"(\u0641\u0644\u062a\u0631\u0629 \u0645\u0646 \u0623\u0635\u0644  _MAX_)",infoPostFix:"",thousands:",",lengthMenu:"\u0625\u0638\u0647\u0627\u0631 _MENU_ \u0644\u0643\u0644 \u0635\u0641\u062d\u0629",loadingRecords:"Loading...",processing:"Processing...",search:"\u0628\u062d\u062b \u0633\u0631\u064a\u0639 : ",zeroRecords:"\u0644\u0627 \u062a\u0648\u062c\u062f \u0633\u062c\u0644\u0627\u062a",paginate:{first:"\u0627\u0644\u0623\u0648\u0644",previous:"\u0627\u0644\u0633\u0627\u0628\u0642",
next:"\u0627\u0644\u062a\u0627\u0644\u064a",last:"\u0627\u0644\u0623\u062e\u064a\u0631"},aria:{sortAscending:": activate to sort column ascending",sortDescending:": activate to sort column descending"}}})};
