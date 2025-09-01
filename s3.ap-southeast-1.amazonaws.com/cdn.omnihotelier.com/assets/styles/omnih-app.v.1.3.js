let $ = jQuery;
const now = new Date(Date.now());
const today = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
const dayInMs = 86400000;
const tomorrow = new Date(today.getTime() + dayInMs);
let setOption =  { opens: 'left',
minDate: today,
startDate: today,
endDate: tomorrow,
maxSpan: {
    "days": 30
},
minSpan:{
    "days": 1
},
autoApply: true,
locale: {
    format: 'DD MMM YYYY'
}
};

$(function() {
    $('#omnih-booking input[name="daterange"]').daterangepicker(
        setOption, function(start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});
$(function() {
    $('#omnih-booking input[name="daterange"]').on('apply.daterangepicker', function(ev, picker) {
        document.getElementById('checkin').value = picker.startDate.format('YYYY-MM-DD');
        document.getElementById('checkout').value = picker.endDate.format('YYYY-MM-DD');
    });
});

$(function() {
    $('#omnih-booking .select-custom').on('change', function(e){
        this.blur();
    })
})