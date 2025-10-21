import type { Child } from "../models/Child";

export const ChildIdCard = (props: { child: Child }) => {
    const { child } = props;
    return (
        <div className="w-54 h-64 border-2 border-black rounded-md flex flex-col items-center justify-center m-4">
            <h2 className="text-3xl font-bold">{child.name}</h2>
            <div className="text-[100px]">{child.emoji}</div>
            <p>Age: {child.age} </p>
        </div>
    );
};
