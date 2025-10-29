import "./footer.css";

export default function Footer(){
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__wrapper">
                    <div className="footer__brand">
                        <a className="footer__brand-link" href="/">Panto</a>
                        <p className="footer__brand-text">The advantage of hiring a workspace with<br />
                        us is that givees you comfortable service<br />
                        and all-around facilities.</p>
                    </div>
                    <div className="footer__columns">
                        <div className="footer__column">
                            <h3 className="footer__column-title">Services</h3>
                            <a className="footer__column-item" href="#">Email Marketing</a>
                            <a className="footer__column-item" href="#">Campaigns</a>
                            <a className="footer__column-item" href="#">Branding</a>
                        </div>
                        <div className="footer__column">
                            <h3 className="footer__column-title">Furniture</h3>
                            <a className="footer__column-item" href="#">Beds</a>
                            <a className="footer__column-item" href="#">Chair</a>
                            <a className="footer__column-item" href="#">All</a>
                        </div>
                        <div className="footer__column">
                            <h3 className="footer__column-title">Follow Us</h3>
                            <a className="footer__column-item" href="#">Facebook</a>
                            <a className="footer__column-item" href="#">Twitter</a>
                            <a className="footer__column-item" href="#">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <span className="footer__copyright">Copyright © 2021</span>
                    <div className="footer__legal">
                        <a className="footer__legal-link" href="#">Terms & Conditions</a>
                        <a className="footer__legal-link" href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>
            
        </footer>
    );
}