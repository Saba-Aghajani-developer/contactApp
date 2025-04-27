import React, { useState } from 'react';
import {v4} from  'uuid'

function Form({ name, lastName, email, phone, setName, setLastName, setEmail, setPhone, setList, setError }) {

    const addUser = () => {
        const newUser = {
            name: name,
            lastName: lastName,
            email: email,
            phone: phone,
            id: v4(),
        }
        if (newUser.name !== "" && newUser.lastName !== "" && newUser.email !== '' && newUser.phone !== '') {
            setList((list) => [...list, newUser])
            setName('');
            setLastName('');
            setEmail('');
            setPhone('');
        } else {
            setError(true)
        }
    }

    return (
        <div className='w-full h-[35vh] mt-[30px] mb-[50px] rounded-[5px] shadow-[0_2px_20px_5px_rgba(0,0,0,0.08)] flex flex-wrap justify-center content-center'>
            <div className='w-[90%] h-[40px] flex justify-between items-center  my-[10px]'>
                <input type="text" placeholder='Name' className='border w-[49%] h-full px-[10px] rounded-[7px]' value={name} onChange={(event) => { setName((name) => (event.target.value)); setError(false) }} />
                <input type="text" placeholder='Last Name' className='border w-[49%] h-full px-[10px] rounded-[7px]' value={lastName} onChange={(event) => { setLastName((lastName) => (event.target.value)); setError(false) }} />
            </div>
            <div className='w-[90%] h-[40px] flex justify-between items-center  my-[10px]'>
                <input type="email" placeholder='Email' className='border w-[49%] h-full px-[10px] rounded-[7px]' value={email} onChange={(event) => { setEmail((email) => (event.target.value)); setError(false) }} />
                <input type="number" placeholder='Phone' className='border w-[49%] h-full px-[10px] rounded-[7px]' value={phone} onChange={(event) => { setPhone((phone) => (event.target.value)); setError(false) }} />
            </div>
            <button className='w-[90%] h-[40px] border flex justify-center items-center bg-blue-500 text-white rounded-[10px] my-[10px]' onClick={addUser}>Add Contacts</button>
        </div>
    )
}

export default Form