import { Header } from "../components/header";
import './NotFound.css';

export function NotFound() {
  return(
    <>
    <title>404</title>
      <Header />
      <p className="not-found">Page Not Found</p>
    </>
  );
}