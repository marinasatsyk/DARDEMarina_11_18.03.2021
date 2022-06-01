import Logo from '../../assets/LOGO_black.svg';

function Footer() {
    return (
        <footer>
            <div className="footer">
                <img src={`${Logo}`} alt="logo kasa" />

                <div className="description_footer">
                    © 2020 Kasa. All rights reserved
                </div>
            </div>
        </footer>
    );
}

export default Footer;
