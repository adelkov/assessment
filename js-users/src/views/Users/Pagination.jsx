import React, {useContext} from 'react';
import {UsersContext} from "../../Providers/UsersProvider";
import {
    Link,
    useParams
} from "react-router-dom";

const Pagination = () => {
    let {page} = useParams();
    let {list: {data, loading}} = useContext(UsersContext);
    if (loading) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <div>
            {page > 0 && <Link to={`${+page - 1}`}>Back</Link>}
            {page}
            {data.totalPages > page && <Link to={`${+page + 1}`}>Forth</Link>}
        </div>
    )
};

export default Pagination
