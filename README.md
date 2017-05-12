# LList
Linked list implementation on JS.

##List's methods
Method | Description
------------ | -------------
`push(data)` | Pushes new item into the end of a list.
`unshift(data)` | Inserts new item into the start of a list.
`pop()` | Deletes last item from a list. Returns new length of a list.
`shift()` | Deletes first item from a list. Returns new length of a list.
`asArray()` | Returns array with list items in order they was added.
`delete(index)` | Deletes element from the list with specified index.
`map(func)` | Executes function `func` for each list item. Arguments of the function: *data*, *index*, *list*. *this* - list item. 
`withEach(func)` | Works similar with `map()`, but changes initial data and returns initial LList if returned value is not undefined.
`data(index)` | Returns data of the item with specified index.
`item(index)` | Returns item with specified index.
`indexOf(data)` | Returns index (beginning from zero) of the item with the specified data.
`has(data)` | Returns *true* if item with specified data exists in the list. Otherwise returns *false*.
###List item's methods
Method | Description
------------ | -------------
`delete()` | deletes item from the list. Returns new length of a list.

##Usage
```javascript
var arr_1 = new LList();        // Create new linked list.
arr_1.push(2);                  // Add item with data 2 into end of the list.
arr_1.push(3);                  // Add item with data 3 into end of the list.
arr_1.unshift(1);               // Add item with data 1 to start of the list.
var item_1 = arr_1.item(1);     // Get second item (counting begins from zero)
item_1.delete();                // Delete second item.
arr_1.delete(-1);               // Delete last item from the list.
```
