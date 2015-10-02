define(['Translator'], function(Translator){

  describe('Rule01 - replace /r$/ with /rh$/', function(){
    describe('Zombify Function - replace /r$/ with /rh$/', function(){


      // initialize translator
  	  var translator= new Translator();


	  // set test word
	  var testWord= "car";


      // test 1 of 3
      it('should return at least as many characters as it read in"', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText.length >= testWord.length).toBeTruthy()
      });


      // test 2 of 3
	  it('should contain the letters "rh"', function(){
		var translator= new Translator();
		var zombieText= translator.zombify(testWord);
        expect(zombieText).toContain("rh");
      });


      // test 3 of 3
	  it('should match /rh$/', function(){
		var translator= new Translator();
		var zombieText= translator.zombify(testWord);
        expect(zombieText).toMatch(/rh$/);
      });

    });

  });

});
