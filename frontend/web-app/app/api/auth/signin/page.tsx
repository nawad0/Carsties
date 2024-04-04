import React from 'react';
import EmptyFilter from "@/app/components/EmptyFilter";

export default function Page({searchParams}: {searchParams : {callbackUrl: string}}) {
    return (
        <EmptyFilter title={'You need to be logged in do to that'}
        subtitle={'Please click bellow to sign in'}
        showLogin
        callbackUrl={searchParams.callbackUrl}/>
    );
};