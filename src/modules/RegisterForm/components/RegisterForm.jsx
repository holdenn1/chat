import React from 'react';
import {Link} from 'react-router-dom'
import {Block, Button} from "../../../components";
import {Form, Input} from 'antd';
import {MailOutlined, LockOutlined, InfoCircleTwoTone} from '@ant-design/icons';

const RegisterForm = props => {
  const success = false;
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,


  } = props;
  return (

     <div>
       <div className="auth__top">
         <h2>Регистрация</h2>
         <p>Для входа в чат, вам нужно зарегистрироваться</p>
       </div>
       <Block>
         {!success ? (
            <Form onSubmit={handleSubmit}
                  className="login-form">
              <Form.Item validateStatus={!touched.email ? '' : errors.email ? 'error' : 'success'}

                         hasFeedback>
                <Input
                   id='email'
                   prefix={<MailOutlined className="site-form-item-icon"/>}
                   type='email'
                   placeholder="Email"
                   value={values.email}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   size='large'/>
              </Form.Item>
              <Form.Item>
                <Input
                   prefix={<LockOutlined className="site-form-item-icon"/>}
                   type="user"
                   placeholder="Ваше имя"
                   size='large'/>
              </Form.Item>
              <Form.Item validateStatus={
                !touched.password ? '' : errors.password ? 'error' : 'success'
              }
                         hasFeedback
              >
                <Input
                   id='password'
                   prefix={<LockOutlined className="site-form-item-icon"/>}
                   type="password"
                   value={values.password}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   placeholder="Пароль"
                   size='large'/>
              </Form.Item>
              <Form.Item>
                <Input
                   prefix={<LockOutlined className="site-form-item-icon"/>}
                   type="password"
                   placeholder="Повторите пароль"
                   size='large'/>
              </Form.Item>
              <Form.Item>
                <Button onClick={handleSubmit} type="primary" size='large'>
                  Зарегестрироваться
                </Button>
              </Form.Item>
              <Link className='auth register-link' to='/'>Войти в аккаунт</Link>
            </Form>
         ) : (<div className='auth__success-block'>
           <div>
             <InfoCircleTwoTone style={{fontSize: '50px'}} type='info-circle' theme='twoTone'/>
           </div>
           <h3>Подтвердите свой аккаунт</h3>
           <p>На вашу почту отправлено письмо с сылкой на подтверждение аккаунта.</p>
         </div>)}

       </Block>
     </div>

  )
}

export default RegisterForm