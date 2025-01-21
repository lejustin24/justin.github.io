import React from 'react';
import { HashRouter, Outlet, Route, Routes } from 'react-router-dom';

import Article from './views/Article';
import Articles from './views/Articles';
import Home from './views/Home';
import Main from './views/Main';
import Projects from './views/Projects';

const milestones = {
  posts: Number(import.meta.env.VITE_GITHUB_MILESTONE_POSTS),
  reshares: Number(import.meta.env.VITE_GITHUB_MILESTONE_RESHARES),
};

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />} />
          <Route path="posts" element={<Outlet />}>
            <Route path="" element={<Articles milestone={milestones.posts} />} />
            <Route path=":id" element={<Article />} />
          </Route>
          <Route path="reshares" element={<Outlet />}>
            <Route path="" element={<Articles milestone={milestones.reshares} />} />
            <Route path=":id" element={<Article />} />
          </Route>
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
