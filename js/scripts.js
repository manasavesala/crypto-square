function crypto(sentence){
  var letter = /^[a-zA-Z]+$/;
  sentence = sentence.toLowerCase();
  sentence = sentence.split("");
  var array=[];

  for(var i = 0 ; i <sentence.length ;i ++){
    if(sentence[i].match(letter)){
      array.push(sentence[i]);
    }
  }
  alert(array);

  var mappedSentence = array.map(function(char) {


  });
  // var input =[];
  };


  $(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();
    var inputText = $("#sentence").val();
    $("#output").text(crypto(inputText));
  });
  });
