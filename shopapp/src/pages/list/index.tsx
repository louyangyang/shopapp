import React from 'react';

import { useNavigate } from 'react-router-dom';

const search: React.FC = () => {
  const Navigate=useNavigate()
  return (
    <div>
  
        标题
        <button onClick={()=>Navigate('/list')}></button>
     
    </div>
  );
};

export default search;