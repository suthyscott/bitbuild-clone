import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './HeaderTwo.css'

export default function HeaderTwo(props){
    const [className, setClassName] = useState('hidden')

    useEffect(() => {
        props.hasScrolled ? setClassName('header-two') : setClassName('hidden')
    }, props)

    return (
        <div className={className}>
            <div className='logo-container'>
                <img className='logo'  src="https://bitbuild.com/wp-content/uploads/2017/11/logo.png" />
            </div>
            <nav className='nav-link-container'>
                <Link to=''><button className='nav-link'>Home</button></Link>
                <Link to=''><button className='nav-link'>Solutions</button></Link>
                <Link to=''><button className='nav-link'>Our Work</button></Link>
                <Link to=''><button className='nav-link'>About</button></Link>
                <Link to=''><button className='nav-link'>Contact</button></Link>
            </nav>
        </div>
    )
}