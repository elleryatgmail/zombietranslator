define(['Translator'], function(Translator){

  describe('Rule01: ', function(){
    describe('Zombify Function - replace /r$/ with /rh$/', function(){


      // initialize translator
  	  var translator= new Translator();


	  // set test word
	  var testWord= "jr";


      // test 1 of 3
      it('should return at least as many characters as it read in"', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText.length >= testWord.length).toBeTruthy()
      });


      // test 2 of 3
	  it('should match /rh$/', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText).toMatch(/rh$/);
      });



      // test 3 of 3
	  it('should be "jrh"', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText).toBe("jrh");
      });

    });

  });

});
