import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
    // Match all pathnames within `{/:locale}/users`
    // This will match e.g. /users/jane.doe, also optionally with a locale prefix.
    "/([\\w-]+)?/users/(.+)",
  ],
};

export default createMiddleware(routing);
