define(['Translator'], function(Translator){

  describe('Rule02: ', function(){
    describe('Zombify Function - replace /(a|A)/ with /hra/', function(){


      // initialize translator
  	  var translator= new Translator();


	  // set test word
	  var testWord= "at";


      // test 1 of 3
      it('should return at least as many characters as it read in"', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText.length >= testWord.length).toBeTruthy()
      });


      // test 2 of 3
	  it('should match /hra/', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText).toMatch(/hra/);
      });



      // test 3 of 3
	  it('should be "hrat"', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText).toBe("hrat");
      });

    });

  });

});
