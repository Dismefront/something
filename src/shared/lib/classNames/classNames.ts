type Mods = Record<string, string | boolean>

export function classNames(cls: string, mods: Mods, additional: string[]):string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([cls, val]) => Boolean(val))
            .map(([cls]) => cls)
    ].join(' ');
}