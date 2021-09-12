import React, { useCallback, useState } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { Input } from '../components/Input';
import { Section } from '../components/Section';

const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

export const List = () => {
  const [items, setItems] = useState([]);
  const [orientation, setOrientation] = useState([]);
  Dimensions.addEventListener('change', () => {
    setOrientation(isPortrait() ? 'portrait' : 'landscape');
  });
  const toggleSwitch = useCallback(
    name => {
      items.forEach((item, index) => {
        if (item.name === name) {
          const arrayItems = [...items];
          arrayItems[index].isEnabled = !arrayItems[index].isEnabled;
          setItems(arrayItems);
        }
      });
    },
    [items],
  );
  const onSaveItem = useCallback(
    name => {
      let flag = true;
      items.forEach(item => {
        if (item.name === name) {
          flag = false;
        }
      });
      if (flag) {
        setItems(prevState => [...prevState, { name, isEnabled: false }]);
      }
    },
    [items],
  );
  const onViewAll = useCallback(() => {
    let str = '';
    items.forEach(item => {
      str += item.name + '\n';
    });
    alert(str);
  }, [items]);
  const onCancelAll = useCallback(() => {
    const arrayItems = [...items];
    arrayItems.forEach(item => {
      item.isEnabled = false;
    });
    setItems(arrayItems);
  }, [items]);
  const onChooseAll = useCallback(() => {
    const arrayItems = [...items];
    arrayItems.forEach(item => {
      item.isEnabled = true;
    });
    setItems(arrayItems);
  }, [items]);
  return (
    <ScrollView>
      {orientation === 'portrait' ? (
        <>
          <Input
            onSave={onSaveItem}
            onCancelAll={onCancelAll}
            onChooseAll={onChooseAll}
            onViewAll={onViewAll}
            orientation={orientation}
          />
          {items.map(item => (
            <Section
              orientation={orientation}
              key={item.name}
              title={item.name}
              isEnabled={item.isEnabled}
              toggleSwitch={() => toggleSwitch(item.name)}
            />
          ))}
        </>
      ) : (
        <>
          {items.map(item => (
            <Section
              key={item.name}
              orientation={orientation}
              title={item.name}
              isEnabled={item.isEnabled}
              toggleSwitch={() => toggleSwitch(item.name)}
            />
          ))}
          <Input
            onSave={onSaveItem}
            onCancelAll={onCancelAll}
            onChooseAll={onChooseAll}
            onViewAll={onViewAll}
            orientation={orientation}
          />
        </>
      )}
    </ScrollView>
  );
};
