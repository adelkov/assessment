import React, {useContext} from 'react';
import {UsersContext} from "../Providers/UsersProvider";
import {
    Link,
    useParams
} from "react-router-dom";


const Pagination = () => {
    let {page} = useParams();
    let {users: {totalPages}} = useContext(UsersContext);
    return (
        <div>
            {page > 0 && <Link to={`${+page - 1}`}>Back</Link>}
            {page}
            {totalPages > page && <Link to={`${+page + 1}`}>Forth</Link>}
        </div>
    )
};

export default Pagination
