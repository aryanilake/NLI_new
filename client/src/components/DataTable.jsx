// DataTable.js
import React from 'react';
import TableHeader from './TableHeader';

const DataTable = ({ data }) => {
    const headers = [
        { label: 'ID', className: '' },
        { label: 'lsb_reset', className: 'ml-5', tooltip: 'LSB of total number of system resets.' },
        { label: 'msb_reset', className: '', tooltip: 'MSB of total number of system resets.' },
        { label: 'WD LSB', className: 'ml-5', tooltip: 'LSB of total number of resets induced by watchdog' },
        { label: 'WD MSB', className: 'ml-5', tooltip: 'MSB of total number of resets induced by watchdog' },
        { label: 'Temp1', className: 'ml-5', tooltip: 'Temperature sensor 1 reading (Temperature of Payload)' },
        { label: 'Temp2', className: 'ml-5', tooltip: 'Temperature sensor 2 reading (Temperature of Transreceiver)' },
    ];

    return (
        <div className="bg-[#fafaf9] border-black rounded-3xl relative">
            <div className="overflow-x-auto rounded-3xl">
                <table className="min-w-full border rounded-3xl">
                    <TableHeader headers={headers} />
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-200 text-center text-1xl">
                                <td className="py-2 px-4 border-b">{item.id}</td>
                                <td className="lsb-reset py-2 px-4 border-b">{item.packet_no}</td>
                                <td className="msb-reset py-2 px-4 border-b">{item.msb_reset}</td>
                                <td className="py-2 px-4 border-b">{item.wd_lsb}</td>
                                <td className="py-2 px-4 border-b">{item.wd_msb}</td>
                                <td className="py-2 px-4 border-b">{item.temp1}</td>
                                <td className="py-2 px-4 border-b">{item.temp2}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;