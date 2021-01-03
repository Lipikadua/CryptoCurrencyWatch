
import React from 'react'
import withCurrencyConvert from '../hoc/withCurrencyConvert';
import {DropdownButton, Dropdown } from 'react-bootstrap';



const Detailscurrencybutton= (props)=> {
    

    
  const {currencyOptions, onSelect, currencyName}= props;

    
    
    return (
        <>
             <div className= "cryptList">{props.name}  
              <DropdownButton 
              title= {`Currency(${currencyName})`}
              id="document-type"
              className="display-inlineb"
              onSelect={onSelect}
              >
              {currencyOptions.map((opt) => (
              <Dropdown.Item as="button" className= 'dropdown-item-list' eventKey={opt} key={opt}>
                {opt}
              </Dropdown.Item>  
              ))}
          </DropdownButton> 
          </div>        
        </>
    )
}
export default withCurrencyConvert(Detailscurrencybutton);