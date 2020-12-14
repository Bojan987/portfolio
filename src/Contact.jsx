import React, { useState } from "react";
import { Card,Form,InputGroup, FormGroup, FormControl,} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser, faEnvelope,faPenAlt,faPhone} from "@fortawesome/free-solid-svg-icons";

import emailjs from 'emailjs-com';

export const Contact = ()=>{

    const [values, setValues] = useState({
        email: '',
        title: '',
        message: '',
    })
    const [errorClass,setErrorClass] = useState('text-white')
    const handleChange = (name)=> (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
    
    const isFormValid = () => {
      if (!values.title || !values.email || !values.message) {
        
    return false;}
    else {
    return true;}
    
    };
    
    const sendEmail = (e) => {
    
    emailjs.sendForm('gmail', 'template_4u4h1ai', e.target, 'user_vfP4p6RigiFl8vMS01bdI')
    .then((result) => {

        setErrorClass('text-success')
        setTimeout(function(){ setErrorClass('text-white');  setValues({
            email: '',
            title: '',
            message: '',
        }) }, 3000);
        setValues({
            email: '',
            title: '',
            message: 'Message successfully sent',
        })
        console.log(result.text + ' Message Sent');
    }, (error) => {
        setValues({
            email: '',
            title: '',
            message: 'Sending Failed',
        })
        setErrorClass('text-danger')
        console.log(error.text + ' Sending Failed');
    });
    }
    
    const handleSubmit = (e) => {
    
    e.preventDefault()
      if (!isFormValid()) {
        
         console.log('Something went Wrong!')
      } else{ 
        sendEmail(e)
      
      }
    };
    
    return (
        <>
            <div id='contact'>
            <Card>
                <Card.Body className='bg-info text-white py-5'>
                    <h2>Contact</h2>
                    <div className='contactIcons'>
                        <div className='mailContact'>
                            <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="fas"
                                        size="1x"
                                        />
                             <span className='email'>bojanmaj@hotmail.com</span>
                        </div>
                        <div className='phoneContact'>
                            <FontAwesomeIcon
                                        icon={faPhone}
                                        className="fas"
                                        size="1x"
                                        />
                            <span className='phoneNumber'>063/89-24-087</span>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body className=' py-5'>
                    <h3>Contact me directly:</h3>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <FormGroup>
                            <InputGroup className='input-group-lg'>
                                <InputGroup.Prepend>
                                    <InputGroup.Text className='bg-info text-white'>
                                        <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="fas"
                                        size="1x"
                                        />
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl className='bg-dark text-white' type='email' name='email' placeholder='Enter your Email' onChange={handleChange()}  value={values.email} required
                                 >
                                </FormControl>
                            </InputGroup>
                        </FormGroup>

                        <FormGroup>
                            <InputGroup className='input-group-lg'>
                                <InputGroup.Prepend>
                                    <InputGroup.Text className='bg-info text-white'>
                                        <FontAwesomeIcon
                                        icon={faUser}
                                        className="fas"
                                        size="1x"
                                        />
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl className='bg-dark text-white' type='text' placeholder='Subject' name='title' value={values.title} onChange={handleChange()} required>
                                </FormControl>
                            </InputGroup>
                        </FormGroup>

                        <FormGroup>
                            <InputGroup className='input-group-lg'>
                                <InputGroup.Prepend>
                                    <InputGroup.Text className='bg-info text-white'>
                                        <FontAwesomeIcon
                                        icon={faPenAlt}
                                        className="fas"
                                        size="1x"
                                        />
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl className={`bg-dark ${errorClass}`} type='text' placeholder='Message' as="textarea" rows={3} name='message' onChange={handleChange()} value={values.message} required>
                                </FormControl>
                            </InputGroup>
                        </FormGroup>
                        <input type="submit" value="Submit" className="btn btn-info btn-block btn-lg"/>
                    </Form>
                </Card.Body>
            </Card>
            </div>
        </>
    )
}