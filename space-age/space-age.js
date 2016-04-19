var num = 31557600
function SpaceAge(input){
	this.seconds = input;
	this.onEarth = function(){
		return +(input/num).toFixed(2)
	};
	this.onMercury = function(){
		return +(input/ (num * 0.2408467)).toFixed(2)
	}
	this.onVenus = function(){
		return +(input/ (num * 0.61519726)).toFixed(2)
	}
	this.onMars = function(){
		return +(input/ (num * 1.8808158)).toFixed(2)
	}
	this.onJupiter = function(){
		return +(input/ (num * 11.862615)).toFixed(2)
	}
	this.onSaturn = function(){
		return +(input/ (num * 29.447498)).toFixed(2)
	}
	this.onUranus = function(){
		return +(input/ (num * 84.016846)).toFixed(2)
	}
	this.onNeptune = function(){
		return +(input/ (num * 164.79132)).toFixed(2)
	}
}



module.exports = SpaceAge;