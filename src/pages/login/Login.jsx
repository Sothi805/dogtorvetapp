import image1 from '../../assets/images/image1.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './login.less';

const Login = () => {
    useEffect(() => {
        document.title = "Sign-in";
    }, []);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage(""); // Reset error message

        if (!username || !password) {
            setErrorMessage("Please enter your username & password.");
            return;
        }

        try {
            await login(username, password);
            // Successful login handled by AuthContext, navigation happens there
        } catch (error) {
            console.error("Login error:", error);
            setErrorMessage(
                error.response?.data?.error ||
                "Incorrect username or password, try again!"
            );
        }
    };

    return (
        <div id="login" className="login">
            <div className="login-form">
                <div className="image-side">
                    <img src={image1} alt="Random Pet Image" />
                </div>
                <div className="form-side">
                    <h1 className="title">
                        <span>:D</span>ogtor VET services
                    </h1>
                    <p className="description">Enter your username and password to continue</p>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            autoComplete="off"
                            name="username"
                            placeholder="Username"
                            aria-label="Username"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                                setErrorMessage("");
                            }}
                        />
                        <div className="password-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                autoComplete="off"
                                name="password"
                                placeholder="Password"
                                aria-label="Password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setErrorMessage("");
                                }}
                            />
                            <button
                                className="password-button"
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                        <button type="submit">Sign In</button>
                    </form>
                    <p className="sign-up">
                        Don't have an account? <span onClick={() => navigate("/register")}>Sign-up</span>
                    </p>
                    <p className="developer-credit">This website was developed by @Veth Sothi</p>
                </div>
            </div>
        </div>
    );
};

export default Login;