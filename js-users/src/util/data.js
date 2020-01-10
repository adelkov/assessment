const PAGE_SIZE = 10;

export const parsePages = data => {
    return data.reduce((acc, item, idx) => {
        const pageIndex = (idx - (idx % PAGE_SIZE)) / PAGE_SIZE;
        item = {...item, loading: false, error: null};
        if (acc[pageIndex]) {
            acc[pageIndex] = acc[pageIndex].concat(item)
        } else {
            acc[pageIndex] = [item]
        }
        acc['totalPages'] = pageIndex;
        return acc;
    }, {});
};

export const formatDate = timestamp => {
    const date = new Date(timestamp);
    return `${date.getUTCDate()}/${date.getUTCMonth()}/${date.getFullYear()}`
};


export const updateUsers = (users, page, userId, updateObject) => {
    return {
        ...users,
        [page]: users[page].map(user => {
            if (user.id === userId) {
                Object.keys(updateObject).forEach(field => {
                    user[field] = updateObject[field]
                });
                return user
            } else {
                return user
            }
        })
    }
};

export const oppositeStatus = status => status === 'active' ? "locked" : 'active';
