const DATE_UNITS = [
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1]
]

const convertDateTimestamp = (date) => {
  const myDate = date.split('-')
  const newDate = new Date(myDate[2], myDate[1] - 1, myDate[0])
  return newDate.getTime()
}

const getDateDiff = (dateInit, dateFinished) => {
  const elapsed = (dateInit - dateFinished) / 1000
  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === 'seconds') {
      const value = Math.round(elapsed / secondsInUnit)
      return { value, unit }
    }
  }
}

export default function timeAgo (dateInit, dateFinished) {
  const timestampDateInit = convertDateTimestamp(dateInit)
  let timestampDateFinished
  (dateFinished === 'Now') ? timestampDateFinished = Date.now() : timestampDateFinished = convertDateTimestamp(dateFinished)

  const { value, unit } = getDateDiff(timestampDateInit, timestampDateFinished)
  const rtf = new Intl.RelativeTimeFormat('es', { style: 'long' })
  if (unit === 'day' && Math.abs(value) > 365) {
    const newValue = Math.round(value / 365)
    const newUnit = 'year'
    return rtf.format(newValue, newUnit)
  }
  if (unit === 'day' && Math.abs(value) < 365) {
    const newValue = Math.round(value / 30)
    const newUnit = 'month'
    return rtf.format(newValue, newUnit)
  }

  return rtf.format(value, unit)
}
