define(['Translator'], function(Translator){

  describe('Rule06: ', function(){
    describe('Zombify Function - replace /(o|O)/ with /rrrRr/', function(){


      // initialize translator
  	  var translator= new Translator();


	  // set test word
	  var testWord= "No!";


      // test 1 of 3
      it('should return at least as many characters as it read in"', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText.length >= testWord.length).toBeTruthy()
      });


      // test 2 of 3
	  it('should match /rrrRr/', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText).toMatch(/rrrRr/);
      });



      // test 3 of 3
	  it('should be "YrrrRr!"', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText).toBe("NrrrRr!");
      });

    });

  });

});
