import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Dialog from '../../components/Dialog';
import Card from '../../components/Card';

const Users = () => {
    const [data, setData] = useState([])
    const [record, setRecord] = useState([])
    const [select, setSelect] = useState('name')
    useEffect(() => {
        axios.get('https://dummyjson.com/users')
            .then(res => {
                setData(res.data.users)
                setRecord(res.data.users)
            })
            .catch(err => console.log(err))
    }, [])
    const Filter = (event) => {
        if (select === 'name') {
            setRecord(data.filter(f => f.firstName.toLowerCase().includes(event.target.value.toLowerCase())))
        }
        if (select === 'email') {
            setRecord(data.filter(f => f.email.toLowerCase().includes(event.target.value.toLowerCase())))
        }
        if (select === 'com_name') {
            setRecord(data.filter(f => f.company.name.toLowerCase().includes(event.target.value.toLowerCase())))
        }
    }
    return (
        <div className='py-10 w-[90%] 2xl:w-[80%] mx-auto' >
            <div className='mb-10 flex md:flex-row flex-col md:justify-between md:items-center'>

                {/* search item*/}
                <div className='flex'>
                    <select className="select select-bordered  rounded-r-none" defaultValue={'default'} onChange={(e) => setSelect(e.target.value)}>
                        <option selected value={'name'}>Name</option>
                        <option value={'email'}>Email</option>
                        <option value={'com_name'}>Company Name</option>
                    </select>
                    <input type="text" placeholder={`Search ${select.charAt(0).toUpperCase() + select.slice(1)}`} className="input input-bordered w-full  rounded-l-none" onChange={Filter} />
                </div>

                {/* add item */}
                <div>
                    <button className="btn w-max my-5" onClick={() => document.getElementById('my_modal_3').showModal()}>Add Item</button>
                    {/* dialog section */}
                    <Dialog id={"my_modal_3"}/>
                </div>
            </div>
            <div className='grid  xl:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5'>

                {record.map(item => (
                    <Card key={item.id} item={item}/>
                ))}
            </div>
        </div>
    );
};

export default Users;