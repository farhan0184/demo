import axios from 'axios';
import React, { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';

const User = () => {
    const { id } = useParams()
    // const [loading, setLoading] = useState(false);
    const [data, setData] = useState({})



    useEffect(() => {

        try {

            axios.get(`https://dummyjson.com/users/${id}`)
                .then(res => setData(res.data))
        } catch (error) {

            alert(error)
        }
    }, [])


    return (
        <Suspense fallback={<Loading />}>

            <div className='flex items-center justify-center h-screen'>
                <div className="card md:w-[50%] w-[90%] mx-auto  shadow-3xl p-5">
                    <figure className='w-32 h-32 px-2'>
                        <div className="avatar h-min ">
                            <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={data?.image} alt={data?.firstName} />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body  py-2 px-0 ">
                        <h2 className="text-3xl font-bold">{data?.firstName} {data?.lastName}</h2>
                        <h3 className='text-2xl font-bold'>{data?.company?.name}</h3>
                        <p className='text-xl'>{data?.email}</p>
                        <p className='text-xl'>{data?.address?.address}, {data?.address?.city}, {data?.address?.state}</p>
                    </div>
                </div>
            </div>
        </Suspense>
    );

};

export default User;