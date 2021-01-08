import { parseISO, format } from 'date-fns'
import TypeProps from 'prop-types'

export default function Date ({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
Date.propTypes = {
  dateString: TypeProps.string
}
