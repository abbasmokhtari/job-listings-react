import React from 'react';

function AdBlock(props) {
  return (
    <div>
      {props.jobs.map((e) => {
        return (
          <div className='mainDiv' key={e.id}>
            <div className='groupOne'>
              <img src={e.logo} />
              <div className='groupTwo'>
                <div className='groupThree'>
                  <div className='company'>{e.company}</div>
                  <div className={e.new && 'new'}>{e.new && 'NEW'}</div>
                  <div className={e.featured && 'featured'}>{e.featured && 'FEATURED'}</div>
                </div>
                <p>{e.position}</p>
                <p className='pcl'>
                  {e.postedAt} - {e.contract} - {e.location}
                </p>
              </div>
            </div>
            <div className='skills'>
              <p>{e.role}</p>
              <p>{e.level}</p>
              {e.languages.map((language, i)=> {
                return(<p key={i}>{language}</p>) 
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AdBlock;
