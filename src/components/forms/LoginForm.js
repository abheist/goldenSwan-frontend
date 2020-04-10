import React, { useEffect } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { MeButton } from "../styles/MeButton";
import { MeTextInput, FormGroup, MeErrorMessage } from "../styles/MeTextInput";
import {
  QL_MUTATION_AUTH_TOKEN_WITH_USERNAME,
  QL_MUTATION_AUTH_TOKEN_VERIFY
} from "../../graphql/mutations/authentication";
import { Flex, FlexItem } from "../styles/Flex";
import {
  setLocalToken,
  setLocalRefreshToken,
  setLocalExpTime,
  getLocalToken
} from "../../helpers/authService";
import { MeCaption } from "../styles/Typography";

function LoginForm({ setToken }) {
  const [requestLogin, { data: loginData }] = useMutation(
    QL_MUTATION_AUTH_TOKEN_WITH_USERNAME
  );

  const [doVerifyToken, { data: verifyTokenData }] = useMutation(
    QL_MUTATION_AUTH_TOKEN_VERIFY
  );

  useEffect(() => {
    if (loginData?.tokenAuth?.success) {
      setLocalToken(loginData.tokenAuth.token);
      setLocalRefreshToken(loginData.tokenAuth.refreshToken);
      doVerifyToken({
        variables: {
          token: loginData.tokenAuth.token
        }
      });
    }
  }, [loginData, doVerifyToken, setToken]);

  useEffect(() => {
    if (verifyTokenData?.verifyToken?.success) {
      setLocalExpTime(verifyTokenData.verifyToken.payload.exp);
      setToken(getLocalToken());
    }
  }, [verifyTokenData, setToken]);

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        validationSchema={Yup.object({
          username: Yup.string().required("Required!"),
          password: Yup.string().required("Required!")
        })}
        onSubmit={(values, { setSubmitting }) => {
          requestLogin({
            variables: {
              email: values.username,
              password: values.password
            }
          }).catch(error => console.log(JSON.stringify(error)));
          setSubmitting = false;
        }}
      >
        <Form>
          <Flex justify="space-between">
            <FormGroup margin={{ right: 10 }}>
              <label htmlFor="username">Username</label>
              <Field
                as={MeTextInput}
                name="username"
                type="text"
                autoComplete="username"
                width="200px"
                tabIndex="1"
              />
              <ErrorMessage component={MeErrorMessage} name="username" />
            </FormGroup>

            <FormGroup margin={{ right: 10 }}>
              <Flex as="label" htmlFor="password" justify="space-between">
                <span>Password</span>
                <FlexItem margin={{ right: 8 }}>
                  <MeCaption as="span">
                    <Link to="/forgot-password/" tabIndex="4">
                      Forgot password?
                    </Link>
                  </MeCaption>
                </FlexItem>
              </Flex>
              <Field
                as={MeTextInput}
                name="password"
                type="password"
                autoComplete="current-password"
                width="200px"
                tabIndex="2"
              />
              <ErrorMessage component={MeErrorMessage} name="password" />
            </FormGroup>
            <FlexItem margin={{ top: 36 }}>
              <MeButton type="submit" kind="primary" tabIndex="3">
                Login
              </MeButton>
            </FlexItem>
          </Flex>
        </Form>
      </Formik>
    </>
  );
}

export default LoginForm;
