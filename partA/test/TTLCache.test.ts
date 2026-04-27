import { CacheFactory, CacheType } from "../lib/api/CacheFactory";

describe("TTLCache Tests", () => {
    const ttl = CacheFactory.createCache<string>(CacheType.TTL, 500); // 500ms TTL

    test("Хугацаа дуусаагүй байхад утга авах", () => {
        ttl.set("key1", "value1");
        expect(ttl.get("key1")).toBe("value1");
    });

    test("Хугацаа дууссаны дараа утга null болох", (done) => {
        ttl.set("key2", "value2");
        setTimeout(() => {
            expect(ttl.get("key2")).toBe(null);
            done();
        }, 600); // 500ms-ээс их хугацаа хүлээх
    });

    test("Устгах болон цэвэрлэх үйлдэл", () => {
        ttl.set("key3", "value3");
        ttl.delete("key3");
        expect(ttl.get("key3")).toBe(null);
    });
});