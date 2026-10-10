const isWithinOneMinute = (previousMessage, currentMessage, authUserId) => {
  if (!previousMessage || !currentMessage) {
    return false;
  }

  const previousTime = new Date(previousMessage.createdAt).getTime();
  const currentTime = new Date(currentMessage.createdAt).getTime();

  const previousType =
    previousMessage.senderId === authUserId ? "sent" : "received";

  const currentType =
    currentMessage.senderId === authUserId ? "sent" : "received";

  return (
    previousType === currentType && currentTime - previousTime <= 60 * 1000
  );
};

export default isWithinOneMinute;