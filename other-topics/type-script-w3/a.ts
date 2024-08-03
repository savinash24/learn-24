class MyClass {
    value: number;

    constructor(initialValue: number = 0) {
        this.value = initialValue;
    }

    setValue(newValue: number): this {
        this.value = newValue;
        console.log(this)
        return this;
    }

    addValue(amount: number): this {
        this.value += amount;
        return this;
    }

    multiplyValue(factor: number): this {
        this.value *= factor;
        return this;
    }

    printValue(): this {
        console.log(this.value);
        return this;
    }
}

// Usage
const obj = new MyClass();
console.log(obj);

obj.setValue(10)
   .addValue(5)
   .multiplyValue(2)
   .printValue(); // Output: 30
