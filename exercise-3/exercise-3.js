$(document).ready(function(){
  $.get('http://portal.batchacademy.com/api/wdfne/test-data/hello-world', function(data){  
    $('.dynamic').text(data);
  });
});
