import React from 'react';

function ButtonLink(props){
    console.log(props);
    return(
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}
ButtonLink.defaultProps = {
    href: '/',
    className: '',
  };
  
  ButtonLink.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

export default ButtonLink;