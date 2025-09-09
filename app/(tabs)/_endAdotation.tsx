import { Feather } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* --- Cabeçalho com o botão de Menu --- */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="menu" size={24} color="#88c9bf" />
          <Text style={styles.headerText}>Finalizar Processo!</Text>
        </TouchableOpacity>
      </View>

      {/* --- Conteúdo Principal (ocupa o espaço do meio) --- */}
      <View style={styles.content}>
        <Text style={styles.subtitle}>
          Ficamos muito felizes com o sucesso{'\n'}
          do seu processo! Esperamos que o{'\n'}
          bichinho esteja curtindo muito essa{'\n'}
          nova experiência!
        </Text>
        <Text style={styles.subtitle}>
          Agora, que tal compartilhar a história{'\n'}
          do Bacon com todos os outros{'\n'}
          membros do Meau?
        </Text>
      </View>

      {/* --- Rodapé (empurrado para o final) --- */}
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>COMPARTILHAR HISTÓRIA</Text>
          </TouchableOpacity>
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
  headerText:{
    textAlign: 'justify',
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    color:"#433434"
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  footer: {
    alignItems: 'center',
    paddingBottom: 32, 
  },

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