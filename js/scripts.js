function crypto(inputText){
  var letter = /^[a-zA-Z]+$/;
  let sentenceOne = inputText.toLowerCase().split("");
  var array=[];
  for(var i = 0 ; i <sentenceOne.length ;i ++){
    if(sentenceOne[i].match(letter)){
      array.push(sentenceOne[i]);
    }
  }
  var lengthOf = array.length;
  var num = Math.sqrt(lengthOf);
  var finalSentence = array.join("");
  // var mappedSentence = array.map(function(char) {
  for(var i=1; i < = num ; i ++){
    this["finalSentence"+i] = finalSentence.slice(0,num);
  }
  // });
  // var input =[];
  return finalSentence1;
  }



  $(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();
    var inputText = $("#sentence").val();
    $("#output").text(crypto(inputText));
  });
  });
