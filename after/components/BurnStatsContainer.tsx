// This component displays information about the token supply and includes a visual representation of the circulating and burnt tokens.

import React from 'react';
import { AppIcon, AppChip, AppExtLink } from './your-icons-path';

interface BurnStatsContainerProps {
    statsSupplies: any;
    suppliesChain: any;
    allSupplies: any[];
    walletChain: any;
}

const BurnStatsContainer: React.FC<BurnStatsContainerProps> = ({
    statsSupplies,
    suppliesChain,
    allSupplies,
    walletChain
}) => {
    return (
        <div className="top_bar">
            <AppIcon
                url="/images/token/App_new.svg"
                size={2}
                margin={0}
                fill={IconFilter.unset}
            />
            <p className="label">App SUPPLY</p>
            <AppChip
                onClick={openChainModal}
                title={walletChain?.name || "---"}
                endIcon={"/icons/expand_more.svg"}
                startIcon={`/images/token/${walletChain?.nativeCurrency?.symbol}.svg`}
            ></AppChip>
            <AppExtLink
                className=" supply_label"
                url={`${suppliesChain?.blockExplorers?.default?.url}/address/${tokenAddress}`}
            >
                View Contract
            </AppExtLink>
        </div>
    );
};

export default BurnStatsContainer;

