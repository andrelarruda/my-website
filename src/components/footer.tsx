import { useTranslation } from 'react-i18next'
import { NavItem } from './nav-item';

export function Footer() {
    const { t, i18n } = useTranslation();
    return (
        <div className="footer-container">
            <footer className="py-3 my-4 border-top">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <NavItem href="/" to='/' style={{ color: 'inherit' }}>
                        Home
                    </NavItem>

                    <NavItem href='/about' to='about' style={{ color: '#FFF', textDecoration: 'none', transition: 'background-color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out' }}>
                        {t('about')}
                    </NavItem>

                    <NavItem href="/experiences" to='experiences' type='button' style={{ color: 'inherit' }}>
                        {t('experiences')}
                    </NavItem>

                    <NavItem href="/skills" to='skills' style={{ color: 'inherit' }}>
                        {t('skills')}
                    </NavItem>

                    <NavItem href="/projects" to='projects' style={{ color: 'inherit' }}>
                        {t('projects')}
                    </NavItem>

                    <NavItem href="/contact" to='contact' style={{ color: 'inherit' }}>
                        {t('contact')}
                    </NavItem>
                </ul>

                <p className="text-center text-body-primary">{t('footer all rights')}</p>
            </footer>
        </div>
    )
}