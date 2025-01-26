import image1 from '../../assets/images/image1.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.less'

const Login = () => {
    useEffect(() => {
        document.title = "Sign-in";
    }, []);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3500/users/login", {
                username: username,
                password: password,
            }, { withCredentials: true });

            const data = response.data;

            if (response.status === 200) {
                localStorage.setItem("authToken", data.token);
                console.log("Login successful");
                navigate("/home");
            }
        } catch (error) {
            if (error.response) {
                // Server responded with an error
                console.error("Login failed:", error.response.data);
                if (!username || !password) {
                    setErrorMessage("Please enter your username & password.");
                } else {
                    setErrorMessage("Incorrect username or password, try again!");
                }
            } else {
                // Network or other error
                console.error("Error:", error.message);
                setErrorMessage("Something went wrong. Please try again.");
            }
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
                                setErrorMessage(null); // Clear error message
                            }}
                        />
                        <div>
                            <input
                                type={showPassword ? "text" : "password"}
                                autoComplete="off"
                                name="password"
                                placeholder="Password"
                                aria-label="Password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setErrorMessage(null); // Clear error message
                                }}
                            />
                            <button
                                className="password-button"
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                        <button type="submit">Sign In</button>
                    </form>
                    <p className="sign-up">
                        Don't have an account? <span onClick={() => navigate("/")}>Sign-up</span>
                    </p>
                    <p>This website was developed by @Veth Sothi</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
