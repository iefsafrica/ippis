import { Routes, Route } from 'react-router-dom';
import IdentityVerification from "./routes/verification/identity-verify";


export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<IdentityVerification />} />
     
    </Routes>
  );
}