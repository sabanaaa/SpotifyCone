import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import AuthCallbackPage from "./pages/auth-callback/AuthCalbackPage";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import MainLayout from "./layout/MainLayout";
import ChatPage from "./pages/chat/ChatPage";

function App() {
  return (
    <>  
 <Routes>
 <Route	
 path='/sso-callback'
 element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={"/auth-callback"} />}
 />
<Route path ='/auth-callback' element={<AuthCallbackPage/>} /> 

<Route element={<MainLayout />}>
<Route path='/' element={<Homepage/>}/>
<Route path='/chat' element={<ChatPage />}/>
</Route>
</Routes>
    </>
  );
}

export default App;
