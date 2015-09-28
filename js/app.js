$(  function(){
 
  var input= "";
  var newstr= "";
  

  $('#english-to-zombie-btn').click(function(event){
    zombify();
    return false;
  });
  

  $('#zombie-to-english-btn').click(function(event){
    unzombify();
    return false;
  });


  function zombify(){
    input= $('#english').val();
    $('#zombie').val(input);

  }



  function unzombify(){
    input= $('#zombie').val();
    $('#english').val(input);

  }


});
