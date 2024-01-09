import HomePage from 'Components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}>
          <Route index element={<div>home</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}