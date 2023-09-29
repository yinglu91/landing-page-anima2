import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import './style.css'
import Navbar from '../../components/common/Navbar'

type Inputs = {
  firstName: string
  lastName: string
  email: string
  isDeveloper: boolean
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('submitted data', data)

    // {firstName: 'Ying', lastName: 'Lu', email: 'yinglu5374@gmail.com', isDeveloper: 'true'}
    //     reset()
  }

  return (
    <>
      <Navbar />

      <hr />
      <br />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='contact-design'>
          {/*  "handleSubmit" will validate your inputs before invoking "onSubmit"  */}

          <h1>Please Fill In Contact Form</h1>

          {/* include validation with required or other standard HTML validation rules */}
          <div>
            <label>First Name</label>
            <input
              {...register('firstName', { required: true })}
              placeholder='first name'
            />
            <br />
            {/* errors will return when field validation fails  */}
            {errors.firstName && <span>This field is required</span>}
            <br />
          </div>

          <div>
            <label>Last Name</label>
            <input
              {...register('lastName', { required: true })}
              placeholder='last name'
            />
            <br />

            {errors.lastName && <span>This field is required</span>}
          </div>

          <div>
            <label>Email</label>
            <input
              type='email'
              {...register('email', { required: true })}
            />
            <br />
            <br />
            {/* errors will return when field validation fails  */}
            {errors.email && (
              <span>This field is required and need to be email address</span>
            )}
          </div>

          <div>
            <label htmlFor='opt-in'>Developer (red - is developer)</label>
            <input
              type='checkbox'
              {...register('isDeveloper')}
              id='opt-in'
              value='true'
              className='custom-input'
            />

            <br />
          </div>

          <input type='submit' />
          <br />
        </div>
      </form>
    </>
  )
}

export default Contact
