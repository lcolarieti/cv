import React, {PropsWithChildren} from 'react';
import {ILink, IUser} from '../interfaces/cv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt, faMapPin, faBirthdayCake, faLink } from '@fortawesome/free-solid-svg-icons';


type UserProps = PropsWithChildren<any> & IUser;

const User: React.FC<UserProps> = (props) => {
  const {user} = props;

  return (
    <div className="user">

      <div className="picture-wrap">
        <img src={user.picture} alt={user.name} />
      </div>

      <h1 title={user.name}>{user.name}</h1>
      <h2 title={user.role}>{user.role}</h2>

      <p>
        <FontAwesomeIcon icon={faMapPin} />
        <span>
          {user.city}, {user.country}
        </span>
      </p>

      <p>
        <FontAwesomeIcon icon={faBirthdayCake} />
        <span>
          {user.birth}
        </span>
      </p>

      <p>
        <FontAwesomeIcon icon={faEnvelope} />
        <a
          href={`mailto: ${user.email}`}
          title={user.email}
          target="_blank"
          rel="noopener noreferrer"
        >
          {user.email}
        </a>
      </p>

      <p>
        <FontAwesomeIcon icon={faMobileAlt} />
        <a
          href={`tel: ${user.phone}`}
          title={user.phone}
        >
          {user.phone}
        </a>
      </p>

      {(user.links.length > 0) && <h3 title="Link utili">Link utili</h3>}
      {user.links.map((link: ILink, index: number) => {
        return (
          <p key={index}>
            <FontAwesomeIcon icon={faLink} />
            <a
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          </p>
        );
      })}


    </div>
  );
};

export default User;