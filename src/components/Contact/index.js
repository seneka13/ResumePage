import React from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import PageWrapper from '../PageWrapper'
import ContactIcon from '../Icons/ContactIcon'
import ContactInfo from './ContactInfo'
import PageTitle from '../PageTitle'
import { toggleMenu } from '../../store/actions'
import style from './contact.module.scss'


function Contact() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    const toggle = (show) => dispatch(toggleMenu(show))
    toggle(false)
  }, [dispatch])
  return (
    <PageWrapper>
      <Container className="pt-5">
        <PageTitle text="Свяжитесь со мной" icon={<ContactIcon className={style.icon} />} />
        <ContactInfo />
      </Container>
    </PageWrapper>
  )
}

export default Contact
