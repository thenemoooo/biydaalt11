import { ICache } from "./ICache";
import { LRUCache } from "../impl/LRUCache";
import { TTLCache } from "../impl/TTLCache";

/**
 * Кэш төрлүүд
 */
export enum CacheType { 
    LRU, 
    TTL 
}

/**
 * Factory паттерн ашиглан бодит хэрэгжүүлэлтийг нуух класс [cite: 42]
 */
export class CacheFactory {
    public static createCache<T>(type: CacheType, param: number = 100): ICache<T> {
        switch (type) {
            case CacheType.LRU: 
                return new LRUCache<T>(param);
            case CacheType.TTL: 
                return new TTLCache<T>(param);
            default: 
                throw new Error("Unsupported cache type");
        }
    }
}