import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

interface QuantityInputProp {
  initialValue?: number;
  onChange: (count: number) => void;
}

export default function QuantityInput({
  initialValue = 0,
  onChange,
}: QuantityInputProp) {
  const [count, setCount] = useState(initialValue);
  function decrement() {
    setCount(prevCount => {
      if (prevCount > 0) {
        return prevCount - 1;
      }
      return prevCount;
    });
  }
  function increment() {
    setCount(prevCount => prevCount + 1);
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'green',
        borderRadius: 6,
      }}
    >
      <TouchableOpacity onPress={decrement} style={{ padding: 10 }}>
        <Text style={{ color: 'white' }}>-</Text>
      </TouchableOpacity>
      <Text style={{ color: 'white', padding: 10 }}>{count}</Text>
      <TouchableOpacity onPress={increment} style={{ padding: 10 }}>
        <Text style={{ color: 'white' }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
