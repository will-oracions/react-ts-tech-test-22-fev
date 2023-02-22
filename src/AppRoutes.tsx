import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NotFound } from '@Components/index';
import { AppLayout } from '@Layout/index';
import * as Pages from '@Pages/index';
import URLConfig from '@Config/urls.config';

const AppRoutes: React.FC = () => {
  return <>
    <BrowserRouter>
      <Routes>

        <Route path={URLConfig.HOME} element={<AppLayout />}>
          <Route index element={<Pages.Home />} />
          <Route path={URLConfig.POKEMON_LIST} element={<Pages.PokemonList />} />
          <Route path={`${URLConfig.POKEMON_LIST}/:id`} element={<Pages.PokemonListDetails />} />
          <Route path='/test' element={<Pages.Test />} />

          {/* Not found */}
          <Route path={URLConfig.NOT_FOUND} element={<NotFound />} />
          <Route path='*' element={<Navigate to={URLConfig.NOT_FOUND} />} />
        </Route>

      </Routes>
        
    </BrowserRouter>
  </>;
}

export default AppRoutes;