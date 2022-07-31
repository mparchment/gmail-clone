import "./SendMail.css"
import CloseIcon from "@material-ui/icons/Close"
import { Button } from "@material-ui/core"
import { useForm } from "react-hook-form"
import { db, time } from "./firebase"

function SendMail( { composeEmail } ) {
    const { register, handleSubmit } = useForm();

    const onSubmit = (formData) => {

        // Push the object onto the database
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            time: time
        }).then(() => {
            console.log(formData);
        });

        composeEmail(false);
    };

    return(
        <div className="sendMail">
            <div className="sendMail-header">
                <h3>New Message</h3>
                <CloseIcon onClick={() => composeEmail(false)} className="sendMail-close"/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('to', {required:true})} placeholder="To" type="email"/>
                <input {...register('subject', {required:true})} placeholder="Subject" type="text"/>
                <input {...register('message', {required:true})} placeholder="Message..." type="text" className="sendMail-message"/>

                <div className="sendMail-options">
                    <Button className="sendMail-send" variant="contained" color="primary" type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail;