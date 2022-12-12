import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './style.scss';
import img from '../../assets/images/edit.svg'

const UserList = () => {
    const newUsersList = useSelector(state => state.UserReducer.users)
    const dispatch = useDispatch()
    const [selectedUser, setSelectedUser] = useState(null)
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        gender: 'male',
        phoneNumber: ''
    })
    const [errorUser, setErrorData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        gender: '',
        phoneNumber: ''
    })

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        setErrorData({ ...errorUser, [e.target.name]: '' })



    }
    const handleSave = () => {
        if (selectedUser || selectedUser === 0) {
            dispatch({ type: 'EDIT_USER', payload: { userData: user, index: selectedUser } })
            setSelectedUser(null)
            setUser({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                gender: 'male',
                phoneNumber: ''
            })
        }
    }
    const handleClick = () => {

        if (validation()) {
            // setUsersList([...usersList, user])
            dispatch({ type: 'ADD_USER', payload: user })
            //console.log(usersList)   //cuyc kta mi qayl het
            setUser({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                gender: 'male',
                phoneNumber: ''
            })
        }

    }

    const validation = () => {
        let isValidate = true
        const newErrross = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            gender: '',
            phoneNumber: ''
        }

        if (!user.firstName.trim().length) {
            newErrross.firstName = 'Fill the First Name'
            isValidate = false
        }
        if (!user.lastName.trim().length) {
            newErrross.lastName = 'Fill the Last Name'
            isValidate = false
        }
        if (!user.email.trim().length) {
            newErrross.email = 'Fill an E-mail'
            isValidate = false
        }
        if (!user.password.trim().length) {
            newErrross.password = 'Fill the Password'
            isValidate = false
        }
        if (!user.gender.trim().length) {
            newErrross.gender = 'Choose the Gender'
            isValidate = false
        }
        if (!user.phoneNumber.trim().length) {
            newErrross.phoneNumber = 'Fill the Phone Number'
            isValidate = false
        }
        setErrorData(newErrross)

        return isValidate

    }
    const deleteBox = (index) => {
        dispatch({ type: 'DEL_USER', payload: index })
    }
    const editeBox = (user, index) => {
        setSelectedUser(index)
        setUser({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            gender: user.gender,
            phoneNumber: user.phoneNumber
        })
    }
    useEffect(() => {
        console.log(newUsersList)
    }, [newUsersList])

    return <div>
        <div className="G-container G-flex">
            <div className="filling-section">
                <label>
                    <p className="input-title">First Name</p>
                    <input type="text"
                        onChange={handleChange}
                        name="firstName"
                        value={user.firstName}
                        // className={user.firstName ? "fill-inputs" : 'error-fill-inputs'}
                        className="fill-inputs"
                    />
                    {errorUser.firstName ? <p className="error-text">{errorUser.firstName}</p> : null}
                </label>
                <label>
                    <p className="input-title">Last Name</p>
                    <input type="text"
                        onChange={handleChange}
                        name="lastName"
                        value={user.lastName}
                        className="fill-inputs" />
                    {errorUser.lastName ? <p className="error-text">{errorUser.lastName}</p> : null}
                </label>
                <label>
                    <p className="input-title">E-mail</p>
                    <input type="email" onChange={handleChange}
                        name="email" value={user.email} className="fill-inputs" />
                    {errorUser.email ? <p className="error-text">{errorUser.email}</p> : null}
                </label>
                <label>
                    <p className="input-title">Password</p>
                    <input type="password" onChange={handleChange}
                        name="password" value={user.password} className="fill-inputs" />
                    {errorUser.password ? <p className="error-text">{errorUser.password}</p> : null}
                </label>
                <label>
                    <div className="G-flex">
                        <div className="margin-radio-input">
                            <p className="input-title">Male</p>
                            <input type="radio" name="gender" value='male' checked={user.gender === 'male'} onChange={handleChange} className="fill-radio-input" />
                            {errorUser.gender ? <p className="error-text">{errorUser.gender}</p> : null}
                        </div>
                        <div>
                            <p className="input-title">Female</p>
                            <input type="radio" name="gender" value='female' checked={user.gender === 'female'} onChange={handleChange} className="fill-radio-input" />
                        </div>
                    </div>
                </label>
                <label>
                    <p className="input-title">Phone Number</p>
                    <input type="number" onChange={handleChange}
                        name="phoneNumber" value={user.phoneNumber} className="fill-inputs" />
                    {errorUser.phoneNumber ? <p className="error-text">{errorUser.phoneNumber}</p> : null}
                </label>
                <div className="G-flex">
                    <button className="fill-btn" onClick={handleSave}>Save</button>
                    <button className="fill-btn" onClick={handleClick}>Confirm</button>
                </div>
            </div>
            <div className="added-users-box">
                {newUsersList.map((user, index) => {
                    return <div key={index} className='user-box'>
                        <div>
                            <span style={{ backgroundImage: `url('${img}')` }} className='edit-btn' onClick={() => editeBox(user, index)}></span>
                            <div className="del-btn" onClick={() => deleteBox(index)}>
                                <div className="line1"></div>
                                <div className="line2"></div>
                                <div className="line3"></div>
                            </div>
                        </div>
                        <div className="G-flex">
                            <h3>{user.firstName}</h3>
                            <h3>{user.lastName}</h3>
                        </div>
                        <p>{user.email}</p>
                        <p>{user.gender}</p>
                        <p>{user.phoneNumber}</p>
                    </div>
                })}
            </div>
        </div>
    </div>
}
export default UserList

