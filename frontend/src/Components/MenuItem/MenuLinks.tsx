import React from "react";

function MenuLinks(props) {
  return (
    <>
      <a href={props.linkurl}>{props.linktext}</a>
    </>
  );
}

export default MenuLinks;
