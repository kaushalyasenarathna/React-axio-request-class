import React from 'react';
import ButtonElement from './reusable-components/ButtonElement';

const ContactCard = ({ contact, index, onRemove }) => {
  const fname = contact?.fname;
  const lname = contact?.lname;  
  const username = contact?.username; 
  const avatar = contact?.avatar;  
  return (
    <div className="col-lg-3 col-md-3 col-sm-6 mb-3">
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <div className="circle mr-3">
              {avatar ? (
                <img src={avatar} alt={fname} width="40" height="40" />
              ) : fname ? (
                fname[0]
              ) : (
                ''
              )}
            </div>
            <div>
              <strong>{fname} {lname}</strong>
              <br />
              <small>{contact?.mobileNo}</small>
              <br />
              <small>{username}</small>
            </div>
            <ButtonElement
              type="button"
              className="btn btn-danger"
              handleFunction={() => onRemove(index)}
              buttonName="X"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
