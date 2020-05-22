import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import NumberFormat from './NumberFormat';
import { Item } from 'src/types';

interface ListItemProp {
  id: string;
  name: string;
  desc?: string;
  price: number;
  calories: number;
  imageUrl: string;
  selected: boolean;
  onPress: (item: Item) => void;
  onSecondPress: (item: Item) => void;
}

export default function ListItem({
  id,
  name,
  desc,
  price,
  calories,
  imageUrl,
  onPress,
  onSecondPress,
  selected,
}: ListItemProp) {
  const item = { id, name, desc, price, calories, imageUrl };
  return (
    <View style={listItemStyle.container}>
      <View style={listItemStyle.headerAligner}>
        <Image
          source={{
            uri: 'https://picsum.photos/200',
            width: 10,
            height: 10,
          }}
        />
        <Text style={listItemStyle.calorieText}>{calories} Calories</Text>
      </View>
      <Image source={{ uri: imageUrl }} style={listItemStyle.mainImage} />
      <View style={{ paddingHorizontal: 30 }}>
        <Text style={listItemStyle.nameText}>{name}</Text>
        <Text style={listItemStyle.descText}>{desc}</Text>
        <Text style={listItemStyle.priceText}>
          <NumberFormat value={price} />
        </Text>
      </View>
      <View
        style={[
          listItemStyle.absoluteCircle,
          selected && listItemStyle.selected,
        ]}
      >
        <TouchableNativeFeedback
          onPress={() => onSecondPress(item)}
          background={TouchableNativeFeedback.Ripple('#efefef', true)}
        >
          <View style={{ flex: 1 }}>
            <Text style={listItemStyle.icon}>
              {selected ? (
                <Text style={{ color: 'white' }}>&#10003;</Text>
              ) : (
                '+'
              )}
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

const listItemStyle = StyleSheet.create({
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
  icon: {
    color: 'black',
    fontSize: 20,
    alignSelf: 'center',
    lineHeight: 40,
  },

  // View
  container: {
    flex: 0.5,
    marginHorizontal: 5,
    marginVertical: 20,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    alignItems: 'flex-start',
    paddingVertical: 30,
  },
  absoluteCircle: {
    elevation: 2,
    position: 'absolute',
    right: 15,
    bottom: -10,
    backgroundColor: '#f8f8f8',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: 'green',
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
