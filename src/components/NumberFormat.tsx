import React from 'react';
import { Text } from 'react-native';
import ReactNumberFormat from 'react-number-format';

export default function NumberFormat({ value }: { value: number }) {
  return (
    <ReactNumberFormat
      value={value}
      displayType={'text'}
      thousandSeparator="."
      decimalSeparator=","
      prefix={'Rp'}
      renderText={formattedValue => <Text>{formattedValue}</Text>}
    />
  );
}
