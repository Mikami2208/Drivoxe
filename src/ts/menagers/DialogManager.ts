
export class DialogManager{
    private dialog : HTMLDialogElement;
    constructor(dialog : HTMLDialogElement){
        this.dialog = dialog
    }

    show(){
        document.body.classList.add('_lock')
        this.dialog.showModal()
    }

    close(){
        document.body.classList.remove('_lock')
        this.dialog.close()
    }
}