import React from 'react'
import { Link } from 'react-router-dom'
const Public = () => {
    const content = (
        <section className='public'>
            <header>
                <h1>Welcome to <span className='nowrap'>Dan D. Repaires</span></h1>
            </header>
            <main className='public__main'>
                <p>located in beautiful dwontwon foo city, Dan D. Repaires provieds a trained staff ready to meet your tech repair needs.</p>
                <address className='public__addr'>
                    Dan D. Repaires<br/>
                    555 Foo Drive<br/>
                    Foo city, CA 12345<br/>
                    <a href='tel:+123456789'>(555) 555-5555</a>

                </address>
                <br/>
                <p>Owner: Hossam Eid</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>
    )
    return content
}

export default Public
