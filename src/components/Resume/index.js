import React from 'react'
import { useDispatch } from 'react-redux'
import PageWrapper from '../PageWrapper'
import Development from '../Development'
import { toggleMenu } from '../../store/action'

function Resume() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    const toggle = () => dispatch(toggleMenu())
    toggle(false)
  }, [dispatch])
  return (
    <PageWrapper>
      <Development />
    </PageWrapper>
  )
}


export default Resume
