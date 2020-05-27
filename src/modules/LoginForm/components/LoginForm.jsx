import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Block, Button} from "../../../components";
import {Form, Input} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';

class LoginForm extends Component {
  render () {
    return (

       <div>
             <div className="auth__top">
               <h2>Войти в аккаутн</h2>
               <p>Пожалуйта, войдите в свой аккаунт</p>
             </div>
         <Block>
         <Form name="normal_login"
                 className="login-form">
             <Form.Item validateStatus='success'
                        hasFeedback>
               <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                      placeholder="Username"
                      size='large'/>
             </Form.Item>
             <Form.Item>
               <Input
                  prefix={<LockOutlined className="site-form-item-icon"/>}
                  type="password"
                  placeholder="Password"
                  size='large'/>
             </Form.Item>
             <Form.Item>
               <Button type="primary" size='large'>
                 Войти в аккаунт
               </Button>
             </Form.Item>
             <Link className='auth register-link' to='/register'>Зарегестрироваться</Link>
           </Form>
         </Block>
       </div>

    )
  }
}

export default LoginForm