import Main from '../main/main';
type AppProps = {
  countriesQty: number;
};
function App({ countriesQty }: AppProps): JSX.Element {
  return <Main countriesQty={countriesQty} />;
}

export default App;
