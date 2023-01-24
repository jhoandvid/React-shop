import React from 'react';

import '../styles/NotFound.scss';

const NotFound=()=>{

    return(
        <div >
            <div className='notFound'>404</div>
            <div className='info'>
                <p>Whoops</p>
                <p>It seems like we couldn´t <br/> find the page you were looking for</p>
            </div>

            <button className='button'>Go Back</button>
        </div>


    )

}

export default NotFound;