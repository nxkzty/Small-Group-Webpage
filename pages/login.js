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
    const { session, signIn } = useSession()
    const router = useRouter()

    const [errors, setErrors] = useState(defaultModel)
    const [isLoading, setIsLoading] = useState(false)
    const [model, setModel] = useState(defaultModel)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value?.trim()

        setModel({
            ...model,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setErrors(defaultModel)

        const result = validateModel(model)

        if (!result.isValid) {
            setErrors(result.errors)
            setIsLoading(false)
            return
        }

        try {
            const resp = await login(model)
            signIn(resp)
            const url = router.query.url
            if (url) {
                router.push(url)
            } else {
                router.push("/")
            }
        } catch (e) {
            setErrors({
                ...errors,
                login: "Login failed"
            })
            setIsLoading(false)
        }
    }
    

    return session.user ? null : (
        <>
        <div className={styles.login}>
            {errors.login && <h2 className={styles.error}>{errors.login}</h2>}

            <form onSubmit={handleSubmit} style={{margin: "10px", marginTop: "20px"}}>
                <label style={{margin: "10px"}}>Email:</label>
                <InputText type="text" name="email" onChange={handleChange} value={model.email} autoComplete="email" required />
                {errors.email && <div className={styles.error}>{errors.email}</div>}

                <label style={{margin: "10px"}}>Password:</label>
                <InputText type="password" name="password" onChange={handleChange} value={model.password} autoComplete="current-password" required />
                {errors.password && <div className={styles.error}>{errors.password}</div>}

                <Button disabled={isLoading} type="submit" label={isLoading ? "Loading..." : "Login"} style={{marginLeft: "10px"}} />
            </form>
        </div>

        </>

    )
}
