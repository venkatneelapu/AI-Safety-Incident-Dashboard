export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

export const sortByDate = (date1: string, date2: string, ascending: boolean = false): number => {
  const d1 = new Date(date1).getTime();
  const d2 = new Date(date2).getTime();
  
  return ascending ? d1 - d2 : d2 - d1;
};