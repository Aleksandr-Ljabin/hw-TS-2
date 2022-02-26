import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];
    totalSum: number = 0;
    totalSumDis: number = 0;
    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    getSum(): number {
        // let totalSum: number = 0;
        for (let i = 0; i < this._items.length; i++) {
            this.totalSum += this._items[i].price;
        }
        console.log(this.totalSum);
        return this.totalSum;
    }

    getSumDis(dis: number): number {
        this.totalSumDis = this.totalSum - (this.totalSum * dis / 100);
        console.log(this.totalSumDis);
        return this.totalSumDis;
    }

    delItems(idDel: number) {
        function w(el: any) {
            if (el.id == idDel) {
                return el.id;
            };
        }
        let ind: number = this._items.findIndex(w);
        this._items.splice(ind, 1)
    }
}