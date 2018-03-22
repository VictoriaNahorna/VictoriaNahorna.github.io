// new SWPrecacheWebpackPlugin({
// 	cacheId: ""+ Math.random(),
// 	filename:"service-worker.js",
// 	staticFileGlobs: ["dist/*.*"],
// 	minify: false,
// 	stripPrefix: "dist/*"
// }),

// юнит тест что проверяет 2 в степени 2. Ожидаемый результат =4

describe("Test group for front-app", function(){
	it ("should return a second pow", function(){
		expect(Math.pow(2,2)).toBe(4);
	})
	it (""), function(){
		expect (Math.pow(2,3)).not.toBe(4);
		expect(+promt('')).toBeGreaterThan(6)
	}
})


// отбрасывать дробную часть числа (Math.trunc/Math.discard)


describe("Test group for front-app", function(){
	it ("discard the fractional part of a number", function(){
		expect(Math.discard(4.5)).toBe(4);
		expect(Math.discard(5.99)).toBe(5);
		expect(Math.discard(5.99)).not.toBe(6);


	})
})

// округление 

describe("Test group for front-app", function(){
	it ("round the number by the rules", function(){
		expect(Math.round(4.5)).toBe(5);
		expect(Math.round(5.99)).toBe(6);
		expect(Math.round(5.3)).toBe(5);

	})
})



//вернуть написанное число

describe("Test group for front-app", function(){
	it ("return the number written", function(){
		expect(Math.round(4.5)).toBe(4.5);
		expect(Math.round(6)).toBe(6);
		expect(Math.round(5.3)).toBe(5.3);
		expect(Math.discard(5.99)).not.toBe(6);
		expect(Math.discard(599)).not.toBe(6.0);

	})
})

// умножение чисел

describe("Test group for front-app", function(){
it("multiplication of numbers", function(){
		expect(Math.mult(2,3)).toBe(6);
		expect(Math.mult(2,3)).not.toBe(9);
	})

})

// замена всех букв а на о в слове (Влад. = Влод)

// передать строку "itea". indexof ('w').tobe(-1)


describe('Test group for string', function(){

	it('show the word with a replacement', function(){
		expect('Vlad'.replace( /a/g, "o" )).toBe('Vlod');
	})
	it('will show the word index', function(){
		expect('Iteaw'.indexOf("w")).not.toBe(-1);
	})
})	

// remove all consonants from the test
function index(word) {
	return word.indexOf("w");
};

describe('remove all consonants from the test', function(){ 

	it("should find \"w\" ", () => {
		expect("AJAX".indexOf("w")).not.toBe("J,X");
	})
})	

// выдать неправильное значение

describe('Test group for front-app', function(){
it('value must be wrong', function(){
		expect(1500 < 150).toBeFalsy(1500);
	})
})

// не пустая строка

describe('Test group for front-app', function(){
it('value must not be null', function(){
		expect(456).not.toBeNull();
	})

})
	
	
	