import styles from '../styles/alert.module.css'
import cn from 'classnames'
import TypeProps from 'prop-types'

export default function Alert ({ children, type }) {
  return (
        <div
            className={cn({
              [styles.success]: type === 'success',
              [styles.error]: type === 'error'
            })}
        >
            {children}
        </div>
  )
}

Alert.propTypes = {
  children: TypeProps.any,
  type: TypeProps.any
}
