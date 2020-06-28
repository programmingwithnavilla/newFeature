export const Conditional = ({ checkRender, children }) => {
    return !!checkRender && children;
};


