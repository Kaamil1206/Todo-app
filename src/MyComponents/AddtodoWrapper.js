import { CSSTransition } from "react-transition-group";
import { useRef, useState } from "react";

export const AddtodoWrapper = ({ children }) => {
    const [show, setShow] = useState(true);
    const nodeRef = useRef(null);

    return (
        <CSSTransition
            in={show}
            timeout={300}
            classNames="fade"
            unmountOnExit
            nodeRef={nodeRef}
        >
            <div ref={nodeRef}>
                {children}
            </div>
        </CSSTransition>
    );
};
