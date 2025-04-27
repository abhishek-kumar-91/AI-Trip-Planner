import { SignIn } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function SignInPage() {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    }
  }, [isSignedIn, navigate]);

  return (
    <div style={{ marginTop: "50px" }}>
      <SignIn path="/sign-in" routing="path" />
    </div>
  );
}

export default SignInPage;
