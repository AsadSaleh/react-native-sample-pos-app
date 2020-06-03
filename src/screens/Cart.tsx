import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import NumberFormat from 'src/components/NumberFormat';
import QuantityInput from 'src/components/QuantityInput';
import { RootStackParamList } from 'src/types';

type CartProps = StackScreenProps<RootStackParamList, 'Cart'>;

const { width } = Dimensions.get('window');

export default function Cart({ route }: CartProps) {
  const { items } = route.params;
  return (
    <FlatList
      data={items}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      ListHeaderComponentStyle={{ height: 10 }}
      ListHeaderComponent={View}
      style={{ backgroundColor: 'white' }}
      renderItem={({ item }) => (
        <View style={cartStyle.container}>
          <View style={cartStyle.imageContainer}>
            <Image
              source={{ uri: item.imageUrl }}
              style={cartStyle.itemImage}
            />
          </View>
          <View style={cartStyle.textContainer}>
            <Text style={cartStyle.nameText} numberOfLines={2}>
              {item.name}
            </Text>
            <Text style={cartStyle.priceText}>
              <NumberFormat value={item.price} />
            </Text>
            <View style={cartStyle.inputContainer}>
              {/* <TextInput style={cartStyle.input} /> */}
              <QuantityInput />
            </View>
          </View>
        </View>
      )}
    />
  );
}

const cartStyle = StyleSheet.create({
  // Text
  nameText: {},
  priceText: {
    marginTop: 5,
    fontWeight: 'bold',
  },

  // View
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 120,
    // marginHorizontal: 10,
  },
  imageContainer: {
    width: (3 / 8) * width,
    paddingLeft: 10,
  },
  textContainer: {
    width: (4 / 8) * width,
    padding: 10,
  },
  inputContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },

  // Image
  itemImage: {
    borderRadius: 20,
    flex: 1,
  },

  // Input
  input: {
    borderRadius: 5,
    fontSize: 20,
    backgroundColor: 'green',
  },
});
