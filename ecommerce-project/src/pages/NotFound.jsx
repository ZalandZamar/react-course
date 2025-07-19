import { Header } from "../components/header";
import './NotFound.css';

export function NotFound({ cart }) {
  return(
    <>
    <title>404</title>
      <Header cart={cart} />
      <p className="not-found">Page Not Found</p>
    </>
  );
}