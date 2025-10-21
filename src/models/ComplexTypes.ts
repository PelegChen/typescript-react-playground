

export type UnionTypeExample = string | number | boolean; // can be string, number, or boolean
export type OptionalTypeExample = {
    id: number;
    name?: string; // name is optional
};
export type GenericTypeExample = Array<string>; // array of strings