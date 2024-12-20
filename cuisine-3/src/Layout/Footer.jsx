import React from 'react';
const Footer = () => {
    return (
        <footer className="bg-danger text-white py-3">
            <div className="container text-center">
                <p className="mb-2">Explore More:</p>
                <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                        <a href="/home" className="text-white text-decoration-none">
                            Home
                        </a>
                    </li>
                    <li className="list-inline-item mx-3">
                        <a href="/indian-cuisine" className="text-white text-decoration-none">
                            Indian Cuisine
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/italian-cuisine" className="text-white text-decoration-none">
                            Italian Cuisine
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
