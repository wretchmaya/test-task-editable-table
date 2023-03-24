export const setToLocalStorage = user => {
    localStorage.setItem(user.id, JSON.stringify(user));
};

export const getFromLocalStorage = id => {
    const cachedUser = localStorage.getItem(id);
    if (cachedUser) {
        return JSON.parse(cachedUser);
    }
    return null;
};

export const removeFromLocalStorage = id =>
    id ? localStorage.removeItem(id) : localStorage.clear();
