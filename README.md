# 3DAMNA - PGL > UT3 > Counter App with Persistent Data ([Zustand](https://zustand-demo.pmnd.rs/))

Esta es una aplicación de contador simple desarrollada en Expo. La aplicación muestra un contador y permite al usuario aumentar o disminuir el valor del contador haciendo clic en botones. También se puede alternar el idioma entre Español e Inglés. Y tiene persistencia de datos.

## Características

- Muestra un contador en pantalla.
- Permite al usuario aumentar o disminuir el contador haciendo clic en botones.
- Alternar idioma entre español e inglés.
- La aplicación utiliza el manejo de estados con Zustand para gestionar el estado del contador de manera global y compartida entre componentes.
- Persistencia de datos: Los datos se almacenan localmente para que persistan incluso después de cerrar la aplicación.

## Zustand

Zustand es una biblioteca de gestión de estado mínima y liviana para React que facilita la administración del estado global en tus aplicaciones. Puedes obtener más información sobre Zustand en su [sitio de documentación oficial](https://github.com/pmndrs/zustand).

## Async Storage

La persistencia de datos en esta aplicación se logra mediante el uso de Async Storage, una biblioteca de almacenamiento asincrónico en React Native. Puedes obtener más información sobre Async Storage en la [documentación oficial](https://react-native-async-storage.github.io/async-storage/docs/install).

## Interacción y Componentes

La aplicación utiliza algunos conceptos clave de interacción y componentes en React Native:

- Utiliza botones (`FAB`) de [react-native-elements](https://reactnativeelements.com/) para permitir al usuario interactuar con la aplicación y modificar el contador.
- Los componentes de texto (`Text`) se utilizan para mostrar el valor actual del contador en la pantalla.

Para obtener más información sobre cómo agregar interactividad a las aplicaciones de React Native y aprender sobre los componentes disponibles, consulta la [documentación oficial de react-native-elements](https://reactnativeelements.com/docs/3.4.2/fab).

## Navegación por Pestañas

Si deseas explorar la navegación por pestañas en Expo, puedes consultar la documentación de [Tabs de Expo Router](https://docs.expo.dev/router/advanced/tabs/).

## Ejemplo de Uso

### 1. Configuración de Zustand

Primero, configuramos nuestro estado global utilizando Zustand en un archivo separado, como `CounterStore.ts`.

```javascript
import create from 'zustand';
import { persist, createJSONStorage } from "zustand/middleware";

type CounterStoreType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounterStore = create<CounterStoreType>()((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
export const useCounterStore = create<CounterStoreType>()(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }),
    { name: "counter-store", storage: createJSONStorage(() => AsyncStorage) }
  )
);
```

### 2. Uso de Zustand en Componentes

Ahora, podemos usar el estado global de Zustand en nuestros componentes. Por ejemplo:

```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { useCounterStore } from './CounterStore';

const CounterApp = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{count}</Text>
      <Button
        title="Increment"
        onPress={increment}
      />
      <Button
        title="Decrement"
        onPress={decrement}
      />
    </View>
  );
};

export default CounterApp;
