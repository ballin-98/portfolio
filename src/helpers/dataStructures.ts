import { ref, type Ref } from 'vue'

export class CircularArray<T> {
  public array: T[]
  public currentIndex: Ref<number>

  constructor(size: number) {
    this.array = new Array<T>(size)
    this.currentIndex = ref(0)
  }

  // Add an element to the circular array
  push(element: T): void {
    this.array[this.currentIndex.value] = element
    this.currentIndex.value = (this.currentIndex.value + 1) % this.array.length
  }

  // Get the current element at the cursor
  getCurrent(): T | undefined {
    return this.array[this.currentIndex.value]
  }

  // Get the current index
  getCurrentIndex(): number {
    return this.currentIndex.value
  }

  // Move the cursor to the next element
  moveNext(): void {
    this.currentIndex.value = (this.currentIndex.value + 1) % this.array.length
  }

  // Move the cursor to the previous element
  movePrevious(): void {
    this.currentIndex.value = (this.currentIndex.value - 1 + this.array.length) % this.array.length
  }

  // Reset the circular array with a new array
  reset(newArray: T[]): void {
    this.array = newArray
    this.currentIndex.value = 0
  }
}
