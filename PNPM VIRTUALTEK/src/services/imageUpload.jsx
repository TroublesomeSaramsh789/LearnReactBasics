import {useMutation} from 'react-query'
import { uploader } from './uploader/uploader'

export const useImageUpload = ()=>{
    return useMutation((payload, folderName)=>{
       
        uploader(`upload?folder=${folderName}`, payload)
    })
}