import dayjs from 'dayjs'

export function formatDate(str: any, fmt = 'YYYY-MM-DD HH:mm') {
  return dayjs(str).format(fmt)
}
