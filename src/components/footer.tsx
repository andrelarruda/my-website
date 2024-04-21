import { useTranslation } from 'react-i18next'

export function Footer() {
    const { t, i18n } = useTranslation();
    return (
        <div className="container">
            <footer className="py-3 my-4 border-top">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-body-primary">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-body-primary">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-body-primary">Experiences</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-body-primary">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-body-primary">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-body-primary">Contact</a>
                    </li>
                </ul>

                <p className="text-center text-body-primary">{ t('footer all rights') }</p>
            </footer>
        </div>
    )
}