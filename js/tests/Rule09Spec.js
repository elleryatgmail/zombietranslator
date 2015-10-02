define(['Translator'], function(Translator){

  describe('Rule09: ', function(){
    describe('Zombify Function - replace /(y|Y)/ with /YY/', function(){


      // initialize translator
  	  var translator= new Translator();


	  // set test word
	  var testWord= "python";


      // test 1 of 3
      it('should return at least as many characters as it read in"', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText.length >= testWord.length).toBeTruthy()
      });


      // test 2 of 3
	  it('should match /YY/', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText).toMatch(/YY/);
      });



      // test 3 of 3
	  it('should be "pYYthrrrRrn"', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText).toBe("pYYthrrrRrn");
      });

    });

  });

});
