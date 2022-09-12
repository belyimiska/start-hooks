import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [otherState, setOtherState] = useState(false);

    useEffect(() => {
        renderCount.current++;
    });

    const toggleOtherState = () => {
        setOtherState(!otherState);
    };

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>

            <p>Render Count: {renderCount.current}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                Toggle other state
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
