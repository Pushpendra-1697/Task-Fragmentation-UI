// This component displays the burn transactions in a tabular format.

import React from 'react';

interface BurnTxTableProps {
    data: any[];
    priceUSD: number;
}

const BurnTxTable: React.FC<BurnTxTableProps> = ({ data, priceUSD }) => {
    return (
        <table>
            {/* Table headers */}
            <tbody>
                {data.map((tx, index) => (
                    <tr key={index}>
                        {/* Table rows */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BurnTxTable;

