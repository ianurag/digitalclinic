 $(document).ready(function() {
     
     $(".doc-schedule-cal td span").mouseover(function() {
        var currentRightPosSet
        if($(window).width()<$(this).offset().left +250)
            currentRightPosSet=$(this).offset().left;
        else
            currentRightPosSet=$(this).offset().left-250;

        $('#calender-detail').show();
         $('#calender-detail').css({
             left: $(this).offset().left+Number(20),
             top: $(this).offset().top 
         })
        
     }).mouseout(function() {
          $('#calender-detail').hide();
     })



     $("#patient-search-list tr,#patient-menu-hover").mouseover(function() {
    
        $('#patient-menu-hover').show();
         $('#patient-menu-hover').css({
             left: $(this).offset().left,
             top: $(this).offset().top + 30
         })
        
     }).mouseout(function() {
          $('#patient-menu-hover').hide();
     })



 
    
 $('#patient-dob').datepicker();
 $('#patient-member-dob').datepicker();
 $('#datepicker-range').datepicker();
 $("#phone").mask("999-999-9999");
 $("#creditcard").mask("9999-9999-9999-9999-9999")
 var table = $('#myDataTable,#doc-history');
 var settings = {
     "sDom": "<'table-responsive't><'row'<p i>>",
     "destroy": true,
     "scrollCollapse": true,
     "oLanguage": {
         "sLengthMenu": "_MENU_ ",
         "sInfo": "Showing <b>_START_ to _END_</b> of _TOTAL_ entries"
     },
     "iDisplayLength": 5
 };
 // table.dataTable(settings);
 $('#submitAppointment').click(function(event) {
     $('#myModal').hide();
     $('#modalappointmentpurpose').modal()
 });
 $('#submitappointmentdetail').click(function(event) {
     $('#modalappointmentpurpose').hide();
     $('#modalappointmentpayment').modal()
 });
 $('#submitappointmentpayment').click(function(event) {
     $('#modalappointmentpayment').hide();
     $('#apointmentshare').modal()
 });
 $('#finishappointment').click(function(event) {
     $('.modal').modal('hide');
     // $('.modal-backdrop').hide()
 });
 var elems = Array.prototype.slice.call(document.querySelectorAll('.switchery'));
 // Success color: #10CFBD
 elems.forEach(function(html) {
     var switchery = new Switchery(html, {
         color: '#10CFBD'
     });
 });
 $('#patient-dob').datepicker();
 $('#patient-member-dob').datepicker();
 $('#datepicker-range').datepicker();
 $("#phone").mask("999-999-9999");
 $("#creditcard").mask("9999-9999-9999-9999-9999")
 if (jQuery().typed) {
     $("#dynamic-text").typed({
         loop: true,
         strings: ["Chat Consult <i class='icon clinic-text-consult'></i> ", "Video Consult <i class='icon clinic-video-consult-now'></i> ", "Clinic Visit <i class='icon clinic-book-inperson'></i> ", "Home Visit <i class='icon clinic-book-video-consult'></i> "],
         typeSpeed: 100,
         backDelay: 4000
     });
 };
 $('#addClinicBtn').click(function(event) {
     $('.modal').modal('hide');
     $('#new-add-clinic').modal()
 });
 $('[data-pages="search"]').search({
 searchField: '#overlay-search',
 closeButton: '.overlay-close',
 suggestions: '#overlay-suggestions',
 brand: '.brand',
 onSearchSubmit: function(searchString) {
     console.log("Search for: " + searchString);
 },
 onKeyEnter: function(searchString) {
     console.log("Live search for: " + searchString);
     var searchField = $('#overlay-search');
     var searchResults = $('.search-results');
     clearTimeout($.data(this, 'timer'));
     searchResults.fadeOut("fast");
     var wait = setTimeout(function() {
         searchResults.find('.result-name').each(function() {
             if (searchField.val().length != 0) {
                 $(this).html(searchField.val());
                 searchResults.fadeIn("fast");
             }
         });
     }, 500);
     $(this).data('timer', wait);
 }
 });
 })