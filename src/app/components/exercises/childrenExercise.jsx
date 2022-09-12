import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <ChildrenList>
                <Component />
                <Component />
                <Component />
            </ChildrenList>
        </CollapseWrapper>
    );
};

const ChildrenList = ({ children }) => {
    const childrenArr = React.Children.toArray(children);
    return React.Children.map(childrenArr, (child) => {
        const config = {
            ...child.props,
            number: +child.key.replace(".", "") + 1
        };

        return React.cloneElement(child, config);
    });
};

ChildrenList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const Component = ({ number }) => {
    return <div>{number} Компонент списка</div>;
};

Component.propTypes = {
    number: PropTypes.number
};

export default ChildrenExercise;
