export function ajustaTimeZone(data: Date): Date {
  return new Date(data.getTime() - 3*60*60*1000);
}