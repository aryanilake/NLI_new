// TableHeader.js
import React from 'react';
import TooltipIcon from './TooltipIcon.jsx';

const TableHeader = ({ headers }) => {
    return (
        <thead>
            <tr>
                {headers.map((header, index) => (
                    <th key={index} className="border-b">
                        <div className="flex h-10 text-center items-center justify-center">
                            <div className={header.className} style={{ overflow: "auto" }}>{header.label}</div>
                            {header.tooltip && (
                                <TooltipIcon alt={header.label} content={header.tooltip} />
                            )}
                        </div>
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHeader;