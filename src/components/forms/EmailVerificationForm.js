import React, { useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { QL_MUTATION_VERIFY_ACCOUNT_TOKEN } from '../../graphql/mutations/authentication';

function EmailVerificationForm() {
	const [doVerifyToken, { data }] = useMutation(QL_MUTATION_VERIFY_ACCOUNT_TOKEN);

	const { token } = useParams();

	useEffect(() => {
		doVerifyToken({ variables: { token } });
	}, [token, doVerifyToken]);

	if (data?.verifyAccount?.success) {
		toast('🎉 Account verified!!!');
		return <Redirect to="/" />;
	}
	if (data?.verifyAccount?.errors?.nonFieldErrors[0].code === 'already_verified') {
		toast('✨ Account already verified!!!');
		return <Redirect to="/" />;
	}
	return <div />;
}

export default EmailVerificationForm;
