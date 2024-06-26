import { useTranslation } from 'react-i18next'
import { NavItem } from './nav-item';
import { NavLink, Link } from 'react-router-dom';

export function Header() {
    const { t } = useTranslation();
    return (
        <div className="flex items-center gap-5 py-2 pt-0 header-container flex-initial">
            <nav className="navbar navbar-expand-lg" data-bs-theme="light" style={{ 'backgroundColor': "#FFFF66" }}>
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">
                        {/* <a href="/" className="navbar-brand"> */}
                            <h3 className="">{t('my name')}</h3>
                        {/* </a> */}
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
 
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <NavItem href='/about' to={'about'} className="active" aria-current="page">
                                {t('about')}
                            </NavItem>

                            <NavItem href="/experiences" to='experiences'>
                                {t('experiences')}
                            </NavItem>

                            <NavItem href="/skills" to='skills'>
                                {t('skills')}
                            </NavItem>

                            <NavItem href="/projects" to='projects'>
                                {t('projects')}
                            </NavItem>

                            <NavItem href="/contact" to='contact'>
                                {t('contact')}
                            </NavItem>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}