// input: bun man nun sun
// b u n
// m a n
// n u n
// s u n

function crypto(inputText){
  var letter = /^[a-zA-Z]+$/;
  let sentenceOne = inputText.toLowerCase().split("");
  console.log('sentenceOne (after split) = ', sentenceOne);
  var array=[];
  for(var i = 0 ; i < sentenceOne.length; i++){
    if(sentenceOne[i].match(letter)){
      array.push(sentenceOne[i]);
    }
  }

  // array = ['b', 'u', 'n', 'm', 'a', ..,]
  // finalSentence = 'bunmannunsun'
  var rows = Math.ceil(Math.sqrt(array.length));
  var cols = Math.ceil(array.length/rows);
  var finalSentence = array.join("");
  console.log('stripped sentence - ', finalSentence);

  for(var i=1; i < rows+1 ; i ++){
    this["row"+i] = finalSentence.slice(0,cols);
    finalSentence = finalSentence.slice(cols);
    console.log("row"+i+" = ", this["row"+i]);
  }

  for(var i = 1; i < cols+1; i++){
    this["cols"+i] = "";
  }

  for(var i = 0; i < cols; i++) {
    let colName = "cols"+ (i + 1);
    for(var j = 1; j < rows+1; j++){
      this[colName] = this[colName] + this["row"+j][i];
    }

    console.log(`${colName} = ${this[colName]}`);
  }
  var colsJoin = "";
  for(var i = 1; i < cols+1; i++){
    colsJoin = colsJoin + this["cols"+i];
  }

  // nn
  // bmnsu; bmnsu
  // uuunn; bmnsu uuunn nn
  var output = "";
  while(colsJoin.length > 0){
    output =  output + colsJoin.slice(0,5) + " ";
    colsJoin= colsJoin.slice(5);
    console.log(`output: ${output}`);
  }
  return output;
  }



  $(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();
    var inputText = $("#sentence").val();
    $("#output").text(crypto(inputText));
  });
  });
