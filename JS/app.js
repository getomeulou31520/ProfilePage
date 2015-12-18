$.getJSON('https://s.idsympa.com/u-1.json', function( data ){
  var template = $('#template').html();
  var rendered = Mustache.render(template, data);
  $('body').html(rendered);

});
