import { ICache } from "../api/ICache";

export class TTLCache<T> implements ICache<T> {
    private cache = new Map<string, { value: T, expiry: number }>();
    constructor(private readonly ttlMs: number) {}

    get(key: string): T | null {
        const item = this.cache.get(key);
        if (!item) return null;
        if (Date.now() > item.expiry) {
            this.cache.delete(key);
            return null;
        }
        return item.value;
    }

    set(key: string, value: T): void {
        this.cache.set(key, { value, expiry: Date.now() + this.ttlMs });
    }

    delete(key: string): void { this.cache.delete(key); }
    clear(): void { this.cache.clear(); }
}