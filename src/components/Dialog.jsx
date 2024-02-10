import React from 'react';
import Input from './Input';

const Dialog = ({ id }) => {
    const handleSubmit = (event, id) => {
        event.preventDefault()
        const form = event.target
        const img = form.img.value
        const firstName = form.first_name.value
        const lastName = form.last_name.value
        const email = form.email.value
        const address = form.address.value
        const city = form.city.value
        const state = form.state.value
        const companyName = form.com_name.value
        // console.log(img, firstName,lastName, email, address, city, state)

        const data = {
            firstName: firstName,
            lastName: lastName,
            image: img,
            email: email,
            address: {
                address: address,
                city: city,
                state: state
            },
            company: {
                name: companyName
            }

        }


        fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => (
                res.json()
            ))
            .then(console.log);

        form.reset()
        document.getElementById(id).close()
    }
    return (
        <dialog id={id} className="modal lg:w-[40%] sm:w-[60%] w-[90%] mx-auto">
            <div className="modal-box">
                <div className='flex justify-between items-center mb-3'>
                    <h1 className='font-bold text-2xl'>Add Item</h1>
                    <button onClick={() => document.getElementById(id).close()} className="btn btn-sm btn-circle btn-ghost">✕</button>
                </div>
                <form method="dialog" onSubmit={(e) => handleSubmit(e, id)}>

                    <>
                        <Input title={"Image Link"} type={'text'} name={'img'} />
                        <div className='flex gap-3'>
                            <Input title={"First Name"} type={'text'} name={'first_name'} />
                            <Input title={"Last Name"} type={'text'} name={'last_name'} />
                        </div>
                        <Input title={"Email"} type={'email'} name={'email'} />
                        <Input title={"Address"} type={'text'} name={'address'} />
                        <div className='flex gap-3'>
                            <Input title={"City"} type={'text'} name={'city'} />
                            <Input title={"State"} type={'text'} name={'state'} />
                        </div>
                        <Input title={"Company Name"} type={'text'} name={'com_name'} />

                    </>
                    <div className='flex justify-center'>
                        <button type='submit' className="btn text-xl font-bold mt-5">Submit</button>
                    </div>
                </form>
            </div>
        </dialog>
    );
};

export default Dialog;