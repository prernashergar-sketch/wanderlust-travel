import { useState } from 'react'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!values.name.trim()) e.name = 'Please enter your name.'
    if (!values.email.trim()) e.email = 'Please enter your email.'
    else if (!emailPattern.test(values.email.trim())) e.email = 'Please enter a valid email address.'
    if (!values.message.trim()) e.message = 'Please write a message.'
    return e
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
    setSubmitted(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length === 0) {
      setSubmitted(true)          // Demo only: nothing is actually sent.
      setValues({ name: '', email: '', message: '' })
    }
  }

  const field = (name, label, props = {}) => (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      {props.as === 'textarea'
        ? <textarea id={name} name={name} rows="5" value={values[name]} onChange={handleChange}
            aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-err` : undefined} />
        : <input id={name} name={name} type={props.type || 'text'} value={values[name]} onChange={handleChange}
            aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-err` : undefined} />}
      {errors[name] && <p className="error" id={`${name}-err`}>{errors[name]}</p>}
    </div>
  )

  return (
    <section id="contact" className="section tinted">
      <div className="container contact">
        <div>
          <p className="eyebrow dark">Contact</p>
          <h2>Say hello</h2>
          <p>Have a question or a destination idea? Send us a note using the form.</p>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          {field('name', 'Name')}
          {field('email', 'Email', { type: 'email' })}
          {field('message', 'Message', { as: 'textarea' })}
          <button type="submit" className="btn btn-primary">Send Message</button>
          {submitted && (
            <p className="success" role="status">
              Thanks! This is a demo form, so your message was not actually sent.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
