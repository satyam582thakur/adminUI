


export const ProcessUserData = (users)=> {
    return users.map(user => {
        user.selected = false;
        user.edit = false;
        user.show = true;
        return user;
    })
} 