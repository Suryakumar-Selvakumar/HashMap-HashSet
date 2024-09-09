import { LinkedList } from "./linkedList.js";

class HashMap {
  constructor() {
    this.buckets = [];
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode =
        (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    //Object.keys(obj).length === 0 && obj.constructor === Object
    if (this.buckets[index] != null) {
      if (this.buckets[index].contains(key))
        this.buckets[index].updateKeyValue(key, value);
      else this.buckets[index].append(key, value);
    } else {
      this.buckets[index] = new LinkedList();
      this.buckets[index].append(key, value);
    }

    // Add code later to grow the bucket
  }


}
