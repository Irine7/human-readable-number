module.exports = function toReadable (number) {
		let result = '';
		
		const num1 = number.toString()[0];
		const num2 = number.toString()[1];
		const num3 = number.toString()[2];
		const lastDigit = number.toString().substr(1) // Находим подстроку последней цифры
	
		const object1 = { 0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'};
		const object2 = { 1: "ten", 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'};
		const hun = 'hundred';
	
		if (number <= 19) { // От 0 до 19
			return `${object1[number]}`;
	
		} else if (number >= 20 && number <= 99) { 
			if (number % 10 === 0) {
				return object2[num1]; // 20, 30.., 90
			} else { // 21-99
			return `${object2[num1]} ${object1[num2]}`;
			}
		} else if (number >= 100 && number <= 999) {
			if (number % 100 === 0) { // 100, 200.., 900
				return `${object1[num1]} ${hun}`;
			} else if (number % 10 === 0) { // 110, 120.., 990
				return `${object1[num1]} ${hun} ${object2[num2]}`;
			} else if (number % 100 < 10) { // 101-109.., 901-909
				return `${object1[num1]} ${hun} ${object1[num3]}`;
			} else if (number % 100 > 10 && number % 100 < 20) { // 111-119.., 911-919
				return `${object1[num1]} ${hun} ${object1[lastDigit]}`;
			} else { // 121-199.., 921-999
				return `${object1[num1]} ${hun} ${object2[num2]} ${object1[num3]}`;
			}
		}
	}