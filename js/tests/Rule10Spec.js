define(['Translator'], function(Translator){

  describe('Rule10: ', function(){
    describe('Zombify Function - replace /(q|Q)/ with /QQ/', function(){


      // initialize translator
  	  var translator= new Translator();


	  // set test word
	  var testWord= "Query?";


      // test 1 of 3
      it('should return at least as many characters as it read in"', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText.length >= testWord.length).toBeTruthy()
      });


      // test 2 of 3
	  it('should match /QQ/', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText).toMatch(/QQ/);
      });



      // test 3 of 3
	  it('should be "QQrrrrRrrrRRYY?"', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText).toBe("QQrrrrRrrrRRYY?");
      });

    });

  });

});
