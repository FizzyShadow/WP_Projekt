import React, { useState } from "react";
import { useEffect } from "react";

function SearchBar({ placeholder, data }) {
  
  const [value, setValue] = useState('');
  const [result, setResult] = useState([]);

  useEffect(() => {
    if(value.length > 0){
      fetch('https://iris-ff11c-default-rtdb.europe-west1.firebasedatabase.app/.json').then(
        response => response.json()
      ).then(responseData => { 
        setResult([]);
        let searchQuery =value.toLowerCase();
        for(const key in responseData){
          let flowerName = responseData[key].flower.name.toLowerCase();
          if(flowerName.slice(0, searchQuery.length).indexOf(searchQuery) !== -1){
            setResult(prevResult => {
              return [...prevResult, responseData[key].flower.name]
            })
          }
        }
      }).catch(error => {
        console.log(error); 
      })
    }
    else{
      setResult([]);
    }
  }, [value])

  return (
    <>
  <div className="mb-3 xl:w-96 mt-7 mr-5">
    <div className="flex items-stretch w-full mb-4">
      <input type="search" class="flex-auto min-w-0 block w-full px-3 py-[2px] text-base text-gray-700
       bg-white border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 
       focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-describedby="button-addon2"
       onChange={(event) => setValue(event.target.value)}
       value={value}
       />
    </div>
    <div className="fixed z-10">
      {result.map((result,index) =>{
        return <div className="bg-[#5A2317]/70 w-full flex align-center h-8 shadow-lg my-1 rounded px-3 pt-1 overflow-hidden overflow-y-auto shadow-black-500/50"> {result} </div>
      })}
    </div>
  </div>
      </>
  );
}

export default SearchBar;