import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, logoContainer: {
    flex: 2,
    backgroundColor: '#073f12',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 280,
    resizeMode: 'contain',
  },
  signInContainer: {
    flex: 9,
    backgroundColor: '#fcfdfc',
    padding: 30,
    alignItems: 'center',
  },
  signInHelp: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    alignSelf: 'stretch',
    backgroundColor: '#f3f3f3',
    borderWidth: 2,
    borderColor: '#dcdcdc',
    fontSize: 16,
    borderRadius: 4,
    padding: 12,
    marginBottom: 20,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#3b6043',
    borderRadius: 4,
    padding: 12,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#fcfdfc',
  },
  extraDetails: {
    flexDirection: 'row',
    backgroundColor: '#fcfdfc',
    borderTopWidth: 2,
    borderColor: '#dcdcdc',
    height: 45,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles;

// logomakr.com/7dwAhH
// #073f12
