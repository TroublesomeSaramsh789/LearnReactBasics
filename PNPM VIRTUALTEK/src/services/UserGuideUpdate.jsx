import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { putUploader } from './uploader/uploader';
import { successmessage } from '../utils/message';

import { AuthContext } from '../context/AuthContext';

export const useUpateProfile = () => {
    const navigate = useNavigate()
    const { setProfile } = useContext(AuthContext)
    return useMutation((payload) => putUploader("auth/update-details", payload), {
        onSuccess: (data) => {
            successmessage("Added Team Successfully");
            setProfile(data.data)
            
            if (data?.data?.userType === 'User') {
                navigate('/userdashboard/account')
            } else {
                navigate("/dashboard/profilePage")
            }

        }
    });
}

export const useUpdateGuide = () => {
    const navigate = useNavigate()
    const { setProfile } = useContext(AuthContext)
    return useMutation((payload) => putUploader("guide/update-details", payload), {
        onSuccess: (data) => {
            successmessage("Update Successfully");
            setProfile(data.data)
            navigate("/dashboard/profilePage")
        }
    });
}