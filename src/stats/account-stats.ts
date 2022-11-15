import { AccountStat } from "../../generated/schema";

function getOrCreateStats(accountId: string): AccountStat {
    const stats = AccountStat.load(accountId);

    if (stats) {
        return stats;
    }

    const newStats = new AccountStat(accountId);

    return newStats;
}

export class AccountStatsApi {
    private stats: AccountStat;

    constructor(accountId: string) {
        this.stats = getOrCreateStats(accountId);
    }

    public nftSend(): void {
        this.stats.transactionTotal++;
        this.stats.nftTransferTotal++;
        this.stats.nftTotal--;
    }

    public nftReceive(): void {
        this.stats.nftTotal++;
    }

    public nftBuy(): void {
        this.stats.nftBurnTotal++;
    }

    public nftSell(): void {
        this.stats.nftSellTotal++;
    }

    public nftBurn(): void {
        this.stats.nftBurnTotal++;
    }

    public marketCreate(): void {
        this.stats.transactionTotal++;
        this.stats.marketSaleTotal++;
    }

    public marketBuy(): void {
        this.stats.transactionTotal++;
        this.stats.marketSaleTotal--;
    }

    public marketSell(): void {
        this.stats.transactionTotal++;
    }

    public marketRemove(): void {
        this.stats.transactionTotal++;
        this.stats.marketSaleTotal--;
    }

    public marketUpdate(): void {
        this.stats.transactionTotal++;
    }

    public save(): void {
        this.stats.save();
    }
}
