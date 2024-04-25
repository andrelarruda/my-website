import { ComponentProps } from "react"
import { Link } from "react-router-dom"
import { twMerge } from 'tailwind-merge'

interface NavItemProps extends ComponentProps<'a'> {
    children: string,
    to: string,
}

export function NavItem(props: NavItemProps) {
    return (
        <li className="nav-item">
            <Link {...props} to={props.to} className={twMerge(
                'nav-link',
                props.className,
            )}>
                {props.children}
            </Link>
            {/* <a {...props} className={twMerge(
                "nav-link",
                props.className
            )} >
                {props.children}
            </a> */}
        </li>
    )

}