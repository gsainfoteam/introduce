import React from 'react';
import Article from './Article';
import RecruitForm from './RecruitForm';

const Section = () => {
  return (
    <section>
      <Article className="nas" />
      <Article className="gistory" />
      <Article className="facebook" />
      <Article className="warning" />
      <Article className="application" />
      <RecruitForm />
    </section>
  );
};

export default Section;
