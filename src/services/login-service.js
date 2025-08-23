// import axios from "axios";

// export const loginHandler = async (number, password) => {
//   try {
//     const response = await axios.post(
//       "https://travel-app-1-buan.onrender.com/api/auth/login",
//       { number, password }
//     );

//     console.log("Full response:", response.data);

//     const { accessToken, username } = response.data || {};

//     if (!accessToken) {
//       throw new Error("No accessToken received from backend");
//     }

//     console.log("Logged IN");
//     console.log({ accessToken, username });

//     localStorage.setItem("token", accessToken);
//     localStorage.setItem("username", username);

//     // setAlert({
//     //   open: true,
//     //   message: "Login Successful!",
//     //   type: "success",
//     // });

//     return { accessToken, username };
//   } catch (err) {
//     console.error("Unable to login:", err);
//     // setAlert({
//     //   open: true,
//     //   message: "Login Failed. Please check credentials",
//     //   type: "error",
//     // });
//     return null;
//   }
// };


import axios from "axios";

export const loginHandler = async (number, password, setAlert) => {
  try {
    const {
      data: { accessToken, username },
    } = await axios.post(
      "https://travel-app-1-buan.onrender.com/api/auth/login",
      {
        number: number,
        password: password,
      }
    );
    console.log("Logged IN");
    console.log({ accessToken, username });
    localStorage.setItem("token", accessToken);
    localStorage.setItem("username", username);
    setAlert({
      open: true,
      message: "Login Successful!",
      type: "success"
    })
    return { accessToken, username };
  } catch (err) {
    console.log("unable to login");
  }
};