import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import NumberFormat from 'react-number-format';

const mockupData = [
  {
    name: 'A good book',
    imageUrl: 'https://picsum.photos/200',
    price: 500000,
    desc: 'A tool to watch',
    calories: 200,
    id: '1',
  },
  {
    name: 'Laptop',
    imageUrl: 'https://picsum.photos/200',
    price: 10000000,
    desc: 'A tool to watch',
    calories: 200,
    id: '2',
  },
  {
    name: 'Keyboard',
    imageUrl: 'https://picsum.photos/200',
    price: 300000,
    desc: 'A tool to watch',
    calories: 200,
    id: '3',
  },
  {
    name: 'TV',
    imageUrl: 'https://picsum.photos/200',
    price: 5000000,
    desc: 'A tool to watch',
    calories: 200,
    id: '4',
  },
  {
    name: 'Smartphone',
    imageUrl: 'https://picsum.photos/200',
    price: 7000000,
    desc: 'A tool to watch',
    calories: 200,
    id: '5',
  },
  {
    name: 'Smartphone',
    imageUrl: 'https://picsum.photos/200',
    price: 7000000,
    desc: 'A tool to watch',
    calories: 200,
    id: '6',
  },
  {
    name: 'Smartphone',
    imageUrl: 'https://picsum.photos/200',
    price: 7000000,
    desc: 'A tool to watch',
    calories: 200,
    id: '7',
  },
  {
    name: 'Smartphone',
    imageUrl: 'https://picsum.photos/200',
    price: 7000000,
    desc: 'A tool to watch',
    calories: 200,
    id: '8',
  },
  {
    name: 'Smartphone',
    imageUrl: 'https://picsum.photos/200',
    price: 7000000,
    desc: 'A tool to watch',
    calories: 200,
    id: '9',
  },
  {
    name: 'Smartphone',
    imageUrl: 'https://picsum.photos/200',
    price: 7000000,
    desc: 'A tool to watch',
    calories: 200,
    id: '10',
  },
  {
    name: 'Smartphone',
    imageUrl: 'https://picsum.photos/200',
    price: 7000000,
    desc: 'A tool to watch',
    calories: 200,
    id: '11',
  },
];

export default function Products() {
  return (
    <FlatList
      data={mockupData}
      keyExtractor={i => i.id}
      numColumns={2}
      renderItem={({ item }) => {
        return <ListItem {...item} />;
      }}
      contentContainerStyle={{
        padding: 5,
      }}
    />
  );
}

function ListItem({
  name,
  desc,
  price,
  calories,
  imageUrl,
}: {
  name: string;
  desc?: string;
  price: number;
  calories: number;
  imageUrl: string;
}) {
  return (
    <View style={productsStyle.container}>
      <View style={productsStyle.headerAligner}>
        <Image
          source={{ uri: 'https://picsum.photos/200', width: 10, height: 10 }}
        />
        <Text style={productsStyle.calorieText}>{calories} Calories</Text>
      </View>
      <Image source={{ uri: imageUrl }} style={productsStyle.mainImage} />
      <View style={{ paddingHorizontal: 30 }}>
        <Text style={productsStyle.nameText}>{name}</Text>
        <Text style={productsStyle.descText}>{desc}</Text>
        <Text style={productsStyle.priceText}>
          <NumberFormat
            value={price}
            displayType={'text'}
            thousandSeparator="."
            decimalSeparator=","
            prefix={'Rp'}
            renderText={formattedValue => <Text>{formattedValue}</Text>}
          />
        </Text>
      </View>

      <View style={productsStyle.absoluteCircle}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('#efefef', true)}
        >
          <View style={{ flex: 1 }}>
            <Text style={productsStyle.chevronIcon}>&#8250;</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

const productsStyle = StyleSheet.create({
  // Text
  calorieText: {
    fontSize: 11,
    color: 'grey',
    marginLeft: 5,
  },
  nameText: {
    marginTop: 5,
  },
  descText: {
    color: 'grey',
    fontSize: 12,
  },
  priceText: {
    marginTop: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },
  chevronIcon: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
    lineHeight: 25,
  },

  // View
  container: {
    flex: 0.5,
    marginHorizontal: 5,
    marginVertical: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'flex-start',
    paddingVertical: 30,
  },
  absoluteCircle: {
    position: 'absolute',
    right: 15,
    bottom: -10,
    backgroundColor: 'darkgrey',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
  },

  // Image
  mainImage: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  headerAligner: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
