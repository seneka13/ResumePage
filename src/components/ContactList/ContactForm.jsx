import React, { useState } from 'react';




function ContactForm({saveData}) {
    const [photo, setPhoto] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    
    const createContact = ()=>{
        let studObj = {
            name,
            phone,
            address,
            imgSrc:photo
        }

            saveData(studObj)
    }


    return (
    <div>
        <form>
            <label>
                
                <input type='text' value ={photo} onChange={(e) => setPhoto(e.target.value)} placeholder="Photo"/>
            </label>
            <label>
                
                <input type='text' value ={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
            </label>
            <label>
                
                <input type='text' value = {phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone"/>
            </label>
            <label>
                
                <input type='text' value = {address} onChange={(e) => setAddress(e.target.value)} placeholder="Address"/>
            </label>
        </form>
        <button onClick={createContact}>Создать контакт</button>
    </div>
    )
}

export default ContactForm
