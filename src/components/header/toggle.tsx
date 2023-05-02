import React, { useState, useContext } from "react";
import { SharedContext } from "./header";
import { Icon } from "@iconify/react";

type SharedContextType = {
  openMenu: boolean;
  setOpenMenu: (value: boolean) => void;
};

const Toggle = () => {
  const { openMenu, setOpenMenu } = useContext<SharedContextType>(SharedContext);

  return (
    <>
      <button className={`btn-toggle mobile-only ${openMenu ? 'active' : ''}`} onClick={()=>setOpenMenu(!openMenu)}>
        {openMenu ? (
          <Icon icon="line-md:menu-to-close-transition" width="30" height="30" />
        ) : (
          <Icon icon="line-md:menu" width="30" height="30" />
        )}
      </button>
    </>
  );
};

export default Toggle;
