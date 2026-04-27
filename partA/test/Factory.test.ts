import { CacheFactory, CacheType } from "../lib/api/CacheFactory";

describe("CacheFactory Tests", () => {
    test("Зөв төрлийн кэш үүсгэж буйг шалгах", () => {
        const cache = CacheFactory.createCache(CacheType.LRU);
        expect(cache).toBeDefined();
        
        const ttlCache = CacheFactory.createCache(CacheType.TTL);
        expect(ttlCache).toBeDefined();
    });

    test("Тодорхойгүй төрөлд алдаа шидэх", () => {
        expect(() => {
            (CacheFactory as any).createCache(999);
        }).toThrow();
    });
});