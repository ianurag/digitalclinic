 $(document).ready(function() {
        // Initializes search overlay plugin.
        // Replace onSearchSubmit() and onKeyEnter() with 
        // your logic to perform a search and display results

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

table.dataTable(settings);

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
  var switchery = new Switchery(html, {color: '#10CFBD'});
});


    $('#patient-dob').datepicker();
    $('#patient-member-dob').datepicker();

    $('#datepicker-range').datepicker();

    $("#phone").mask("999-999-9999");
    $("#creditcard").mask("9999-9999-9999-9999-9999")
   



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