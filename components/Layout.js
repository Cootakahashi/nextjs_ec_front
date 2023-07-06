import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { refresh } from "../actions/auth";
import Head from "next/head";
// import Navigation from "./Navigation";

const Layout = (props) => {
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     const fn = async () => {
  //       if (dispatch && dispatch !== null && dispatch !== undefined) {
  //         await dispatch(refresh());
  //       }
  //     };
  //     fn();
  //   }, [dispatch]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* <Navigation /> */}
      <div className="">{props.children}</div>
    </>
  );
};

export default Layout;
