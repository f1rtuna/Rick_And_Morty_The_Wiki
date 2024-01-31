import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Navbar from './components/Navbar.jsx';
import App from './App.jsx'
import CharacterInfo from './pages/CharacterInfo.jsx';
import EpisodeInfo from './pages/EpisodeInfo.jsx';
import './index.css'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/character/:id" element={<CharacterInfo />} />
        <Route path="/episode/:id" element={<EpisodeInfo />} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
)
