# LList
Linked list implementation on JS.

###List's methods
Method | Description
------------ | -------------
`push(data)` | pushes new item into the end of a list.
`unshift(data)` | inserts new item into the start of a list.
`pop()` | deletes last item from a list. Returns new length of a list.
`shift()` | deletes first item from a list. Returns new length of a list.
`asArray()` | returns array with list items in order they was added.
`delete(index)` | deletes element from the list with specified index.
`map(func)` | executes function `func` for each list item. Arguments of the function: *data*, *index*, *list*. *this* - list item. 
`withEach(func)` | works similar with `map()`, but changes initial data and returns initial LList.
###List item's methods
Method | Description
------------ | -------------
`delete()` | deletes item from the list. Returns new length of a list.

###Usage
```javascript
var arr_1 = new LList();        // Create new linked list.
arr_1.push(2);                  // Add item with data 2 into end of the list.
arr_1.push(3);                  // Add item with data 3 into end of the list.
arr_1.unshift(1);               // Add item with data 1 to start of the list.
var item_1 = arr_1.item(1);     // Get second item (counting begins from zero)
item_1.delete();                // Delete second item.
arr_1.delete(-1);               // Delete last item from the list.
```