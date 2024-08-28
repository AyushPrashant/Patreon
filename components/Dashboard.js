"use client";
import React, { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { fetchuser, updateProfile } from '@/actions/useractions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'

const Dashboard = () => {
    const { data: session, update } = useSession();
    const router = useRouter();
    const [form, setForm] = useState({});

    useEffect(() => {
        if (!session) {
            router.push('/login');
        }
        else {
            getData()
        }
    }, [router, session]);

    const getData = async () => {
        let u = await fetchuser(session.user.name)
        setForm(u)
    }


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        let a = await updateProfile(e, session.user.name)
        toast('Profile Updated!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"/>
            {/* Same as */}
            <ToastContainer />
            <div className="container mx-auto py-5 px-6">
                <h1 className="text-center my-5 text-3xl font-bold text-white">Welcome to your Dashboard</h1>
                <form className="max-w-2xl mx-auto" action={handleSubmit}>
                    {['name', 'email', 'username', 'profilepic', 'coverpic', 'razorpayid', 'razorpaysecret'].map((label, index) => (
                        <div className="my-2" key={index}>
                            <label htmlFor={label.toLowerCase().replace(/\s+/g, '-')} className="block mb-2 text-sm font-medium text-gray-300">
                                {label}
                            </label>
                            <input
                                value={form[label.toLowerCase().replace(/\s+/g, '')] || ''}
                                onChange={handleChange}
                                type={label.toLowerCase().includes('secret') ? 'password' : 'text'}
                                id={label.toLowerCase().replace(/\s+/g, '-')}
                                name={label.toLowerCase().replace(/\s+/g, '')}
                                className="bg-gray-800 border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                        </div>
                    ))}
                    <button type="submit" className="w-full bg-blue-600 text-white text-sm rounded-lg p-2.5 mt-4">Save</button>
                </form>
            </div>
        </>
    );
};

export default Dashboard;
