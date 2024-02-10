import React from 'react';

const Input = ({title,type, name}) => {
    return (
        <div>
            <div className="label mt-2">
                <span className="text-xl ">{title}</span>
            </div>
            <input type={type} name={name} placeholder={`Type ${title}`} className="input input-bordered w-full " />
        </div>
    );
};

export default Input;