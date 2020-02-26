import React from 'react';
import Article from './Article';
import RecruitForm from './RecruitForm';

const Section = () => {
  return (
    <section>
      <p>기사들을 담는 상자</p>
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
