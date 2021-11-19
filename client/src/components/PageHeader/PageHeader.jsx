import {Link} from 'react-router-dom';
import './PageHeader.scss'

const PageHeader =  () => {

    return (
    <header className="header">
        <Link className="header__link" to = "/">
         gm
        </Link>
    </header>
    );
}

export default PageHeader

