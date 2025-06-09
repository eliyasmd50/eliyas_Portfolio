import type { JSX } from "react";
import { Contact } from "./Contact";
import { Icon } from "./Icon";
import { HeaderElements } from "./HeaderElements";

export const Header = (): JSX.Element => {
    return <>
        <Icon/>
        <HeaderElements/>
        <Contact/>
    </>
}