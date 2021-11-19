import {Link} from 'react-router-dom';
import './PageHeader.scss'

const PageHeader =  () => {

    return (
    <header className="header">
        <Link className="header__link" to = "/">
            Home
        </Link>
        <Link className="header__link" to="/rectangle">
            Rectangle
        </Link>
    </header>
    );
}

export default PageHeader

