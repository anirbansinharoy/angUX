export class List<T> {
    private items: Array<T>;

    constructor() {
        this.items = [];
    }

    size(): number {
        return this.items.length;
    }

    add(value: T): void {
        this.items.push(value);
    }

   addAll(value: T[]): void {
       for (var item of value) {
        this.items.push(item);
       }
    }
    
    get(index: number): T {
        return this.items[index];
    }
    
    sort(): T[] {
        return this.items.sort();
    }
}

export class Map<T> {
    private items: { [key: string]: T };

    constructor() {
        this.items = {};
    }

    add(key: string, value: T): void {
        this.items[key] = value;
    }

    has(key: string): boolean {
        return key in this.items;
    }

    get(key: string): T {
        return this.items[key];
    }
}