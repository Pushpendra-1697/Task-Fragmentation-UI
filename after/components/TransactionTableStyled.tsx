// This component represents the styled container for displaying burn transactions.

import React from 'react';

interface TransactionTableStyledProps {
    children: React.ReactNode;
}

const TransactionTableStyled: React.FC<TransactionTableStyledProps> = ({ children }) => {
    return (
        <div className="transaction-table-styled">
            <div className="header">
                <p className="header_label">Burn Transactions</p>
            </div>
            {children}
        </div>
    );
};

export default TransactionTableStyled;

