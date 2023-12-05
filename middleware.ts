import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "./config/i18n.config";

export default createMiddleware({
  defaultLocale,
  locales,
});

export const config = {
  matcher: ["/", "/(de|en)/:path*"],
};
