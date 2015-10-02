define(['Translator'], function(Translator){

  describe('Rule03: ', function(){
    describe('Zombify Function - the starts of sentences are capitalized', function(){


      // initialize translator
  	  var translator= new Translator();


	  // set test word
	  var testWord= "Set? go!";


      // test 1 of 3
      it('should return at least as many characters as it read in"', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText.length >= testWord.length).toBeTruthy()
      });


      // test 2 of 3
	  it('should match /G/', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText).toMatch(/G/);
      });



      // test 3 of 3
	  it('should be "Srrt? GrrrRr!"', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText).toBe("Srrt? GrrrRr!");
      });

    });

  });

});
