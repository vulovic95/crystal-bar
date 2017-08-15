import React, {Component} from 'react';

export const NotFound = (props) => { 
    return ( 
      <div style={props.style}> 
        <props.TopBackground page="404" title="Oops!" subtitle="We can not find the page you are looking for"/> 
      </div>
    ); 
} 
 
          