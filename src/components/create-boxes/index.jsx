import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './style.scss';
import delImg from '../../assets/images/box-del.png'


const CreateBox = () => {


    let newRanNumList = useSelector(state => state.RandomNumberReducer.randomNumberList)
    const dispatch = useDispatch()


    const randomNumber = () => {
        const n = Math.floor(Math.random() * 999 + 1)
        dispatch({ type: 'ADD_NUMBER', payload: n })
    }
    const deleteNumber = (index) => {
        dispatch({ type: 'DEL_NUMBER', payload: index })
    }

    return <div>
        <div className="create-box-header">
            <button className="create-box-btn" onClick={randomNumber}>Create Box</button>
        </div>
        <div className="creating-section">
            <div className="boxes-section">
                {newRanNumList.map((item, index) => {
                    return <div key={index} className='random-box'>
                        <span style={{ backgroundImage: `url('${delImg}')` }} className='del-img' onClick={() => deleteNumber(index)}></span>
                        <p>{item}</p>
                    </div>
                })}
            </div>
            <div className="text-section">
                <p className="text">Այստեղ պետք է լիներ Lorem</p>
            </div>
        </div>
    </div>
}
export default CreateBox