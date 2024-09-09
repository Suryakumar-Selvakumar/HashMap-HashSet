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

  get(key) {
    const index = this.hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    return this.buckets[index].fetchValue(key);
  }

  has(key) {
    const index = this.hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    if (this.buckets[index] != null) {
      return this.buckets[index].contains(key);
    }
    return false;
  }

  remove(key) {
    const index = this.hash(key);
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    if (this.buckets[index] != null) {
      this.buckets[index].removeLL(key);
    }
  }

  length() {
    return this.keys().length;
  }

  clear() {
    this.buckets.forEach((bucket) => {
      if (bucket != null) {
        bucket = null;
      }
    });
  }

  keys() {
    const keysArray = [];
    this.buckets.forEach((bucket) => {
      if (bucket != null) {
        keysArray = keysArray.concat(bucket.fetchKeys());
      }
    });
    return keysArray;
  }

  values() {
    const valuesArray = [];
    this.buckets.forEach((bucket) => {
      if (bucket != null) {
        valuesArray = valuesArray.concat(bucket.fetchValues());
      }
    });
    return valuesArray;
  }

  entries() {
    const entriesArray = [];
    this.buckets.forEach((bucket) => {
      if (bucket != null) {
        entriesArray = entriesArray.concat(bucket.fetchEntries());
      }
    });
    return entriesArray;
  }
}
