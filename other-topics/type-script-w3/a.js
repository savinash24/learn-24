var MyClass = /** @class */ (function () {
    function MyClass(initialValue) {
        if (initialValue === void 0) { initialValue = 0; }
        this.value = initialValue;
    }
    MyClass.prototype.setValue = function (newValue) {
        this.value = newValue;
        console.log("this",this);
        return this;
    };
    MyClass.prototype.addValue = function (amount) {
        this.value += amount;
        return this;
    };
    MyClass.prototype.multiplyValue = function (factor) {
        this.value *= factor;
        return this;
    };
    MyClass.prototype.printValue = function () {
        console.log(this.value);
        return this;
    };
    return MyClass;
}());
// Usage
var obj = new MyClass();
console.log(obj);
obj.setValue(10)
    .addValue(5)
    .multiplyValue(2)
    .printValue(); // Output: 30
