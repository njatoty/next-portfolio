"use client";
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react'
import { FaCheck, FaExclamationTriangle, FaFly, FaPaperPlane, FaTimesCircle } from 'react-icons/fa';
import { sendContactForm } from '../config/contact';
import Emailjs from '@emailjs/browser'

type Props = {
    label: string,
    id: string,
    type: string,
    currentValue: string,
    valid: boolean,
    invalidMessage: string,
    warningMessage: string,
    successMessage: string,
    required: boolean,
    onChange: Function
}
export function Input({id, label, type, valid, onChange, currentValue, required, warningMessage, successMessage, invalidMessage} : Props) {

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
                    <small className='text-red-500/80 px-2'>{ warningMessage }</small>
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
                            { !isValid ? invalidMessage : successMessage }
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
    const [subject, setSubject] = useState('');
    const [nameReq, setNameReq] = useState(false);
    const [emailReq, setEmailReq] = useState(false);
    const [messageReq, setMessageReq] = useState(false);
    const [subjectReq, setSubjectReq] = useState(false);
    const [isSending, setIsSending] = useState(false);

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
    
    const handleSubject = (value: string) => {
        setSubjectReq(subject.length > 0 );
        setSubject(value);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const valid = name.length > 1 && isValidEmail(email) && message.length >= 30 && subject.length > 0;
        setNameReq(name.length < 1);
        setEmailReq(!isValidEmail(email));
        setMessageReq(message.length < 30 );
        setSubjectReq(subject.length <= 0);
        setIsSending(true);

        const templateParams = {
            user_name: name,
            user_email: email,
            user_subject: subject,
            message: message
        }
        if (valid) {
            // await sendContactForm(data);
            Emailjs.send('service_37ngg9a', 'template_nydzllt', templateParams, 'JYhYB-wJoLEFWEvhU')
            .then((result) => {
                alert("message sent")
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                setIsSending(false);
            });
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 py-4 px-2">
            <Input required={nameReq} valid={name.length > 1} id="name" type="text" label="Your fullname"
                onChange={handleName} currentValue={name}
                successMessage='Your name is valid'
                invalidMessage='Enter more than 1 character'
                warningMessage='Please enter your full name'
            />

            <Input required={emailReq} valid={isValidEmail(email)} id="email" type="email" label="Email"
                onChange={handleEmail} currentValue={email}
                successMessage='Your email address is valid'
                invalidMessage='This emails address is not valid'
                warningMessage='Please enter a valid email address'
            />

            <Input required={subjectReq} valid={subject.length > 0} id="subject" type="text" label="Subject"
                onChange={handleSubject} currentValue={subject}
                successMessage='Your subject is valid'
                invalidMessage='Your name is invalid'
                warningMessage='Please enter the subject'
                />
            <Input required={messageReq} valid={message.length >= 30} id="message" type="textarea" label="Message"
                onChange={handleMessage} currentValue={message}
                successMessage='Your message is valid'
                invalidMessage='Enter more than 30 characters'
                warningMessage='Enter more than 30 characters'
            />

            <button className="mx-auto text-slate-300 w-fit px-5 rounded-sm py-3 flex items-center gap-2
            border-none bg-gradient-to-r from-cyan-500 to-cyan-700
            disabled:cursor-not-allowed disabled:opacity-70
            hover:from-cyan-400 hover:to-cyan-500 font-bold hover:text-white transition-all duration-150
            active:ring-cyan-200/80 active:ring-2 ring-offset-1">
                <FaPaperPlane /> {isSending ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
        </form>
    )
}


