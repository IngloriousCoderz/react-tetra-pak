export function createCounter() {
  const counter = {
    value: 0,

    increment(amount) {
      this.value += amount;
    },

    decrement(amount) {
      this.value -= amount;
    },

    reset() {
      this.value = 0;
    },
  };

  return counter;
}
