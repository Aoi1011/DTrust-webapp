import React, { useState } from 'react';

import DrsutForm from './DrustForm';
import DrustAlarm from './DrustAlarm';

export default function FormDrust() {
  const [druststate, setDruststate] = useState('none');

  return (
    <div>
      {druststate === 'none' ? <DrsutForm setDruststate={setDruststate} /> : <DrustAlarm druststate={druststate} />}
    </div>
  );
}
