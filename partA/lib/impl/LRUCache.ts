import { ICache } from "../api/ICache";

export class LRUCache<T> implements ICache<T> {
    private cache = new Map<string, T>();
    constructor(private readonly capacity: number) {}

    get(key: string): T | null {
        if (!this.cache.has(key)) return null;
        const val = this.cache.get(key)!;
        this.cache.delete(key);
        this.cache.set(key, val); // Хамгийн сүүлд ашиглагдсан болгож хойш нь шилжүүлэх
        return val;
    }

    set(key: string, value: T): void {
        if (this.cache.has(key)) this.cache.delete(key);
        if (this.cache.size >= this.capacity) {
            const oldestKey = this.cache.keys().next().value;
            this.cache.delete(oldestKey);
        }
        this.cache.set(key, value);
    }

    delete(key: string): void { this.cache.delete(key); }
    clear(): void { this.cache.clear(); }
}