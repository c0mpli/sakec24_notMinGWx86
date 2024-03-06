import React from 'react';
import {SemiCircleProgress} from 'react-semicircle-progressbar';

function ProgressBarSemi() {
    return (
      <div>
        <SemiCircleProgress
          percentage={80}
          size={{
            width: 150,
            height: 150,
          }}
          strokeWidth={10}
          strokeColor="#3C82F6"
        />
      </div>
    );
  }
  
  export default ProgressBarSemi;