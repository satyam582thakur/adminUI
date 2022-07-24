export const searchInUsers = (search, users) => {
  let SearchedUser = search.toLowerCase();
  return users.map((user) => {
    if (
      user.name.toLowerCase().includes(SearchedUser) ||
      user.email.toLowerCase().includes(SearchedUser) ||
      user.role.toLowerCase().includes(SearchedUser)
    ) {
       user.show = true;
       return user;
    }
    user.show = false;
    return user;
  });
};
