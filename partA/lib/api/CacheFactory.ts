import { ICache } from "./ICache";

export enum CacheType {
    LRU,
    LFU,
    TTL
}

/**
 * Кэш объект үүсгэх Factory класс.
 * Concrete хэрэгжүүлэлтүүдийг нуух зорилготой.
 */
export class CacheFactory {
    public static createCache<T>(type: CacheType, capacity: number = 100): ICache<T> {
        // Хэрэгжүүлэлтүүдийг маргааш нэмнэ
        throw new Error("Implementation will be added in Day 3");
    }
}