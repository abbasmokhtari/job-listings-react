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
                  <div>{e.company}</div>
                  <div>{e.new && 'NEW'}</div>
                  <div>{e.featured && 'FEATURED'}</div>
                </div>
                <p>{e.position}</p>
                <p>
                  {e.postedAt} - {e.contract} - {e.location}
                </p>
              </div>
            </div>
            <div className='skills'>
              <p>{e.role}</p>
              <p>{e.level}</p>
              <p>{e.languages}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AdBlock;
