/**
 * Кэш сангийн ерөнхий интерфейс.
 * T - утгын төрөл
 */
export interface ICache<T> {
    /**
     * Кэш-ээс утга авах. Олдохгүй бол null буцаана.
     */
    get(key: string): T | null;

    /**
     * Кэш-д утга хадгалах.
     */
    set(key: string, value: T): void;

    /**
     * Түлхүүрээр утга устгах.
     */
    delete(key: string): void;

    /**
     * Бүх кэшийг цэвэрлэх.
     */
    clear(): void;
}