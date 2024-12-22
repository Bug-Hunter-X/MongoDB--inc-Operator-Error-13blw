```javascript
// Correct use of $inc operator
db.collection.updateOne({ _id: 1 }, { $inc: { count: 1 } });
```