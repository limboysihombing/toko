import { useCookies } from 'react-cookie';
function CookieServices(key, token) {

  const [cookies, setCookie] = useCookies(['token']);
  setCookie("token", user.token, { path: '/' })

  console.log("cookie saved.")

}

export default CookieServices