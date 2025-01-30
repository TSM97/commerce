import { Navigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import AdminLogin from "../AdminLogin";

export default function AuthRedirect() {
  return auth.currentUser ? <Navigate to="/admin" /> : <AdminLogin />;
}
