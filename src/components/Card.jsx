import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({item}) => {
    return (
        <div key={item.id} className="card card-side  shadow-3xl px-2">
            <figure className='w-24 h-28 px-2'>
                <div className="avatar h-min ">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={item.image} alt={item.firstName} />
                    </div>
                </div>
            </figure>
            <div className="card-body  py-2 px-0 ">
                <Link to={`/${item.id}`} className="card-title font-bold hover:text-blue-500">{item.firstName} {item.lastName}</Link>
                <h3 className='text-[16px] font-bold'>{item.company.name}</h3>
                <p>{item.email}</p>
                <p>{item.address.address}, {item.address.city}, {item.address.state}</p>
            </div>
        </div>
    );
};

export default Card;