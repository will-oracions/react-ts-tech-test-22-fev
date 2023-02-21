import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NotFound } from '@Components/index';
import { AppLayout } from '@Layout/index';
import AppUrl from '@Config/urls.config';
import * as Pages from '@Pages/index';

const AppRoutes: React.FC = () => {
  return <>
    <BrowserRouter>
      <Routes>

        <Route path={AppUrl.HOME} element={<AppLayout />}>
          <Route index element={<Pages.Home />} />

          {/* Not found */}
          <Route path={AppUrl.NOT_FOUND} element={<NotFound />} />
          <Route path='*' element={<Navigate to={AppUrl.NOT_FOUND} />} />
        </Route>

      </Routes>
        
    </BrowserRouter>
  </>;
}

export default AppRoutes;