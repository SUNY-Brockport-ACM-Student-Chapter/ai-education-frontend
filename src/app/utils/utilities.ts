export const generateInitials = (name: string | undefined): string => {
  if (!name || typeof name !== 'string') {
    return 'NA'; // or return a default value like 'NA' for Not Available
  }

  const nameParts = name.trim().split(" ");
  const initials = nameParts.length >= 2
    ? nameParts[0][0] + nameParts[1][0]
    : nameParts[0][0];
  return initials.toUpperCase();
};