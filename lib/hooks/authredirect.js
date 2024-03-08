import { useEffect } from "react"
import { useSession } from "@/lib/hooks/session"
import { useRouter } from "next/router"

export function useAuthRedirect(pageProps) {
    const router = useRouter()
    const { isLoaded, isSignedIn } = useSession()

    useEffect(() => {
        if (!router.isReady || !isLoaded) return
        // Redirect to login page when not authorized on secured pages
        if (pageProps.secured && !isSignedIn) {
            router.replace(`/login?url=${router.asPath}`, null, { shallow: true })
        }

        if (isSignedIn && router.asPath.includes("login")) {
            router.replace("/", "/", { shallow: true })
        }
    }, [pageProps, router.asPath, router.isReady, isLoaded])
}