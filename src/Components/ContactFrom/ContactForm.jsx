import { MdMail, MdMessage, MdPhone } from 'react-icons/md';
import Button from '../Button/Button';
import styles from  './ContactForm.module.css';
const ContactForm = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Button text='Via Support Chat' icon={<MdMessage fontSize='1.5rem'/>} />
                    <Button text='Via Call' icon={<MdPhone fontSize='1.5rem'/>} />
                </div>
                <Button isSecondary={true} text='Via E-mail Form' icon={<MdMail fontSize='1.5rem'/>} />
                <form className={styles.form_container}>
                    <div className={styles.form_controller}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name'/>
                    </div>
                    <div className={styles.form_controller}>
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" name='E-mail'/>
                    </div>
                    <div className={styles.form_controller}>
                        <label htmlFor="comments">Comments</label>
                        <textarea type="text" rows="5" name='comments'/>
                    </div>
                    <div style={{display:"flex",justifyContent:"end"}}>
                        <Button text="Submit Button"/>
                    </div>
                </form>
            </div>
            <div className="styles contact_img">
                <img src="../../public/Images/Contact_us.png" alt="contact_image" />
            </div>
        </div>
    );
}
export default ContactForm;