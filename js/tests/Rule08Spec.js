define(['Translator'], function(Translator){

  describe('Rule08: ', function(){
    describe('Zombify Function - replace /(r|R)/ with /RR/', function(){


      // initialize translator
  	  var translator= new Translator();


	  // set test word
	  var testWord= "rat?";


      // test 1 of 3
      it('should return at least as many characters as it read in"', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText.length >= testWord.length).toBeTruthy()
      });


      // test 2 of 3
	  it('should match /RR/', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText).toMatch(/RR/);
      });



      // test 3 of 3
	  it('should be "RRhrat?"', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText).toBe("RRhrat?");
      });

    });

  });

});
