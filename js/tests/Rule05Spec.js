define(['Translator'], function(Translator){

  describe('Rule05: ', function(){
    describe('Zombify Function - replace /(i|I)/ with /rrRr/', function(){


      // initialize translator
  	  var translator= new Translator();


	  // set test word
	  var testWord= "zit";


      // test 1 of 3
      it('should return at least as many characters as it read in"', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText.length >= testWord.length).toBeTruthy()
      });


      // test 2 of 3
	  it('should match /rrRr/', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText).toMatch(/rrRr/);
      });



      // test 3 of 3
	  it('should be "zrrRrt"', function(){
		var zombieText= translator.zombify(testWord);
        expect(zombieText).toBe("zrrRrt");
      });

    });

  });

});
