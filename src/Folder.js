import React, { useState } from 'react';

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  console.log(explorer);
  if (explorer.isFolder) {
    return (
      <div>
        <span onClick={() => setExpand(!expand)}>{explorer.name}</span>
        {expand ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '30px',
            }}
          >
            {explorer.items.map((exp) => {
              return (
                <span>
                  <Folder explorer={exp} />
                </span>
              );
            })}
          </div>
        ) : (
          ''
        )}
      </div>
    );
  } else {
    return <span>{explorer.name}</span>;
  }
};
export default Folder;
