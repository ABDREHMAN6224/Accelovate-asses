import SignInComp from '@/components/Singin';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

const SigninPage = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect('/');
  }
  else{
    return <SignInComp />;
  }
};

export default SigninPage;