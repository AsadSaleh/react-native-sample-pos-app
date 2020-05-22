import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import {
  FlatList,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import NumberFormat from 'src/components/NumberFormat';
import ListItem, { Item } from '../components/ListItem';

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
    name: 'MacBook Pro 13"',
    imageUrl: 'https://picsum.photos/200',
    price: 7000000,
    desc: 'A tool to watch',
    calories: 200,
    id: '6',
  },
  {
    name: 'MacBook Pro 15"',
    imageUrl: 'https://picsum.photos/200',
    price: 7000000,
    desc: 'A tool to watch',
    calories: 200,
    id: '7',
  },
  {
    name: 'Dell XPS 13"',
    imageUrl: 'https://picsum.photos/200',
    price: 7000000,
    desc: 'A tool to watch',
    calories: 200,
    id: '8',
  },
  {
    name: 'Dell XPS 15"',
    imageUrl: 'https://picsum.photos/200',
    price: 7000000,
    desc: 'A tool to watch',
    calories: 200,
    id: '9',
  },
  {
    name: 'Dell XPS 17"',
    imageUrl: 'https://picsum.photos/200',
    price: 7000000,
    desc: 'A tool to watch',
    calories: 200,
    id: '10',
  },
  {
    name: 'SurfaceBook',
    imageUrl: 'https://picsum.photos/200',
    price: 7000000,
    desc: 'A tool to watch',
    calories: 200,
    id: '11',
  },
];

export default function Products({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  const [selectedIds, setSelectedIds] = useState<Array<string>>([]);
  function handleNavigateToModal() {
    navigation.navigate('Cart', {
      items: mockupData.filter(item => selectedIds.includes(item.id)),
    });
  }
  function handleNavigateToItemDetail(item: Item) {
    navigation.navigate('ProductDetail', { id: item.id });
  }
  function handleAddItemToChart(item: Item) {
    setSelectedIds(selectedids => {
      if (selectedIds.includes(item.id)) {
        return selectedids.filter(selectedId => selectedId !== item.id);
      }
      return selectedids.concat(item.id);
    });
  }
  return (
    <View>
      <FlatList
        data={mockupData}
        keyExtractor={i => i.id}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <ListItem
              {...item}
              onPress={handleNavigateToItemDetail}
              onSecondPress={handleAddItemToChart}
              selected={selectedIds.includes(item.id)}
            />
          );
        }}
        ListFooterComponent={() => <View style={{ height: 100 }} />}
        style={{ backgroundColor: 'white' }}
        contentContainerStyle={{
          padding: 5,
        }}
      />
      {selectedIds.length ? (
        <View style={productsStyle.floatingResume}>
          <TouchableNativeFeedback onPress={handleNavigateToModal}>
            <View style={productsStyle.floatingResumeAligner}>
              <View style={productsStyle.floatingResumeLeftSide}>
                <Text style={productsStyle.resumeTextTitle}>
                  Total ({selectedIds.length} items)
                </Text>
                <Text
                  style={productsStyle.resumeTextItems}
                  ellipsizeMode="tail"
                  numberOfLines={2}
                >
                  {mockupData
                    .filter(item => selectedIds.includes(item.id))
                    .map(item => item.name)
                    .join(', ')}
                </Text>
              </View>
              <View style={productsStyle.floatingResumeRightSide}>
                <Text style={productsStyle.resumeTextSubtotal}>
                  <NumberFormat
                    value={mockupData
                      .filter(item => selectedIds.includes(item.id))
                      .reduce((acc, cur) => acc + cur.price, 0)}
                  />
                </Text>
              </View>
            </View>
          </TouchableNativeFeedback>
        </View>
      ) : null}
    </View>
  );
}

const productsStyle = StyleSheet.create({
  // Text
  resumeTextTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  resumeTextItems: {
    fontSize: 11,
    color: 'white',
    fontWeight: '100',
  },
  resumeTextSubtotal: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  // View
  floatingResume: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'darkgrey',
    width: Dimensions.get('window').width - 20,
    marginHorizontal: 10,
    marginBottom: 15,
    borderRadius: 7,
  },
  floatingResumeAligner: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  floatingResumeLeftSide: {
    flex: 0.6,
  },
  floatingResumeRightSide: {
    flex: 0.4,
  },
});
