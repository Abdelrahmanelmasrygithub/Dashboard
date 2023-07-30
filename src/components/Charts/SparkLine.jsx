import React, { memo } from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

const SparkLine = memo(({ id, height, width, color, data, type, currentColor }) => {
  const tooltipSettings = {
    visible: true,
    format: '${x} : data ${yval}',
    trackLineSettings: {
      visible: true,
    },
  };

  const markerSettings = {
    visible: ['All'],
    size: 3.5,
    fill: currentColor,
  };

  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      tooltipSettings={tooltipSettings}
      markerSettings={markerSettings}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
});

export default SparkLine;
