define(['Translator'], function(Translator){

  describe('Rule07: ', function(){
    describe('Zombify Function - replace /(u|U)/ with /rrrrRr/', function(){


      // initialize translator
  	  var translator= new Translator();


	  // set test word
	  var testWord= "up";


      // test 1 of 3
      it('should return at least as many characters as it read in"', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText.length >= testWord.length).toBeTruthy()
      });


      // test 2 of 3
	  it('should match /rrrrRr/', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText).toMatch(/rrrrRr/);
      });



      // test 3 of 3
	  it('should be "rrrrRrp"', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText).toBe("rrrrRrp");
      });

    });

  });

});
