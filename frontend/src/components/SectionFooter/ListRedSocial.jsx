import React from 'react';
import ListContainer from '../ListContainer/ListContainer';

function ListRedSocial({redes}) {

    return ( 
        <ListContainer items={redes.item} className={redes.className} type={redes.type}/> );
}

export default ListRedSocial;