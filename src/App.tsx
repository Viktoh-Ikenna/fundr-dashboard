
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Transactions } from './pages/Transactions';


const GetStarted = () => (
  <div className="text-center py-12">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Started</h2>
    <p className="text-gray-600">Welcome to FundR! Let's get you set up.</p>
  </div>
);

const Accounts = () => (
  <div className="text-center py-12">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Accounts</h2>
    <p className="text-gray-600">Manage your accounts here.</p>
  </div>
);

const Transfers = () => (
  <div className="text-center py-12">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Transfers</h2>
    <p className="text-gray-600">Make transfers between accounts.</p>
  </div>
);

const Settings = () => (
  <div className="text-center py-12">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Settings</h2>
    <p className="text-gray-600">Manage your account settings.</p>
  </div>
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="transactions" element={<Transactions />} />
              <Route path="get-started" element={<GetStarted />} />
              <Route path="accounts" element={<Accounts />} />
              <Route path="transfers" element={<Transfers />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
