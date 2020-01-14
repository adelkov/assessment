const PAGE_SIZE = 10;

export const parsePages = data => {
    data.sort((a, b) => (a['created_at'] < b['created_at']) ? 1 : -1);
    return data.reduce((acc, item, idx) => {
        const pageIndex = (idx - (idx % PAGE_SIZE)) / PAGE_SIZE + 1;
        item = {...item, loading: false, error: null};
        if (acc[pageIndex]) {
            acc[pageIndex] = acc[pageIndex].concat(item)
        } else {
            acc[pageIndex] = [item]
        }
        acc['totalPages'] = pageIndex + 1;
        return acc;
    }, {});
};

export const formatDate = timestamp => {
    const date = new Date(timestamp);
    return `${date.getUTCDate()}/${date.getUTCMonth()+1}/${date.getFullYear()}`
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
