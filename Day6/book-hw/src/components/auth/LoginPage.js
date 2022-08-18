import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { signInWithEmailAndPassword} from 'firebase/auth';
import Button from "../common/Button.js";
import { auth } from '../../firebase/firebase';
import Alert from '../common/Alert.js';
import Utils from '../../services/util.service.js';

export default function LoginPage() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function onLogin(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth, 
                email,
                password,
            );
            console.log(userCredential.user);
            navigate('/');
        } catch(err) {
            console.log(err);
            setError(Utils.getFirebaseError(err));
        }
        setLoading(false);
    }
    return (
        <div className='container mt-5'>
            <div className ='card'>

                <div className = 'card-header'>
                    <h1 className='m-0'>Login</h1>
                </div>

                <div className = 'card-body'>
                <form onSubmit={onLogin}>
                    <div className = "mb-3">
                        <label className = "form-label"> Email Address</label>
                        <input 
                        value = {email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" className= "form-control"/>
                    </div>
                    <div className = "mb-3">
                        <label className = "form-label"> Password</label>
                        <input 
                        value = {password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" className= "form-control"/>
                    </div>
                    <div className = 'd-grid mt-4'>
                        <Button type='submit' loading= {loading}>
                            Login
                        </Button>
                    </div>
                </form>
                {
                    error ?
                    <Alert className = 'mt-4 mb-0'>
                    {error}
                    </Alert>
                    : 
                    <></>
                }
                
                </div>

            </div>
        </div>

    )
}
