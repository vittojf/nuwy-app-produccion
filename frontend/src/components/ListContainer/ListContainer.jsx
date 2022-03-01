import React from 'react';

function ListContainer({items,className,type}) {
    return ( <ul className={className}>
        {
            type==='itemIcon'&&
            items.map((el,key)=>{return(<li key={key} className={el.className}>
               <a className="mx-2" href="#/action-2"> <img src={el.url} alt={el.alt} className={el.imgClassName}/></a>
            </li>)})

        }
    </ul> );
}

export default ListContainer;