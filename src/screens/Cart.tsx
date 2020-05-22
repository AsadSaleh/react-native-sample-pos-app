import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import NumberFormat from 'src/components/NumberFormat';
import { RootStackParamList } from 'src/types';

type CartProps = StackScreenProps<RootStackParamList, 'Cart'>;

export default function Cart({ navigation, route }: CartProps) {
  const { items } = route.params;
  return (
    <FlatList
      data={items}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={({ item }) => (
        <View style={cartStyle.container}>
          <Image
            source={{ uri: item.imageUrl }}
            style={{ width: 150, height: 150 }}
          />
          <View>
            <Text style={cartStyle.nameText}>{item.name}</Text>
            <Text style={cartStyle.priceText}>
              <NumberFormat value={item.price} />
            </Text>
          </View>
        </View>
      )}
    />
  );
}

const cartStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  nameText: {
    textAlign: 'right',
  },
  priceText: {
    textAlign: 'right',
  },
});
