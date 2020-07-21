import React from 'react'
import { useDispatch } from 'react-redux'
import PageWrapper from '../PageWrapper'
import Development from '../Development'
import { toggleMenu } from '../../store/actions'

function Resume() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    const toggle = (show) => dispatch(toggleMenu(show))
    toggle(false)
  }, [dispatch])
  return (
    <PageWrapper>
      <Development />
    </PageWrapper>
  )
}


export default Resume
