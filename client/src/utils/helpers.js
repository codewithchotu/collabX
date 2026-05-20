export const generateRoomId = () => {
  return Math.random().toString(36).substring(2, 10);
};

export const formatTime = () => {
  const now = new Date();

  return now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};