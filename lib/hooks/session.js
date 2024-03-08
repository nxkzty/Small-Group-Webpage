import { atom, useAtom } from "jotai"
import { useEffect } from "react"

const STORAGE_KEY = "session"

const defaultSession = {
    user: null,
    token: null
}

const sessionAtom = atom(defaultSession)
const isLoadingAtom = atom(true)

export function useSession() {
    const [session, setSession] = useAtom(sessionAtom)
    const [isLoading, setIsLoading] = useAtom(isLoadingAtom)

    useEffect(() => {
        const savedSession = localStorage.getItem(STORAGE_KEY);
        if (savedSession) {
            try {
                setSession(JSON.parse(savedSession));
            } catch (e) {
                console.error(e);
            }
        }
        setIsLoading(false)
    }, []);

    const signIn = (session) => {
        if (!session.token || !session.user) {
            throw new Error("Token and user must be supplied to signIn()!")
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
        setSession(session)
    }

    const signOut = () => {
        localStorage.removeItem(STORAGE_KEY);
        setSession(defaultSession)
    }
    
    return {
        session,
        isLoaded: !isLoading,
        isSignedIn: session.user !== null && session.token !== null,
        signIn,
        signOut
    }
}