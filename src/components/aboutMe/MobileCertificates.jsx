import React from 'react';
import style from '../projects/styleSheet';
import certifications from '../../data/certifications';
import { uppercase } from '../../util/helperFunctions';
import Card from '../Card';
import { Link } from 'react-router-dom';

const MobileCertificates = () => {

  const renderCertifications = certifications.map(({ name, certificationUrl, image, altText, id }) => (
    <Card key={id} shadow={false} style={{ width: '95%' }}>
      <div style={{ width: '100%' }}>
        <h2 style={style.projectTitle}>{uppercase(name)}</h2>
        <Link style={{ ...style.flexCenter }} to={certificationUrl}>
          <img style={style.mobileImg} src={image} alt={altText} />
        </Link>
      </div>
    </Card>
  ));

  return (renderCertifications);
};

export default MobileCertificates;