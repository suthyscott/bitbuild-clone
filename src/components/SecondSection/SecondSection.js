import React from 'react'
import './SecondSection.css'

export default function SecondSection(props) {

    return (
        <div className='second-section'>

            <section className='clients-partners-container'>
                <h3 className='clients-partners-header'>Clients and Partners Include</h3>
                <div className='clients-partners-logos'>
                    <img className='clients-partners-logo' src="https://bitbuild.com/wp-content/uploads/2017/11/client-img1.png" />
                    <img className='clients-partners-logo' src="https://bitbuild.com/wp-content/uploads/2017/11/client-img2-1.png" />
                    <img className='clients-partners-logo' src="https://bitbuild.com/wp-content/uploads/2017/11/client-img4.png" />
                    <img className='clients-partners-logo' src="https://bitbuild.com/wp-content/uploads/2017/11/client-img3.png" />
                    <img className='clients-partners-logo' src='https://bitbuild.com/wp-content/uploads/2017/11/client-img5.png' />
                </div>
            </section>

            <section className='coding-stunt-double'>
                <div className='text-and-buttons'>
                    <h1 className='stunt-double-header'>We'll be your coding <br/>stunt double.</h1>
                    <p className='stunt-double-paragraph'>Employ the BitBuild team and methodologies into your existing workflow and experience dramatic improvements to your overall efficiency. We’ll tackle your tough problems with a smile.
                    </p>
                    <p className='stunt-double-paragraph'>
                    We’ll integrate with your existing team, adopting your processes as our own, while providing over a decade of development expertise and insight.</p>
                    <button id='start-now-button'>START NOW</button>
                </div>

                <div className='half-plus-half-img'>

                </div>
            </section>
        </div>
    )
}