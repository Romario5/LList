/**
* Constructor of the linked list.
*/
function LList ()
{
	this.first = null;
	this.last = null;
	this.length = 0;
}
LList.prototype = {constructor : LList};


/**
* Constructor of the linked list item.
*/
function LLItem(data)
{
	this.next = null;
	this.prev = null;
	this.data = data === undefined ? null : data;
	this.list = null;
}


/**
 * Pushes new item into the end of the list.
 * @param data - Data of the new item.
 * @returns {Integer} - Length of the list after pushing.
 */
LList.prototype.push = function(data)
{
	var newItem = new LLItem(data);
	newItem.list = this;
	this.length++;

	if(this.first === null){
		this.first = newItem;
		this.last = newItem;
	}else{
		newItem.prev = this.last;
		this.last.next = newItem;
		this.last = newItem;
	}
	return this.length;
};



/**
 * Pushes new item into the start of the list.
 * @param data - Data of the new item.
 * @returns {Integer} - Length of the list after pushing.
 */
LList.prototype.unshift = function(data)
{
	var newItem = new LLItem(data);
	newItem.list = this;
	this.length++;

	if(this.first === null){
		this.first = newItem;
		this.last = newItem;
	}else{
		newItem.next = this.first;
		this.first.prev = newItem;
		this.first = newItem;
	}
	return this.length;
};



/**
 * Removes last item from the list.
 * @returns {Integer} - LNew length of the list after.
 */
LList.prototype.pop = function()
{
	if(this.last === null) return 0;

	this.last.prev.next = null;
	this.last = this.last.prev;
	this.length--;
	return this.length;
};



/**
 * Removes first item from the list.
 * @returns {Integer} - LNew length of the list after.
 */
LList.prototype.shift = function()
{
	if(this.first === null) return 0;
	this.first.next.prev = null;
	this.first = this.first.next;
	this.length--;
	return this.length;
};



/**
* Returns all items data as simple JS array.
* @returns {Array}
*/
LList.prototype.asArray = function()
{
	var result = [];
	var item = this.first;
	while(item !== null){
		result.push(item.data);
		item = item.next;
	}
	return result;
};



/**
* Returns item (LLItem) of the list with specified index.
* @param index {Integer}
* @returns {LLItem | null}
*/
LList.prototype.item = function(index)
{
	if(this.first === null) return null;
	if(index > this.length || this.length === 1) return this.last;


	var i, item;

	if(index < 0){
		i = 1;
		var absIndex = Math.abs(index);
		item = this.last;
		while(item !== null){
			if(i === absIndex) return item;
			item = item.prev;
			i++;
		}

	}else if(index < this.length/2){
		i = 0;
		item = this.first;
		while(item !== null){
			if(i === index) return item;
			item = item.next;
			i++;
		}

	}else{
		i = this.length - 1;
		item = this.last;
		while(item !== null){
			if(i === index) return item;
			item = item.prev;
			i--;
		}
	}
	return null;
};


/**
* Returns item's data of the list with specified index.
* @param index {Integer}
* @returns { * | null}
*/
LList.prototype.data = function(index)
{
	var item = this.item(index);
	if(item !== null) return item.data;
	return null;
};



/**
* Applies function to each item data of the list and returns new LList object with new data.
* @param func {Function} - Function that will be executed for each item data.
* 		Arguments: 
*		 	data  - current item's data
* 			index - index of the current item
*			list  - LList on which .map() method was called
*		this - current item (LLItem)
* @returns {LList}
*/
LList.prototype.map = function(func)
{
	var index = 0, result = new LList(), item = this.first;
	if(typeof func !== 'function') {
		console.warn('LList.map: Function is required as argument, but ' + (typeof func) + ' is given.');
		return result;
	}
	while(item !== null){
		result.push(func.call(item, item.data, index, this));
		item = item.next;
		index++;
	}
	return result;
};



/**
* Applies function to each item data of the list and returns itself.
* This function changes initial values.
* @param func {Function} - Function that will be executed for each item data.
* 		Arguments: 
*		 	data  - current item's data
* 			index - index of the current item
*			list  - LList on which .map() method was called
*		this - current item (LLItem)
* @returns {LList}
*/
LList.prototype.withEach = function(func)
{
	var index = 0, item = this.first;
	if(typeof func !== 'function') {
		console.warn('LList.withEach: Function is required as argument, but ' + (typeof func) + ' is given.');
		return this;
	}
	while(item !== null){
		item.data = func.call(item, item.data, index, this);
		item = item.next;
		index++;
	}
	return this;
};



/**
* Deletes item from the list.
* @returns {Integer} - New length of the list.
*/
LLItem.prototype.delete = function()
{
	if(this.prev !== null) this.prev.next = this.next;
	if(this.next !== null) this.next.prev = this.prev;
	if(this.list.first === this) this.list.first = this.next;
	if(this.list.last === this) this.list.last = this.prev;
	delete this.next;
	delete this.prev;
	return --this.list.length;
};


/**
* Deletes item with specified index from the list.
* @param index {Integer}
* @returns {Integer} - New length of the list.
*/
LList.prototype.delete = function(index)
{
	var item = this.item(index);
	if(item !== null) item.delete();
	return this.length;
};


if(typeof module !== 'undefined') module.exports = LList;