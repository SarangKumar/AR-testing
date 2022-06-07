$(document).ready(function () {
    $('.vr_trial').click(function () {
        var address= $(this).attr('src');
        // console.log(address);
        // alert($(this).attr('src'));
        $('#vr').attr("src", address);
        // console.log('this is some random text');
    });
});