import type { Child } from "../models/Child";

export const ChildIdCard = (props: { child: Child }) => {
    const { child } = props;
    return (
        <div className="child-id-card">
            <h2>{child.emoji} {child.name}</h2>
            <p>Type:  </p>
        </div>
    );
};
