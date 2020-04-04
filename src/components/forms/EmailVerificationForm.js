import React, { useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { QL_MUTATION_VERIFY_ACCOUNT_TOKEN } from '../../graphql/mutations/authentication';
import { toast } from 'react-toastify';

function EmailVerificationForm() {
	const [doVerifyToken, { data }] = useMutation(
		QL_MUTATION_VERIFY_ACCOUNT_TOKEN
	);

	let { token } = useParams();

	useEffect(() => {
		doVerifyToken({ variables: { token: token } });
	}, [token, doVerifyToken]);

	if (data?.verifyAccount?.success) {
		toast('🎉 Account verified!!!');
		return <Redirect to="/" />;
	} else if (
		data?.verifyAccount?.errors?.nonFieldErrors[0].code ===
		'already_verified'
	) {
		toast('✨ Account already verified!!!');
		return <Redirect to="/" />;
	}
	return <div></div>;
}

export default EmailVerificationForm;
