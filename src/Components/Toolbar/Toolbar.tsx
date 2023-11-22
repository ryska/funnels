import React from 'react';

const Toolbar = () => {
    return (
        <nav className='h-20 w-full p-4'>
            <div className='w-10'>
                <a href='https://www.perspective.co/' target='_blank'>
                    <img src='https://perspective.imgix.net/assets/app/logo/256x256.png?auto=compress&dpr=2' alt="perspective logo" />
                </a>
            </div>
        </nav>
    )
}

export default Toolbar;
