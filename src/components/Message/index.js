import React from 'react';
import PropTypes from 'prop-types'
import './Message.scss'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import classNames from 'classnames'
import readed from './../../assets/img/readed.svg'
import noReaded from './../../assets/img/noreaded.svg'

const Message = ({avatar, user, text, date, isMe, isReaded, attachments}) => {
  return (
     <div className={classNames('message', {'message--isme': isMe})}>
       <div className="message__content">
         {isMe && isReaded ? (
            <img className='message__icon-readed'
                 src={readed}
                 alt=""
            />
         ) : (
            <img className='message__icon-readed message__icon-readed--no'
                 src={noReaded}
                 alt=""
            />
         )}
         <div className="message__avatar">
           <img src={avatar} alt={`Avatar ${user.fullName}`}/>
         </div>
         <div className="message__info">

             <div className="message__bubble">
               <p className='message__text'>{text}</p>
             </div>
           <div className="message__attachments">
             {attachments && attachments.map(item => (
                <div className="message__attachments-item">
                  <img src={item.url} alt={item.filename}/>
                </div>
             ))}
           </div>
             <span className="message__date">{formatDistanceToNow(date)}</span>
         </div>
       </div>
     </div>
  );
};

Message.defaultProps = {
  user: {}
}

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array
}

export default Message;