import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LoginPage from './pages/LoginPage';

import './App.css';
import MyPage from './pages/MyPage';

import SideMenu from './components/Menu/SideMenu';
import ItemPage from './pages/ItemPage';
import EditPage from './pages/EditPage';
import LoadingModal from './components/Modal/LoadingModal';
import CreateObjectModal from './components/Modal/CreateObjectModal';
import SearchObjectModal from './components/Modal/SearchObjectModal';
import ControllerObjectModal from './components/Modal/ControllerObjectModal';
import CreateProjectModal from './components/Modal/CreateProjectModal';
import FriendsPage from './pages/FriendsPage';
import NewTechPage from './pages/NewTechPage';
import HeaderMenu from './components/Menu/HeaderMenu';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <MainContent />
      </BrowserRouter>
    </RecoilRoot>
  );
}

function MainContent() {
  const location = useLocation();
  const isPage =
    location.pathname.startsWith('/Edit') || location.pathname === '/';

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {!isPage && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '14.47916vw',
            height: '100%',
          }}
        >
          <header>
            <HeaderMenu />
          </header>
          <aside style={{ flex: 1 }}>
            <SideMenu />
          </aside>
        </div>
      )}
      <main style={{ flex: 1, paddingTop: !isPage ? '7.77vh' : '0' }}>
        <LoadingModal />
        <CreateProjectModal />
        <CreateObjectModal />
        <SearchObjectModal />
        <ControllerObjectModal />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Home" element={<MyPage />} />
          <Route path="/Edit/:EditId" element={<EditPage />} />
          <Route path="/Projects" element={<ItemPage />} />
          <Route path="/Friends" element={<FriendsPage />} />
          <Route path="/NewTech" element={<NewTechPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
