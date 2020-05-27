import React from 'react';
import style from './contactlist.module.scss';
import {NavLink} from 'react-router-dom';
import PageWapper from '../PageWrapper'

function ContactInfo({location, params}) {
return (
    <PageWapper>
        <div className={style.contactInfo}>
            <img className={style.contactImg} src={location.state.contact.imgSrc} alt="contact photo"/>
            <div className={style.contactAbout}>
                <div>{location.state.contact.name}</div>
                <div>{location.state.contact.phone}</div>
                <div>{location.state.contact.address}</div>
                <div className={style.contactText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ut sapiente qui adipisci tempore, neque numquam vitae natus facere reiciendis officiis earum provident praesentium veniam facilis illo dicta saepe in!Nemo excepturi temporibus, velit possimus, ducimus fugiat debitis nihil, pariatur suscipit dignissimos explicabo. Corporis asperiores, numquam porro eaque, ratione veniam ad fugit repellendus voluptas, architecto nesciunt velit consequatur ex nihil?</div>
            </div>
        </div>
    </PageWapper>
)
}

export default ContactInfo