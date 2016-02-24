$(document).ready(function(){
  $.get('http://portal.batchacademy.com/api/wdfne/test-data/items', function(items){
    var itemTemplate = $('template#item').html();
    for(var i = 0; i < items.length; i++){
      var newItem = $(itemTemplate);
      $('.title', newItem).text(items[i].name);
      $('.price', newItem).text('$' + items[i].price);
      $('.items').append(newItem);
    }
  });
});
 