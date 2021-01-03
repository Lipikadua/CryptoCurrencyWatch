import React from 'react';


const Pagination = ({currencyPerPage, totalCurrencies, paginate}) => {

    const pageNumbers=[];

    

    for(let i=1; i<=Math.ceil(totalCurrencies/currencyPerPage); i++)
    {
        pageNumbers.push(i);
        
    }  
    return (
        <nav>
            <ul className='pagination'>
            {pageNumbers.map(number =>(
            <p key= {number} className='page-item'>
            <li onClick={() => paginate(number)} className='page-link'>
                {number}   
                </li>
                </p>
            ))}
            </ul>
        </nav>
    )
}

export default Pagination;
