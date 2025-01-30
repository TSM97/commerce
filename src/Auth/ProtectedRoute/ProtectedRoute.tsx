import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { User } from "@firebase/auth";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currectUser) => {
      setUser(currectUser);
      setLoading(false);
    });
    return () => unsubscribe();
  });

  if (loading) return <p>Loading....</p>;

  return user ? children : <Navigate to="/admin/auth" />;
}
