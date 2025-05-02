

export interface ISellable {
    sell(dialog: HTMLDialogElement): void
    getSaleInfo(): string
}