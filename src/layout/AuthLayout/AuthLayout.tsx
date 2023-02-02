import {
  ScrollView,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './AuthStyles';

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({children}: AuthLayoutProps) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView keyboardDismissMode="on-drag">
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            alt="logo"
            source={require('assets/logo.png')}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Create your e-commerce</Text>
          <Text style={styles.description}>
            Prova Vetrina Live gratuitamente per 7 giorni e apri il tuo negozio
            online in pochi minuti. Nessuna carta di credito richiesta.
          </Text>
        </View>
        <View>{children}</View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AuthLayout;
