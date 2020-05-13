import React from 'react'
import HeaderOne from '../HeaderOne/HeaderOne'
import './TopView.css'

export default function TopView(props) {
    return (
        <div className='top-view'>
            <HeaderOne />
            <section className='mission-info-container'>
                <h1 className='mission-statement'>We write code.</h1>
                <button id='info-button'>REQUEST INFO</button>
            </section>
        </div>
    )
}