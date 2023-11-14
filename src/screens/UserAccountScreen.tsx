import * as React from 'react';
import {Text, View, StyleSheet, StatusBar, Image, ScrollView} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import AppHeader from '../components/AppHeader';
import SettingComponent from '../components/SettingComponent';

const UserAccountScreen = ({navigation}: any) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.appHeaderContainer}>
        <AppHeader
          name="close"
          header={'Mi Perfil'}
          action={() => navigation.goBack()}
        />
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/image/avatar.png')}
          style={styles.avatarImage}
        />
        <Text style={styles.avatarText}>John Doe</Text>
      </View>

      <View style={styles.profileContainer}>
        <SettingComponent
          icon="user"
          heading="Cuenta"
          subheading="Editar perfil"
          subtitle="Cambiar contraseña"
        />
        <SettingComponent
          icon="setting"
          heading="Ajustes"
          subheading="Tema"
          subtitle="Permisos"
        />
        <SettingComponent
          icon="dollar"
          heading="Ofertas y referidos"
          subheading="Ofertas"
          subtitle="Referidos"
        />
        <SettingComponent
          icon="info"
          heading="Acerca de"
          subheading="Películas"
          subtitle="Otros"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: COLORS.Black,
  },
  appHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_20 * 2,
  },
  profileContainer: {
    alignItems: 'center',
    padding: SPACING.space_36,
  },
  avatarImage: {
    height: 80,
    width: 80,
    borderRadius: 80,
  },
  avatarText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    marginTop: SPACING.space_16,
    color: COLORS.White,
  },
});

export default UserAccountScreen;