class StringBuilder {
  #value;
  constructor(initialvalue) {
    this.#value = initialvalue;
  }

  getValue() {
    return this.#value;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
