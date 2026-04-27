import { CacheFactory, CacheType } from "../lib/api/CacheFactory";

describe("LRUCache Tests", () => {
    const lru = CacheFactory.createCache<number>(CacheType.LRU, 2);

    test("Утга хадгалах ба авах", () => {
        lru.set("a", 1);
        expect(lru.get("a")).toBe(1);
    });

    test("Capacity хэтрэхэд хамгийн хуучныг устгах", () => {
        lru.set("a", 1);
        lru.set("b", 2);
        lru.set("c", 3); // 'a' устах ёстой
        expect(lru.get("a")).toBe(null);
        expect(lru.get("c")).toBe(3);
    });

    test("get хийхэд ашигласан хугацаа шинэчлэгдэх", () => {
        lru.clear();
        lru.set("a", 1);
        lru.set("b", 2);
        lru.get("a"); // 'a'-г ашигласан тул одоо 'b' хамгийн хуучин болно
        lru.set("c", 3); // 'b' устах ёстой
        expect(lru.get("b")).toBe(null);
        expect(lru.get("a")).toBe(1);
    });
});