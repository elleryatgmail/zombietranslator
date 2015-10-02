define(['jquery'], function($){

  var Translator= function(){
  var englishInput= "";
  var zombieOutput= "";
  var zombieInput= "";
  var englishOutput="";
  
  var that= this;

  $('#english-to-zombie-btn').click(function(event){
  englishInput= $('#english').val();
  zombieOutput= that.zombify(englishInput);
    $('#zombie').val(zombieOutput);
    return false;
  });
  

  $('#zombie-to-english-btn').click(function(event){
  zombieInput= $('#zombie').val();
  englishOutput= that.unzombify(zombieInput);
  $('#english').val(englishOutput);
   return false;
   });

}


  Translator.prototype.unzombify = function(input){
	var newstr="";
	newstr =  "Sorry, unzombification has not been implemented.";
	return newstr;
  }


  // Implements homework instructions to convert input english text
  // into zombie text.
  //----------------------------------------------------------------
  Translator.prototype.zombify = function(input){

     var newstr= "";


     // Per the requirements, rules shouldn't overlap:
     //    <snippet>
     //      Running most of these rules is going to produce some "r"s.
     //      You shouldn't be running any of the "r" rules on the r's that
     //      are produced from other rules.
     //    </snippet>
     //  
     // In order to fulfill this requirment, we adopt a 2-phased approach to 
     // applying rules.  First we have a staging phase where we replace
     // the target text with a rule marker.  Then we have an application
     // phase where rule markers are replaced by the appropriate text.
     // 
     // For example rule 1 says replace "r" at the end of words with "rh".
     // In phase 1 we stage this rule so that the word "car" becomes the
     // word "ca~~~01~~~".  We continue processing the text until all the
     // rules have been staged.
     //
     // Once all the rules have been staged we apply the rules by replacing
     // the rule markers with the appropriate text. In the application phase
     // the word "ca~~~01~~~" becomes the word "carh", as we replace the
     // rule marker "~~~01~~~" with the text "rh".
     //
     // In this way we avoid applying rules to the output of other rules.
     //-------------------------------------------------------------------------
   
   
   
   
     //---------------------------------------
     //  Rule Staging Section
     //---------------------------------------
   
     // Rule #1 staging
     //-----------------
     // lower-case "r" at the end of words replaced with "rh".
     //
     // End of a word is defined to be any string of
     // characters ending with a '.', '!', '?' or whitespace.
     //---------------------------------------------------------
     newstr= input.replace(/(.*?)r(\.|\!|\?|\s|$)/g, "$1~~~01~~~$2");
   
   
     // Rule #2 staging
     //-----------------
     // an "a" or "A" is replaced with "hra".
     //----------------------------------------
     newstr= newstr.replace(/(a|A)/g, "~~~02~~~");
   
   
     // Rule #3 Staging.
     //-----------------
     // the starts of sentences are capitalized.
     // the "start of a sentence" is any occurrence of ".!?",
     // followed by a space, followed by a letter.
     //------------------------------------------------------------
     // No staging required since this rule doesn't interfere with any others
   
   
   
     // Rule #4 staging
     //-----------------
     // "e" or "E" is replaced by "rr"
     //-----------------------------------
     newstr= newstr.replace(/(e|E)/g, "~~~04~~~");
   
   
   
     // Rule #5 staging
     //-----------------
     // "i" or "I" is replaced by "rrRr"
     //----------------------------------
     newstr= newstr.replace(/(i|I)/g, "~~~05~~~");
   
   
   
     // Rule #6 staging
     //-----------------
     // "o" or "O" is replaced by "rrrRr"
     //----------------------------------
     newstr= newstr.replace(/(o|O)/g, "~~~06~~~");
   
   
   
     // Rule #7 staging
     //-----------------
     // "u" or "U" is replaced by "rrrrRr"
     //------------------------------------
     newstr= newstr.replace(/(u|U)/g, "~~~07~~~");
   
   
   
     // Rule #8 staging
     //-------------------
     // "r" or "R" is replaced by "RR"
     //--------------------------------
     newstr= newstr.replace(/(r|R)/g, "~~~08~~~");
   
   
   
     // Rule #9 staging
     //------------------
     // "y" or "Y" is replaced by "YY"
     //--------------------------------
     newstr= newstr.replace(/(y|Y)/g, "~~~09~~~");
   
   
   
     // Rule #10 application
     //---------------------
     // "q" or "Q" is replaced by "QQ"
     //--------------------------------
     newstr= newstr.replace(/(q|Q)/g, "~~~10~~~");
   
   
   
   
   
   
   
   
     //---------------------------------------
     //  Rule Application Section
     //---------------------------------------
   
     // Rule #1 application
     //---------------------
     // lower-case "r" at the end of words replaced with "rh".
     //
     // End of a word is defined to be any string of
     // characters ending with a '.', '!', '?' or whitespace.
     //---------------------------------------------------------
     newstr= newstr.replace(/~~~01~~~/g, "rh");
   
   
   
     // Rule #2 application
     //---------------------
     // an "a" or "A" is replaced with "hra".
     //----------------------------------------
     newstr= newstr.replace(/~~~02~~~/g, "hra");
   
   
   
     // Rule #3 application
     //---------------------
     // the starts of sentences are capitalized.
     // the "start of a sentence" is any occurrence of ".!?",
     // followed by a space, followed by a letter.
     //------------------------------------------------------------
     //newstr= newstr.replace(/(\.|\!|\?)(\s)+([a-z])/g, function(a){return a.toUpperCase();} );
   
   
   
     // Rule #4 application
     //---------------------
     // "e" or "E" is replaced by "rr"
     //-----------------------------------
     newstr= newstr.replace(/~~~04~~~/g, "rr");
   
   
   
     // Rule #5 application
     //---------------------
     // "i" or "I" is replaced by "rrRr"
     //----------------------------------
     newstr= newstr.replace(/~~~05~~~/g, "rrRr");
   
   
   
     // Rule #6 application
     //---------------------
     // "o" or "O" is replaced by "rrrRr"
     //----------------------------------
     newstr= newstr.replace(/~~~06~~~/g, "rrrRr");
   
   
   
     // Rule #7 application
     //---------------------
     // "u" or "U" is replaced by "rrrrRr"
     //------------------------------------
     newstr= newstr.replace(/~~~07~~~/g, "rrrrRr");
   
   
   
     // Rule #8 application
     //---------------------
     // "r" or "R" is replaced by "RR"
     //--------------------------------
     newstr= newstr.replace(/~~~08~~~/g, "RR");
   
   
   
     // Rule #9 application
     //---------------------
     // "y" or "Y" is replaced by "YY"
     //--------------------------------
     newstr= newstr.replace(/~~~09~~~/g, "YY");
   
   
   
     // Rule #10 application
     //---------------------
     // "q" or "Q" is replaced by "QQ"
     //--------------------------------
     newstr= newstr.replace(/~~~10~~~/g, "QQ");


    // return zombified text string
    return newstr;

  }


  return Translator;


}); //end require.js require statement
