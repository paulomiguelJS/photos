import { Link } from 'react-router-dom';


export const PhotoItem = ({ data }) => {
    return (
        <Link to={`/photo/${data.id}`}>
            <img src={data.thumbnailUrl} alt={data.title} />
        </Link>
    );
}