import React from 'react'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'

const SocialMedia = () => {
    const style = {
        cursor: 'pointer'
    }
    return (
        <div className='app__social'>
            <div>
                <a href='https://www.instagram.com/umi.vilbig/' target='_blank' rel="noreferrer">
                    <BsInstagram style={style}/>
                </a>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/umi-vilbig-1423a4218/' target='_blank' rel="noreferrer">
                    <BsLinkedin style={style}/>
                </a>
            </div>
        </div>
    )
    }

export default SocialMedia
