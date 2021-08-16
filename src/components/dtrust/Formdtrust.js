import React, { useState } from 'react';

import DTrustForm from './dtrustForm';
import DTrustAlarm from './dtrustAlarm';

export default function Formdtrust() {
  const [dtruststate, setdtruststate] = useState('none');

  return (
    <div>
      {dtruststate === 'none' ? <DTrustForm setdtruststate={setdtruststate} /> : <DTrustAlarm dtruststate={dtruststate} />}
    </div>
  );
}
