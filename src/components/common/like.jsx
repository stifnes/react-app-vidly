import React from "react";

const Like = (props) => {
  let classes = "fa-heart";
  if (!props.liked) classes = "fa-heart-o";
  return (
    <div>
      <i onClick={props.onClick} className={"fa " + classes} />
    </div>
  );
};

export default Like;
