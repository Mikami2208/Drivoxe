
export class DialogManager{
    private dialog : HTMLDialogElement;
    constructor(dialog : HTMLDialogElement){
        this.dialog = dialog
    }

    show(){
        this.dialog.showModal()
    }

    close(){
        this.dialog.close()
    }
}