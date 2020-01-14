import React from 'react';
import {
    Link,
    useParams
} from "react-router-dom";

const Pagination = ({totalPages}) => {
    let {page} = useParams();
    page = +page;
    return (
        <div className={'pagination'}>
            {page > 1 ? <Link to={`${+page - 1}`} className={'btn btn--green'}>&lt;</Link> :
                <div className={'btn btn--disabled'}>&lt;</div>}
            {page}
            {totalPages > page + 1 ? <Link to={`${+page + 1}`} className={'btn btn--green'}>&gt;</Link> :
                <div className={'btn btn--disabled'}>&gt;</div>}
        </div>
    )
};

export default Pagination
