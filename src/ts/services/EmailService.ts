import { ISellable } from "../interfaces/sellable.interface"
import { Car } from "../models/Car"
import emailjs from 'emailjs-com';



export class EmailService implements ISellable{
    private emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    private emailTemplateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

    constructor(){
        emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID)
    }

    public async requestPurchase(email: string, car: Car): Promise<void>{
        try{
            console.log()
            let templateParams = {
                order_id: car.getId(),
                name: car.getModel(),
                price: car.getPrice(),
                to_email: `barhatnyy05@gmail.com, ${email}`
            }

            await emailjs.send(this.emailServiceId, this.emailTemplateID, templateParams)
        }catch(e){
            console.log(e)
        }
    }
}
