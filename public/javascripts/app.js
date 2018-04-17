$.ajax('/api/user',{
  accepts: 'application/json',
  success: function( data, status){
    var $body = $('body');
    data.forEach(function(user){
      var $elem = '<div> '+ user.username + '  -   ' +user.age + '</div>';
      $body.append($elem);
    })
  },
  error: function( ajax, status, err ){
    debugger;
  }
});


$('#submitBtn').on('click', function(e){
  var username = $('input[name="username"]').val();
  var age = $('input[name="age"]').val();
  console.log({
    username: username,
    age: age
  });
  $.ajax('/api/user',{
    method: "POST",
    contentType: 'application/json',
    data: JSON.stringify({
      username: username,
      age: age
    }),
    success: function(data, status){
debugger;
    },
    error: function(ajax, status, err){
      debugger;
    }
  })
})
