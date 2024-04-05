'use client'
import React, {useState} from 'react';
import {Button} from "flowbite-react";
import {useRouter} from "next/navigation";
import {deleteAuction} from "@/app/actions/auctionActions";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import toast from "react-hot-toast";

type Props = {
        id:string
    }
export default function DeleteButton({id}:Props) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    function doDelete()
    {
        setLoading(true);
        deleteAuction(id).then(res => {
            if(res.error) throw res.error;
            router.push('/')

        }).catch(error=>
        {
            toast.error(error.status +' '+ error.message)
        }).finally(()=> setLoading(true));
    }
    return (
       <Button color={'failure'} onClick={doDelete} outline isProcessing={loading}>
           Delete Auction
       </Button>
    );
}
