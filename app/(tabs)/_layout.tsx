import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* --- Cabeçalho com o botão de Menu --- */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="menu" size={24} color="#88c9bf" />
        </TouchableOpacity>
      </View>

      {/* --- Conteúdo Principal (ocupa o espaço do meio) --- */}
      <View style={styles.content}>
        <Text style={styles.title}>Olá!</Text>
        <Text style={styles.subtitle}>
          Bem vindo ao Meau!{'\n'}
          Aqui você pode adotar, doar e ajudar{'\n'}
          cães e gatos com facilidade.{'\n'}
          Qual o seu interesse?
        </Text>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>ADOTAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>AJUDAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CADASTRAR ANIMAL</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.loginText}>login</Text>
        </TouchableOpacity>
      </View>

      {/* --- Rodapé (empurrado para o final) --- */}
      <View style={styles.footer}>
        <Image 
          source={require('@/assets/images/Meau_marca_2.png')} 
          style={styles.logoImage} 
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#fafafa',
  },

  header: {
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  footer: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',  },

  title: {
    fontFamily: 'Courgette-Regular',
    fontSize: 72,
    color: '#ffd358',
  },
  subtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#757575',
    textAlign: 'center',
    marginTop: 32,
    marginBottom: 32,
    paddingHorizontal: 20, 
  },
  button: {
    backgroundColor: '#ffd358',
    width: 232,
    height: 40,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: '#434343',
  },
  loginText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#88c9bf',
    marginTop: 24,
  },
  logoImage: {
    width: 120,
    resizeMode: 'contain',
  },
});