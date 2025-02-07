import React from "react";
import MenuItem from "../MenuItem/MenuLinks";

function Links() {
  return (
    <div className="links">
      <MenuItem linktext="Home" linkurl="/" />
      <MenuItem linktext="Blog" linkurl="/blog" />
    </div>
  );
}

export default Links;
