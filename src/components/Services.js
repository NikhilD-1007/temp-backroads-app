import Title from './Title'
import { services } from '../data'
import Service from './Service'

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {services.map((service) => {
          return <Service key={service.id} {...service} />

          // Below code written and create in separte single component page which is know as Service
          // const { id, icon, text, title } = service
          // return (
          //   <article className="service" key={id}>
          //     <span className="service-icon">
          //       <i className={icon}></i>
          //     </span>
          //     <div className="service-info">
          //       <h4 className="service-title">{title}</h4>
          //       <p className="service-text">{text}</p>
          //     </div>
          //   </article>
          // )
        })}
      </div>
    </section>
  )
}
export default Services
