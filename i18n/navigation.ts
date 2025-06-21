import { createNavigation } from "next-intl/navigation";
import { routing } from './routing.js';

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
// @ts-ignore
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
