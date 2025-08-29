import { CSSTransition } from "react-transition-group";
import { useRef, useState } from "react";

/**
 * AddtodoWrapper
 * A reusable wrapper component that adds a fade-in/out animation to its children.
 */
export const AddtodoWrapper = ({ children }) => {
    // Control visibility for animation
    const [show, setShow] = useState(true);

    // Reference to the DOM node for CSSTransition
    const nodeRef = useRef(null);

    return (
        <CSSTransition
            in={show}               // Controls whether the children are visible
            timeout={300}           // Animation duration
            classNames="fade"       // CSS class for animations
            unmountOnExit           // Remove from DOM when hidden
            nodeRef={nodeRef}       // Reference to the DOM node
        >
            <div ref={nodeRef}>
                {children}            {/* Render the wrapped content */}
            </div>
        </CSSTransition>
    );
};
