export const generateInitials = (name: string): string => {
  const nameParts = name.trim().split(" ");
  const initials = nameParts.length >= 2
    ? nameParts[0][0] + nameParts[1][0]
    : nameParts[0][0];
  return initials.toUpperCase();
};