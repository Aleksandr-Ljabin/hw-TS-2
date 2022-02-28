import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];
    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    getSum(): number {
        let initialValue = 0;
        let totalSum = this._items.reduce(function (a, b) {
            return a + b.price;
        }, initialValue)
        return totalSum;
    }

    getSumDis(dis: number): number {
        let getSum = this.getSum();
        let totalSumDis = getSum - (getSum * dis / 100);
        console.log(totalSumDis);
        return totalSumDis;
    }

    delItems(idDel: number) {
        this._items = this.items.filter((item: Buyable) => item.id !== idDel);
        return this._items
    }
}