import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Block, Button} from "../../../components";
import {Form, Input} from 'antd';
import {MailOutlined, LockOutlined, InfoCircleTwoTone} from '@ant-design/icons';

class RegisterForm extends Component {

  render () {
    const success = false;
    return (

       <div>
             <div className="auth__top">
               <h2>Регистрация</h2>
               <p>Для входа в чат, вам нужно зарегистрироваться</p>
             </div>
         <Block>
           {!success ?(
              <Form name="normal_login"
                    className="login-form">
                <Form.Item validateStatus='success'
                           hasFeedback>
                  <Input prefix={<MailOutlined className="site-form-item-icon"/>}
                         type='email'
                         placeholder="Email"
                         size='large'/>
                </Form.Item>
                <Form.Item>
                  <Input
                     prefix={<LockOutlined className="site-form-item-icon"/>}
                     type="user"
                     placeholder="Ваше имя"
                     size='large'/>
                </Form.Item>
                <Form.Item>
                  <Input
                     prefix={<LockOutlined className="site-form-item-icon"/>}
                     type="password"
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
                  <Button type="primary" size='large'>
                    Зарегестрироваться
                  </Button>
                </Form.Item>
                <Link className='auth register-link' to='/'>Войти в аккаунт</Link>
              </Form>
           ): (<div className='auth__success-block'>
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
}

export default RegisterForm