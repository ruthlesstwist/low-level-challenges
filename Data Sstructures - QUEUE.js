
function Queue() {
	var collection = [];
	this.print = function() {
		console.log(collection);
	};
	//that is a normal enqueue
	/*
	this.enqueue = function(element) {
	collection.push(element);
	};
	*/
	//this is a priority enqueue
	this.enqueue = function(element) {
		if(this.isEmpty()) {
			collection.push(element);
		} else {
			var added = false;
			for (let i = 0; i < collection.length; i++) {
				if(element[1] < collection[i][1]) {
					collection.splice(i,0,element);
					added = true;
					break;
				}
			}
			if (!added) {
				collection.push(element);
			}
		}
	};
	this.dequeue = function() {
		return collection.shift();
	};
	this.front = function() {
		return collection[0];
	};
	this.size = function() {
		return collection.length;
	};
	this.isEmpty = function() {
		return (collection.length === 0);
	};
}
var r = new Queue;
r.enqueue(['z',4]);
r.enqueue(['b',3]);
r.enqueue(['r',2]);
r.enqueue(['l',1]);
r.print()