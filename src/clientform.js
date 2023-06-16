import React, {useState} from "react";

function ClientForm(){
    const [name, SetName] = useState('');
    const[phonenumber, SetPhoneNumber] = useState('');
    const[email, SetEmail] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    function SubmitForm(event) {
        event.preventDefault();
        console.log('Submitted',name,phonenumber,email);
        if (name !== ' ' && phonenumber !== ''){
            setFormSubmitted(true)
        }
        
    }

    return (
        <form onSubmit={SubmitForm}>
            <h2 style={{textAlign:'center'}}> Fill out this form if you are interested in planning a wedding!</h2>
            <label>
                Name:
                <input type="text" value={name} onChange={e => SetName(e.target.value)}/>
            </label>
            <label>
                Phone Number:
                <input type="phonenumber" value={phonenumber} onChange={e => SetPhoneNumber(e.target.value)}/>
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={e => SetEmail(e.target.value)}/>
            </label>
            <br />
            <button type="submit">Submit</button>
            {formSubmitted && <p>Thank you for completing the form! We will contact you shortly!</p>}
        </form>
    )
}

export default ClientForm;
