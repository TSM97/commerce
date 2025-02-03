import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Spinner from "../../Components/Common/Spinner/Spinner";
import CustomButton from "../../Components/Common/CustomButton";
import CustomInput from "../../Components/Common/Input/CustomInput";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
      navigate("/admin");
    } catch (err) {
      setError("Invalid credentials");
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="w-5/6 lg:w-1/4 p-8 md:min-h-[450px] border-4 border-dashed border-primary-100 text-lg">
        <form onSubmit={handleLogin}>
          <h2 className="font-extrabold mb-4 text-2xl lg:text-[1.3vw] text-center">
            Sign In
          </h2>
          <CustomInput
            ClassName="mb-4"
            Type="email"
            Name="email"
            Id="email"
            OnChange={(e) => setEmail(e.target.value)}
            Label="email"
            value={email}
          />
          <CustomInput
            ClassName="mb-4"
            Name="password"
            Label="password"
            Type="password"
            Id="password"
            OnChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="flex flex-col items-center">
            <CustomButton
              type="submit"
              className={`w-full ${
                isLoading ? "scale-0 opacity-0" : "scale-100 opacity-100"
              } transition-transform duration-500`}
              disabled={isLoading}
            >
              {isLoading ? "Validating..." : "Continue"}
            </CustomButton>
            {error && <p>{error}</p>}
            <div
              className={`scale-0 ${
                isLoading ? "scale-100 opacity-100" : "scale-0 opacity-0"
              } transition-transform duration-500 text-center`}
            >
              {isLoading && (
                <div className="mt-4">
                  <p>
                    Please wait, we are processing your request. This might take
                    a few seconds. Don't close or refresh the page.
                  </p>
                  <Spinner ClassName="absolute top-0 left-1/2" />
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AdminLogin;
