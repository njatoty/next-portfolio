"use client";
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react'
import { FaCheck, FaExclamationTriangle, FaFly, FaPaperPlane, FaTimesCircle } from 'react-icons/fa';

type Props = {
    label: string,
    id: string,
    type: string,
    currentValue: string,
    valid: boolean,
    required: boolean,
    onChange: Function
}
export function Input({id, label, type, valid, onChange, currentValue, required} : Props) {

    const [isFocused, setIsFocused] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [isReq, setIsReq] = useState(false);
    const [value, setValue] = useState('')

    useEffect(() => {
        setIsValid(valid);
        setIsReq(required);
    }, [valid, required, ]);

    const handleChange = (value: string) => {
        onChange(value);
        setValue(value)
    }

    return (
        <div className='py-1 md:py-2 relative w-full'>
            <label htmlFor={id} className={`absolute transition-all ease-in duration-200 px-2 rounded-md left-2
            ${isFocused || currentValue.trim().length > 0 ? '-top-1 text-slate-200 bg-cyan-600/80 text-sm' : 'top-5 text-slate-400 dark:text-slate-600 bg-transparent'}`}>{label}</label>
            {
                type === 'textarea' ? (
                    <textarea id={id} className={`${!isFocused && isReq ? 'border-red-400/50' : 'border-cyan-700/50'} input resize-none`}
                    rows={4} onBlur={() => setIsFocused(false)} onFocus={() => setIsFocused(true)}
                    onChange={(e) => handleChange(e.currentTarget.value)}  />
                ) : (
                    <input id={id} type={type} className={`${!isFocused && isReq ? 'border-red-400/50' : 'border-cyan-700/50'} input`}
                    onBlur={() => setIsFocused(false)} onFocus={() => setIsFocused(true)}
                    onChange={(e) => handleChange(e.currentTarget.value)} />
                )
            }
            {
                !isFocused && isReq && 
                <>
                    <small className='text-red-500/80 px-2'>This field is required</small>
                    <span className='p-2 flex gap-2 absolute right-2 top-4'>
                        <FaTimesCircle className='w-4 h-4 text-red-500/60'/>
                    </span>
                </>
            }
            {
                isFocused ? (
                    <>
                        <span className='p-2 flex gap-2 absolute right-2 top-4'>
                            {
                                isValid  ? (
                                    <FaCheck className='w-4 h-4 text-green-500'/>
                                ) : (
                                    <FaExclamationTriangle className='w-4 h-4 text-yellow-500 dark:text-yellow-400'/>
                                )
                            }
                        </span>
                        <small className={` px-2 ${isValid ? 'text-green-500 darktext-green-400/60' : 'text-yellow-500 darktext-yellow-400/60'}`}>
                            { type === 'text' && (!isValid ? 'Please enter your full name' : 'Your name is valid') }
                            { type === 'email' && (!isValid ? 'Please enter a valid email' : 'Your email address is valid') }
                            { type === 'textarea' && (!isValid ? 'Please enter more than 30 words' : 'Your message is valid') }
                        </small>
                    </>
                ) : (
                    <span className='opacity-0'>f</span>
                )
            }
        </div>
    )
}



export function Form() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [nameReq, setNameReq] = useState(false);
    const [emailReq, setEmailReq] = useState(false);
    const [messageReq, setMessageReq] = useState(false);

    function isValidEmail(address: string) {
        return !! address.match(/.+@.+/);
    }

    const handleEmail = (value: string) => {
        setEmailReq(!isValidEmail(value));
        setEmail(value);
    }
    
    const handleName = (value: string) => {
        setNameReq(value.length < 1);
        setName(value);
    }
    
    const handleMessage = (value: string) => {
        setMessageReq(message.length < 30 );
        setMessage(value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const valid = name.length > 1 && isValidEmail(email) && message.length >= 30;
        setNameReq(name.length < 1);
        setEmailReq(!isValidEmail(email));
        setMessageReq(message.length < 30 );

        if (valid) {
            alert('valid')
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 py-4 px-2">
            <Input required={nameReq} valid={name.length > 1} id="name" type="text" label="Your name"
                onChange={handleName} currentValue={name}/>
            <Input required={emailReq} valid={isValidEmail(email)} id="email" type="email" label="Email"
                onChange={handleEmail} currentValue={email}/>
            <Input required={messageReq} valid={message.length >= 30} id="message" type="textarea" label="Message"
                onChange={handleMessage} currentValue={message}/>
            <button className="mx-auto text-slate-300 w-fit px-5 rounded-sm py-3 flex items-center gap-2
            border-none bg-gradient-to-r from-cyan-500 to-cyan-700
            hover:from-cyan-400 hover:to-cyan-500 font-bold hover:text-white transition-all duration-150
            active:ring-cyan-200/80 active:ring-2 ring-offset-1">
                <FaPaperPlane /> SEND MESSAGE
            </button>
        </form>
    )
}


