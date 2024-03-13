import { login } from "@/lib/api/auth"
import { useSession } from "@/lib/hooks/session"
import { useRouter } from "next/router"
import { useState } from "react"
import styles from "./login.module.css"
import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button"

const defaultModel = {
    email: "",
    password: ""
}

function validateModel(model) {
    const errors = {
        email: "",
        password: ""
    }
    let isValid = true

    if (model.email.trim().length === 0 || !model.email.includes("@")) {
        errors.email = "Email can't be empty and must be valid email"
        isValid = false
    }

    if (model.password.trim().length === 0 || model.password.length < 8) {
        errors.password = "Password can't be empty and must be at least 8 characters long"
        isValid = false
    }

    return { errors, isValid }
}

export default function LoginPage() {
    const { session, signIn } = useSession();
    const router = useRouter();

    const [errors, setErrors] = useState(defaultModel);
    const [isLoading, setIsLoading] = useState(false);
    const [model, setModel] = useState(defaultModel);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setModel({
            ...model,
            [name]: value.trim()
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors(defaultModel);

        const result = validateModel(model);

        if (!result.isValid) {
            setErrors(result.errors);
            setIsLoading(false);
            return;
        }

        try {
            const resp = await login(model);
            signIn(resp);
            const url = router.query.url || "/";
            router.push(url);
        } catch (error) {
            console.error("Login error:", error); // Log the error for debugging
            setErrors({
                ...errors,
                login: "Invalid credentials. Please try again." // Update with more specific error message if needed
            });
        } finally {
            setIsLoading(false);
        }
    };

    return session.user ? null : (
        <>
            <div className={styles.login}>
                <div className={styles["form-container"]}>
                    {errors.login && <h2 className={styles.error}>{errors.login}</h2>}

                    <form onSubmit={handleSubmit}>
                        <div className={styles["form-group"]}>
                            <label>Email:</label>
                            <input type="text" name="email" onChange={handleChange} value={model.email} autoComplete="email" required />
                            {errors.email && <div className={styles["error-message"]}>{errors.email}</div>}
                        </div>

                        <div className={styles["form-group"]}>
                            <label>Password:</label>
                            <input type="password" name="password" onChange={handleChange} value={model.password} autoComplete="current-password" required />
                            {errors.password && <div className={styles["error-message"]}>{errors.password}</div>}
                        </div>

                        <Button disabled={isLoading} type="submit" className={styles["submit-button"]}>
                            {isLoading ? "Loading..." : "Login"}
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
}