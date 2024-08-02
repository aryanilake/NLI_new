// TooltipIcon.js
import React, { useState } from 'react';
import info from "../assets/info.svg";

const TooltipIcon = ({ alt, content }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="pl-2 inline-block">
            <img
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                src={info}
                alt={alt}
                className="h-5"
            />
            {showTooltip && (
                <div
                    className="absolute z-10 w-[30vh] flex bg-[#FFFFFF] rounded-2xl p-2"
                    style={{
                        border: '2px solid black',
                        transform: "translate(-50%,-130%)",
                        maxHeight: '200px',
                        overflow: 'auto',
                    }}
                >
                    {content}
                </div>
            )}
        </div>
    );
};

export default TooltipIcon;