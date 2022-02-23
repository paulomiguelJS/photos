import { Link } from 'react-router-dom';


export const AlbumItem = ({ id, title }) => {
    return (
        <Link to={`/album/${id}`} className="flex p-2 border mt-5">
            {title}
        </Link>
    );
}