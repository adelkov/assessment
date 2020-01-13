import React from 'react';
import {
    Link,
    useParams
} from "react-router-dom";

const Pagination = ({totalPages}) => {
    let {page} = useParams();
    return (
        <div>
            {page > 0 && <Link to={`${+page - 1}`}>Back</Link>}
            {page}
            {totalPages > page && <Link to={`${+page + 1}`}>Forth</Link>}
        </div>
    )
};

export default Pagination
