/* eslint-disable array-callback-return */
// importation de modules dont nous avons besoin
import React from 'react'
//importation de usestate dans react
import {useState} from 'react'
import { Datas } from '../Assets/Datas';

function SearchBar() {
    //
    const [searchterm, setSearchterm]= useState("");
    return (
        <div className='SearchBar'>
            {/* //affichage de la bare der recherche */}
            
            <input type="text" placeceholder= "search" onChange={(event)=>{setSearchterm(event.target.value);
            }} />
            {/* filtrage des données du composant Datas */}
            {Datas.filter((val)=>{
                if (searchterm===""){
                    return val ;
                }else if (val.title.toLocaleLowerCase().includes(searchterm.toLocaleLowerCase())){
                    return val ;
                    
                }

            }).map((val,key)=>{
                return (
                    <div className="user" key={key}>
                     <p>{val.title} </p> 
                     </div>
                )
            })}
            
        </div>
    )
}

export default SearchBar
