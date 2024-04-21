import { ComponentProps } from "react"
import { twMerge } from 'tailwind-merge'

interface NavItemProps extends ComponentProps<'a'> {
    children: string
}

export function NavItem(props: NavItemProps) {
    return (
        <li className="nav-item">
            <a {...props} className={twMerge(
                "nav-link",
                props.className
            )} >
                {props.children}
            </a>
        </li>
    )

}