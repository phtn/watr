import React from 'react'
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh'
  }
}
export default props => {
  const { title } = props
  return(
    <div style={styles.container}>
      {title} {`__<>__`}
    </div>
  )
}