import React from "react";


function NavBar() {
  const links = [
  "home", 
  "about", 
  "projects"
];

const navigationElements = links.map(item=>{
    return <a key={item} href={'#'+item}>{item}</a>
  })


  return <nav>{navigationElements}</nav>;
      
}

export default NavBar;
