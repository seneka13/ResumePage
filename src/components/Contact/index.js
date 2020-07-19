import React from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import PageWrapper from '../PageWrapper'
import ContactIcon from '../Icons/ContactIcon'
import ContactInfo from './ContactInfo'
import { toggleMenu } from '../../store/action'
import style from './contact.module.scss'


function Contact() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    const toggle = () => dispatch(toggleMenu())
    toggle(false)
  }, [dispatch])
  return (
    <PageWrapper>
      <Container className="pt-5">
        <div className={style.iconLine}>
          <ContactIcon className={style.icon} />
        </div>
        <h2 className={style.title}>Свяжитесь со мной</h2>
        <ContactInfo />
      </Container>
    </PageWrapper>
  )
}

export default Contact
