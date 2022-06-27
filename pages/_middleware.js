import { NextResponse } from 'next/server';
import jwtDecode from 'jwt-decode';

export default function middleware(req) {
  const { token } = req.cookies;
  const { pathname, origin } = req.nextUrl;

  let decoded = '';
  if (token) {
    decoded = jwtDecode(token);
  }

  // Private Route
  if (!token) {
    if (
      pathname !== '/' &&
      pathname !== '/auth/login' &&
      pathname !== '/auth/register' &&
      pathname !== '/auth/forgot' &&
      !pathname.match(/\/auth\/reset\/[\w]*/gi)
    ) {
      return NextResponse.redirect(`${origin}/auth/login`);
    }
  }

  // Public Route
  if (token) {
    if (
      pathname === '/auth/login' ||
      pathname === '/auth/register' ||
      pathname === '/auth/forgot' ||
      pathname.match(/\/auth\/reset\/[\w]*/gi)
    ) {
      return NextResponse.redirect(`${origin}`);
    }
  }

  // Validate Worker
  if (
    decoded.role === 0 &&
    (pathname === '/recruiter' || pathname === '/recruiter/edit')
  ) {
    return NextResponse.redirect(`${origin}/worker`);
  }

  // Validate Recruiter
  if (
    decoded.role === 1 &&
    (pathname === '/worker' ||
      pathname === '/worker/edit' ||
      pathname === '/worker/:id')
  ) {
    return NextResponse.redirect(`${origin}/recruiter`);
  }
}
