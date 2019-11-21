$(document).ready(function(){
    $('button').on('click',function(){
        var name = $('#name').val();
        var pass = $('#pass').val();
        name == ""?setError('name'):setSuccess('name');
        pass == ""?setError('pass'):setSuccess('pass');
    });
});
function setSuccess(success){
    $('#' + success).addClass('border-success').removeClass('border-danger');
}
function setError(error){
    $('#' + error).addClass('border-danger').removeClass('border-success');
}