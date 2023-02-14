export const getToken = () => {
  const getTokens = localStorage.getItem("user");

  const { token } = JSON.parse(getTokens!);

  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};
