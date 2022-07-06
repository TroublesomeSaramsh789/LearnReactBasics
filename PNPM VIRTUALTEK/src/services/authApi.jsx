// don't reference to this file 

import { useContext } from 'react'
//delete after completion
import axios from 'axios'

import { baseurl } from './keys'
// delete end 


import { isError, useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { uploader } from './uploader/uploader'
import { setBearerToken } from '../utils/auth'
import {successmessage, errormessage} from '../utils/message'

import { AuthContext } from '../context/AuthContext'

export const useRegsiterNewUser = () => {
  const navigate = useNavigate()
  return useMutation((payload) => uploader("auth/register", payload), {
    onSuccess: (data) => {
      setBearerToken(data.data.accessToken)
      successmessage("Registered Successfully");
      navigate("/userdashboard")
    }
  });
}
export const useLoginUser = () => {
  const {setIsAuthenticated, setProfile} = useContext(AuthContext)
  const navigate = useNavigate()
  return useMutation((payload) => uploader("auth/login", payload), {
    onSuccess: (data) => {
      setBearerToken(data.data.accessToken)
      const profile = data.data
      delete profile.accessToken
      successmessage("Login Successful");
      setIsAuthenticated(true)
      setProfile(profile)
    
      navigate("/")
    },
    onError:(error) =>{
      errormessage("Login Failed")
      setIsAuthenticated(false)
      navigate("/login")
    }
  });
}




const baseurl_auth = baseurl + "auth/"




export const ulogin_fetcher = (payload) => {
  const url = baseurl_auth + "login"
  return axios.post(url, payload)
}

export const useLogin = () => {
  return useMutation(ulogin_fetcher, {
    onSuccess: (data) => {
      const accessToken = (data.data.data.accessToken)
      localStorage.setItem('loginAccessToken', accessToken)
    },
    onError: () => {
      console.log("Error here")
    }
  })
}

export const googleLoginFetcher = async (payload) => {
  const url = baseurl_auth + "test"
  return await axios.post(url, payload)
}
export const useGoogleLogin = () => {
  return useMutation(googleLoginFetcher)
}

