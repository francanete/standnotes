export const getToken = () => {
  const getTokens = localStorage.getItem("user");

  const { token } = JSON.parse(getTokens!);

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return config;
};
