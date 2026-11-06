interface Manager<T = unknown> {
    fetch(id: string, ...args: any[]): Promise<T>;
    get(id: string): T | undefined;
}

export async function getOrFetch<M extends Manager>(manager: M, id: string): Promise<NonNullable<ReturnType<M["get"]>>> {
    const cached = manager.get(id);
    return cached ?? (await manager.fetch(id)) as any;
}
