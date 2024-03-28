// import api from "../../../utils/api";

// Static User Login
// const login = async (userData) => {
//   const response = await api.post(`/api/Account/login`, userData);
//   if (response?.data?.succeeded && response?.data?.data) {
//     localStorage.setItem(
//       "leadingly_user",
//       JSON.stringify(response?.data?.data)
//     );
//   }
//   return response.data;
// };

// Static User Login
const login = async (userData) => {
  localStorage.setItem(
    "user",
    JSON.stringify(userData)
  );

  return userData
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  logout,
  login,
};

export default authService;
