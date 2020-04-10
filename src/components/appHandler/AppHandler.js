import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { QL_MUTATION_AUTH_REFRESH_TOKEN } from "../../graphql/mutations/authentication";
import {
  getLocalExpTime,
  getLocalRefreshToken,
  getLocalToken,
  setLocalToken,
  setLocalRefreshToken,
  setLocalExpTime
} from "../../helpers/authService";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";

function AppHandler() {
  const [doRefreshToken, { data: refreshTokenData, error }] = useMutation(
    QL_MUTATION_AUTH_REFRESH_TOKEN
  );

  useEffect(() => {
    if (
      getLocalExpTime() &&
      Math.round(Date.now() / 1000) > getLocalExpTime()
    ) {
      doRefreshToken({
        variables: {
          refreshToken: getLocalRefreshToken()
        }
      }).catch(error => console.log(error));
    }
  }, [doRefreshToken]);

  useEffect(() => {
    if (refreshTokenData?.refreshToken?.success) {
      setLocalToken(refreshTokenData.refreshToken.token);
      setLocalRefreshToken(refreshTokenData.refreshToken.refreshToken);
      setLocalExpTime(refreshTokenData.refreshToken.payload.exp);
    }
  }, [refreshTokenData]);

  const [token, setToken] = useState(getLocalToken() || undefined);

  if (error) {
    return (
      <div>
        Server error!!! Please contact
        <a href="mailto:hi@abhiy.com"> admin</a>
      </div>
    );
  }
  return (
    <>
      {token ? (
        <AuthenticatedApp />
      ) : (
        <UnauthenticatedApp setToken={setToken} />
      )}
    </>
  );
}

export default AppHandler;
