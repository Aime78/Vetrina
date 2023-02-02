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
  title: string;
  description: string;
  children: React.ReactNode;
};

const AuthLayout = ({title, description, children}: AuthLayoutProps) => {
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
          <Text style={styles.title}> {title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View>{children}</View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AuthLayout;
